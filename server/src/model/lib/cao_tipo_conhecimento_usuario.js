/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoTipoConhecimentoUsuario', {
		coConhecimento: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_conhecimento'
		},
		dsConhecimento: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'ds_conhecimento'
		},
		coSistema: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		}
	}, {
		tableName: 'cao_tipo_conhecimento_usuario'
	});
};
