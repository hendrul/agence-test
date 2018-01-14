/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoAtividadeTeste', {
		coAtividade: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_atividade'
		},
		dsAtividade: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '',
			field: 'ds_atividade'
		},
		coTipoUsuario: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_tipo_usuario'
		}
	}, {
		tableName: 'cao_atividade_teste'
	});
};
