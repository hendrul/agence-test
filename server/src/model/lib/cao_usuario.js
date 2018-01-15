/* eslint-disable no-tabs */
// @flow
const { Sequelize, Model, DataTypes } = require('sequelize')
const { Options, Attributes } = require('sequelize-decorators')

module.exports.default = (sequelize: Sequelize): Model => {
  const { models } = sequelize

  @Options({
    tableName: 'cao_usuario',
    reports: {
      comercialPerformance: {
        slug: 'comercial_performance',
        args: {
          fecIni: {
            type: 'date',
            required: true,
          },
          fecFin: {
            type: 'date',
            required: true,
          },
        },
        method: (fecIni, fecFin) => sequelize.query(`
          SELECT 
              co_usuario codigo,
              no_usuario usuario,
              refmes,
              receitaLiquida,
              custoFixo,
              comissao,
              sum(receitaLiquida-(custoFixo+comissao)) lucro
          FROM (
             SELECT
                 co_usuario,
                 no_usuario,
                 refmes,
                 sum(receitaLiquida) receitaLiquida,
                 custoFixo,
                 sum(comissao) comissao
             FROM (
              SELECT cao_usuario.co_usuario co_usuario,
                   cao_usuario.no_usuario no_usuario,
                   cao_salario.brut_salario custoFixo,
                   ${sequelize.options.dialect === 'sqlite' ? 'strftime("%Y-%m", cao_fatura.data_emissao) refmes,' : ''}
                   ${sequelize.options.dialect === 'mysql' ? 'DATE_FORMAT(cao_fatura.data_emissao, "%Y-%m") refmes,' : ''}
                   (cao_fatura.valor - (cao_fatura.valor * cao_fatura.total_imp_inc / 100)) receitaLiquida,
                   ((cao_fatura.valor - cao_fatura.valor * cao_fatura.total_imp_inc / 100) * (cao_fatura.comissao_cn / 100)) comissao
              FROM cao_usuario
                JOIN permissao_sistema ON (cao_usuario.co_usuario = permissao_sistema.co_usuario)
                JOIN (cao_os
                   JOIN cao_fatura ON (cao_os.co_os = cao_fatura.co_os)
                ) ON ( cao_usuario.co_usuario = cao_os.co_usuario )
                JOIN cao_salario ON (cao_usuario.co_usuario = cao_salario.co_usuario)
              WHERE permissao_sistema.co_sistema = 1
              AND permissao_sistema.in_ativo = 'S'
              AND permissao_sistema.co_tipo_usuario IN (0,1,2)
              AND cao_fatura.data_emissao BETWEEN '${fecIni}'
                                              AND '${fecFin}'
            )	AS r1
            GROUP BY co_usuario, no_usuario, refmes, custoFixo
          ) AS r2
          GROUP BY codigo, usuario, refmes, custoFixo, receitaLiquida, comissao
          ORDER BY refmes
          `, { type: sequelize.QueryTypes.SELECT }),
      },
    },
    validate: {
      // POST-VALIDACIONES
    },
    sequelize,
  })
  @Attributes({
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    no_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    ds_senha: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: '',
    },
    co_usuario_autorizacao: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    nu_matricula: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01',
    },
    dt_admissao_empresa: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01',
    },
    dt_desligamento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    dt_inclusao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '1970-01-01 00:00:00',
    },
    dt_expiracao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01',
    },
    nu_cpf: {
      type: DataTypes.STRING(14),
      allowNull: true,
    },
    nu_rg: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    no_orgao_emissor: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    uf_orgao_emissor: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ds_endereco: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    no_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    no_email_pessoal: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nu_telefone: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    dt_alteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '1970-01-01 00:00:00',
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    instant_messenger: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    icq: {
      type: DataTypes.INTEGER(13).UNSIGNED,
      allowNull: true,
    },
    msn: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    yms: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ds_comp_end: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ds_bairro: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    nu_cep: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    no_cidade: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    uf_cidade: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    dt_expedicao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  })
  class CaoUsuario extends Model {
    static slug = 'usuarios'
    static associate() {
    }
  }

  return CaoUsuario
}
