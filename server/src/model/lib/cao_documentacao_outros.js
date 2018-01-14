/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoDocumentacaoOutros', {
		id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(70),
			allowNull: false,
			defaultValue: '',
			field: 'nome'
		},
		coSistema: {
			type: DataTypes.INTEGER(30),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		}
	}, {
		tableName: 'cao_documentacao_outros'
	});
};
