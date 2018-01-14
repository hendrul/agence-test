/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permissaoSistema', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		coTipoUsuario: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_tipo_usuario'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_sistema'
		},
		inAtivo: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: 'S',
			field: 'in_ativo'
		},
		coUsuarioAtualizacao: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'co_usuario_atualizacao'
		},
		dtAtualizacao: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_atualizacao'
		}
	}, {
		tableName: 'permissao_sistema'
	});
};
