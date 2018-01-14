/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoConhecimentoUsuario', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		coConhecimento: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_conhecimento'
		},
		nvConhecimento: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: true,
			field: 'nv_conhecimento'
		},
		isCertificado: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: true,
			field: 'is_certificado'
		}
	}, {
		tableName: 'cao_conhecimento_usuario'
	});
};
