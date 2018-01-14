/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoPagamento', {
		coPagamento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_pagamento'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		tpPagamento: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '0',
			field: 'tp_pagamento'
		},
		dtPagamento: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_pagamento'
		},
		vlPagamento: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'vl_pagamento'
		},
		dtReferenciaPagamento: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_referencia_pagamento'
		}
	}, {
		tableName: 'cao_pagamento'
	});
};
