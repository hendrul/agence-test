/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoSalarioPag', {
		idPagamento: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'id_pagamento'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			references: {
				model: 'cao_usuario',
				key: 'co_usuario'
			},
			field: 'co_usuario'
		},
		dtEfetuado: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_efetuado'
		},
		status: {
			type: DataTypes.ENUM('Autorizado','Pago','Pendente'),
			allowNull: false,
			defaultValue: 'Pendente',
			field: 'status'
		},
		observacao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'observacao'
		}
	}, {
		tableName: 'cao_salario_pag'
	});
};
