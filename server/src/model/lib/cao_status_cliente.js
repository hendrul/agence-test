/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoStatusCliente', {
		coStatus: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_status'
		},
		dsStatus: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '',
			field: 'ds_status'
		}
	}, {
		tableName: 'cao_status_cliente'
	});
};
