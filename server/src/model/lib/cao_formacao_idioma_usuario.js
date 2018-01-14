/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoFormacaoIdiomaUsuario', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		coIdioma: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_idioma'
		},
		nvLeitura: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nv_leitura'
		},
		nvEscrita: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nv_escrita'
		},
		nvFala: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nv_fala'
		}
	}, {
		tableName: 'cao_formacao_idioma_usuario'
	});
};
