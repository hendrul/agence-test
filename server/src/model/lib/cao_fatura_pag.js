/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoFaturaPag', {
		idFaturaPag: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id_fatura_pag'
		},
		coFatura: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			unique: true,
			field: 'co_fatura'
		},
		dtEfetuado: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_efetuado'
		},
		valorPago: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'valor_pago'
		}
	}, {
		tableName: 'cao_fatura_pag'
	});
};
