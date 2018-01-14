/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoComplemento', {
		coComplemento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_complemento'
		},
		dsComplemento: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_complemento'
		}
	}, {
		tableName: 'cao_complemento'
	});
};
