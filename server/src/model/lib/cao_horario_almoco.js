/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHorarioAlmoco', {
		coUsuario: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		almocoSaidaHora: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '0',
			field: 'almoco_saida_hora'
		},
		almocoVoltaHora: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '0',
			field: 'almoco_volta_hora'
		}
	}, {
		tableName: 'cao_horario_almoco'
	});
};
