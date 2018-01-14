/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoDiaryReport', {
		coDiaryReport: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_diary_report'
		},
		hrGasta: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: '00:00:00',
			field: 'hr_gasta'
		},
		coAtividade: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'co_atividade'
		},
		dsAssunto: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_assunto'
		},
		coMovimento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_movimento'
		},
		nuOs: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'nu_os'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'co_sistema'
		}
	}, {
		tableName: 'cao_diary_report'
	});
};
