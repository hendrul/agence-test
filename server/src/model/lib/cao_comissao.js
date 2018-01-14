/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoComissao', {
		coComissao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_comissao'
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
		}
	}, {
		tableName: 'cao_comissao'
	});
};
