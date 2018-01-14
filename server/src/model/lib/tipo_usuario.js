/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipoUsuario', {
		coTipoUsuario: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_tipo_usuario'
		},
		dsTipoUsuario: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: '',
			field: 'ds_tipo_usuario'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_sistema'
		}
	}, {
		tableName: 'tipo_usuario'
	});
};
