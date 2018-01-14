/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoAgendamento', {
		coAgendamento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_agendamento'
		},
		dtHrInicio: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_hr_inicio'
		},
		dtHrFim: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dt_hr_fim'
		},
		coStatusAgendamento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_status_agendamento'
		},
		coDiaryReportConsultor: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_diary_report_consultor'
		},
		coComplemento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_complemento'
		}
	}, {
		tableName: 'cao_agendamento'
	});
};
