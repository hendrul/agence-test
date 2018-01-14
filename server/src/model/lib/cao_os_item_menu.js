/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsItemMenu', {
		coItem: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_item'
		},
		dsItem: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'ds_item'
		},
		coSistema: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		}
	}, {
		tableName: 'cao_os_item_menu'
	});
};
