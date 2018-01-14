/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsPrazo', {
		coPrazo: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_prazo'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_os'
		},
		coFase: {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: true,
			defaultValue: '0',
			field: 'co_fase'
		},
		totalAnalista: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: '0',
			field: 'total_analista'
		},
		totalHora: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'total_hora'
		}
	}, {
		tableName: 'cao_os_prazo'
	});
};
