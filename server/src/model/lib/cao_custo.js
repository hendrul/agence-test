/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoCusto', {
		coCusto: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_custo'
		},
		coTipoCusto: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			field: 'co_tipo_custo'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '0',
			field: 'descricao'
		},
		coEscritorio: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			field: 'co_escritorio'
		},
		dtCompra: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_compra'
		},
		dtPagamento: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_pagamento'
		},
		coBoleto: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'co_boleto'
		},
		valor: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'valor'
		},
		parcela: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'parcela'
		},
		pag: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'pag'
		},
		coCustoHigh: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_custo_high'
		}
	}, {
		tableName: 'cao_custo'
	});
};
