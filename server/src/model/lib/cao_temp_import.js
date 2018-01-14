/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoTempImport', {
		codigo: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'codigo'
		},
		descricao: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: '',
			field: 'descricao'
		}
	}, {
		tableName: 'cao_temp_import'
	});
};
