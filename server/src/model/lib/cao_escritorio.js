/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoEscritorio', {
		coEscritorio: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_escritorio'
		},
		local: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '',
			field: 'local'
		}
	}, {
		tableName: 'cao_escritorio'
	});
};
