/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoObsCliente', {
		coObs: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_obs'
		},
		descricao: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: '',
			field: 'descricao'
		},
		coCliente: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		coUsuario: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '',
			field: 'co_usuario'
		},
		dtObs: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_obs'
		}
	}, {
		tableName: 'cao_obs_cliente'
	});
};
