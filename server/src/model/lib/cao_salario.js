/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoSalario', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		dtAlteracao: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			primaryKey: true,
			field: 'dt_alteracao'
		},
		brutSalario: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'brut_salario'
		},
		liqSalario: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'liq_salario'
		}
	}, {
		tableName: 'cao_salario'
	});
};
