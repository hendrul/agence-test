/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoDiaryReportConsultor', {
		coDiaryReportConsultor: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_diary_report_consultor'
		},
		coMovimento: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			defaultValue: '0',
			field: 'co_movimento'
		},
		coAtividade: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			defaultValue: '0',
			field: 'co_atividade'
		},
		dsEmpresa: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_empresa'
		},
		dsAssunto: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_assunto'
		},
		dtAgendamento: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_agendamento'
		},
		dtAgendamentoFim: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dt_agendamento_fim'
		},
		vlFechamento: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'vl_fechamento'
		},
		coCliente: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'co_cliente'
		}
	}, {
		tableName: 'cao_diary_report_consultor'
	});
};
