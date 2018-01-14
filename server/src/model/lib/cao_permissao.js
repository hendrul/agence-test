/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoPermissao', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			references: {
				model: 'cao_usuario',
				key: 'co_usuario'
			},
			field: 'co_usuario'
		},
		permissaoIntervalo: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0',
			field: 'permissao_intervalo'
		},
		permissaoHoraExtra: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0',
			field: 'permissao_hora_extra'
		}
	}, {
		tableName: 'cao_permissao'
	});
};
