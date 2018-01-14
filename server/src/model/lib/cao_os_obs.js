/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsObs', {
		coObs: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_obs'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_os'
		},
		coUsuario: {
			type: DataTypes.STRING(80),
			allowNull: true,
			defaultValue: '0',
			field: 'co_usuario'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'descricao'
		},
		dtObs: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_obs'
		}
	}, {
		tableName: 'cao_os_obs'
	});
};
