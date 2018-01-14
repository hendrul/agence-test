/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsStatus', {
		coStatusAtual: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_status_atual'
		},
		dsStatus: {
			type: DataTypes.CHAR(50),
			allowNull: false,
			defaultValue: '',
			field: 'ds_status'
		}
	}, {
		tableName: 'cao_os_status'
	});
};
