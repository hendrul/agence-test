/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoRamo', {
		coRamo: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_ramo'
		},
		dsRamo: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: '',
			field: 'ds_ramo'
		}
	}, {
		tableName: 'cao_ramo'
	});
};
