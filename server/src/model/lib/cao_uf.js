/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoUf', {
		coUf: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_uf'
		},
		dsUf: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: '',
			field: 'ds_uf'
		}
	}, {
		tableName: 'cao_uf'
	});
};
