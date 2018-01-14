/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoTipoSistemaUsuario', {
		coSistema: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_sistema'
		},
		dsSistema: {
			type: DataTypes.STRING(40),
			allowNull: true,
			field: 'ds_sistema'
		}
	}, {
		tableName: 'cao_tipo_sistema_usuario'
	});
};
