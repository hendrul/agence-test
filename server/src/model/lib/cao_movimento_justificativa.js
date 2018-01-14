/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoMovimentoJustificativa', {
		coMovimentoJustificativa: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_movimento_justificativa'
		},
		coMovimento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_movimento'
		},
		nuOs: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'nu_os'
		},
		dsJustificativa: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_justificativa'
		}
	}, {
		tableName: 'cao_movimento_justificativa'
	});
};
