/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoStatusAgendamento', {
		coStatusAgendamento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_status_agendamento'
		},
		dsStatusAgendamento: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'ds_status_agendamento'
		}
	}, {
		tableName: 'cao_status_agendamento'
	});
};
