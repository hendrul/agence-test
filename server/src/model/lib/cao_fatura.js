/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoFatura', {
		coFatura: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_fatura'
		},
		coCliente: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		coSistema: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			defaultValue: '0',
			field: 'co_os'
		},
		numNf: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: '0',
			field: 'num_nf'
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'total'
		},
		valor: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'valor'
		},
		dataEmissao: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'data_emissao'
		},
		corpoNf: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'corpo_nf'
		},
		comissaoCn: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'comissao_cn'
		},
		totalImpInc: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'total_imp_inc'
		}
	}, {
		tableName: 'cao_fatura'
	});
};
