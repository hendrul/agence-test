/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsAnalista', {
		coAnalista: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_analista'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_os'
		},
		coUsuario: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: '0',
			field: 'co_usuario'
		}
	}, {
		tableName: 'cao_os_analista'
	});
};
