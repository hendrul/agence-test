/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoDocumentacaoSistema', {
		id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coSistema: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'descricao'
		},
		pasta: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '',
			field: 'pasta'
		},
		subGrupo: {
			type: DataTypes.INTEGER(20),
			allowNull: true,
			field: 'sub_grupo'
		},
		coUsuario: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		dtDoc: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_doc'
		},
		arquivo: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '',
			field: 'arquivo'
		}
	}, {
		tableName: 'cao_documentacao_sistema'
	});
};
