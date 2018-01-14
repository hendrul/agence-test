/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoFeriados', {
		dia: {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: true,
			defaultValue: '0',
			field: 'dia'
		},
		mes: {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: true,
			defaultValue: '0',
			field: 'mes'
		},
		ano: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			field: 'ano'
		}
	}, {
		tableName: 'cao_feriados'
	});
};
