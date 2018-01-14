/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoMenuContador', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		coMenu: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_menu'
		},
		nuPontos: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			field: 'nu_pontos'
		},
		inProcessado: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'in_processado'
		}
	}, {
		tableName: 'cao_menu_contador'
	});
};
