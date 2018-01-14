/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsEmail', {
		coEmail: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_email'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_os'
		},
		email: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: '0',
			field: 'email'
		},
		senha: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: '0',
			field: 'senha'
		},
		nome: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'nome'
		},
		coCliente: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		ativo: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'ativo'
		},
		ddd: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'ddd'
		},
		tel: {
			type: DataTypes.STRING(40),
			allowNull: true,
			field: 'tel'
		},
		cargo: {
			type: DataTypes.STRING(80),
			allowNull: true,
			field: 'cargo'
		}
	}, {
		tableName: 'cao_os_email'
	});
};
