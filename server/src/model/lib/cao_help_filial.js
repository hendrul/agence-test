/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHelpFilial', {
		coFilial: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_filial'
		},
		noFilial: {
			type: DataTypes.STRING(70),
			allowNull: false,
			defaultValue: '',
			field: 'no_filial'
		},
		coCliente: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		estado: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '',
			field: 'estado'
		}
	}, {
		tableName: 'cao_help_filial'
	});
};
