/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoBancoHoras', {
		coBancHoras: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_banc_horas'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		periodo: {
			type: DataTypes.STRING(7),
			allowNull: false,
			defaultValue: '',
			field: 'periodo'
		},
		minMes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'min_mes'
		},
		minFerias: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'min_ferias'
		},
		minPago: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'min_pago'
		},
		minTotal: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'min_total'
		}
	}, {
		tableName: 'cao_banco_horas'
	});
};
