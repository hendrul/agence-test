/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHelpTelaChamado', {
		coTela: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_tela'
		},
		coCliente: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		coSistema: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		dsTela: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '',
			field: 'ds_tela'
		}
	}, {
		tableName: 'cao_help_tela_chamado'
	});
};
