/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoUsuario', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		noUsuario: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'no_usuario'
		},
		dsSenha: {
			type: DataTypes.STRING(14),
			allowNull: false,
			defaultValue: '',
			field: 'ds_senha'
		},
		coUsuarioAutorizacao: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'co_usuario_autorizacao'
		},
		nuMatricula: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'nu_matricula'
		},
		dtNascimento: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '0000-00-00',
			field: 'dt_nascimento'
		},
		dtAdmissaoEmpresa: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '0000-00-00',
			field: 'dt_admissao_empresa'
		},
		dtDesligamento: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_desligamento'
		},
		dtInclusao: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_inclusao'
		},
		dtExpiracao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '0000-00-00',
			field: 'dt_expiracao'
		},
		nuCpf: {
			type: DataTypes.STRING(14),
			allowNull: true,
			field: 'nu_cpf'
		},
		nuRg: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'nu_rg'
		},
		noOrgaoEmissor: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'no_orgao_emissor'
		},
		ufOrgaoEmissor: {
			type: DataTypes.STRING(2),
			allowNull: true,
			field: 'uf_orgao_emissor'
		},
		dsEndereco: {
			type: DataTypes.STRING(150),
			allowNull: true,
			field: 'ds_endereco'
		},
		noEmail: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'no_email'
		},
		noEmailPessoal: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'no_email_pessoal'
		},
		nuTelefone: {
			type: DataTypes.STRING(64),
			allowNull: true,
			field: 'nu_telefone'
		},
		dtAlteracao: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_alteracao'
		},
		urlFoto: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'url_foto'
		},
		instantMessenger: {
			type: DataTypes.STRING(80),
			allowNull: true,
			field: 'instant_messenger'
		},
		icq: {
			type: DataTypes.INTEGER(13).UNSIGNED,
			allowNull: true,
			field: 'icq'
		},
		msn: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'msn'
		},
		yms: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'yms'
		},
		dsCompEnd: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_comp_end'
		},
		dsBairro: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'ds_bairro'
		},
		nuCep: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'nu_cep'
		},
		noCidade: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'no_cidade'
		},
		ufCidade: {
			type: DataTypes.STRING(2),
			allowNull: true,
			field: 'uf_cidade'
		},
		dtExpedicao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_expedicao'
		}
	}, {
		tableName: 'cao_usuario'
	});
};
