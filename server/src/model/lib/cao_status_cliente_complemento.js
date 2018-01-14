/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoStatusClienteComplemento', {
		coComplementoStatus: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_complemento_status'
		},
		dsStatus: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: '',
			field: 'ds_status'
		},
		coStatus: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			field: 'co_status'
		}
	}, {
		tableName: 'cao_status_cliente_complemento'
	});
};
