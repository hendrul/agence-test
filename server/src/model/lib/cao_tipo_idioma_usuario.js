/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoTipoIdiomaUsuario', {
		coIdioma: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_idioma'
		},
		dsIdioma: {
			type: DataTypes.STRING(13),
			allowNull: true,
			field: 'ds_idioma'
		}
	}, {
		tableName: 'cao_tipo_idioma_usuario'
	});
};
