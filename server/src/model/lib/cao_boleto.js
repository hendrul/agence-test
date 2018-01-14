/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoBoleto', {
		coBoleto: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_boleto'
		},
		coCliente: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		coSistema: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		coOs: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			defaultValue: '0',
			field: 'co_os'
		},
		valor: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'valor'
		},
		vencimento: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'vencimento'
		},
		status: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		},
		boleto: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'boleto'
		},
		linhaDig: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'linha_dig'
		},
		parcela: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'parcela'
		}
	}, {
		tableName: 'cao_boleto'
	});
};
