/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsDailyReport', {
		coDaily: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_daily'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_os'
		},
		coFase: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0',
			field: 'co_fase'
		},
		coUsuario: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'co_usuario'
		},
		dsAssunto: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_assunto'
		},
		tempoGasto: {
			type: DataTypes.TIME,
			allowNull: true,
			field: 'tempo_gasto'
		},
		data: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'data'
		},
		coStatusAtual: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'co_status_atual'
		},
		coChamado: {
			type: DataTypes.INTEGER(20),
			allowNull: true,
			field: 'co_chamado'
		},
		coAtividade: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			field: 'co_atividade'
		}
	}, {
		tableName: 'cao_os_daily_report'
	});
};
