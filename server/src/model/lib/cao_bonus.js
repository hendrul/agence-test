/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoBonus', {
		bonCategoria: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'bon_categoria'
		},
		bonInicio: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'bon_inicio'
		},
		bonFim: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'bon_fim'
		},
		bonValorSem: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'bon_valor_sem'
		},
		bonValorFimsem: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'bon_valor_fimsem'
		}
	}, {
		tableName: 'cao_bonus'
	});
};
