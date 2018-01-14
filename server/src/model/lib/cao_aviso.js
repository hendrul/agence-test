/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoAviso', {
		coAviso: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_aviso'
		},
		dsAviso: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_aviso'
		}
	}, {
		tableName: 'cao_aviso'
	});
};
