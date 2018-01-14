/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHelpStatusChamado', {
		coStatus: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_status'
		},
		dsStatus: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0',
			field: 'ds_status'
		}
	}, {
		tableName: 'cao_help_status_chamado'
	});
};
