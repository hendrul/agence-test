/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoMenu', {
		coMenu: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_menu'
		},
		dsMenu: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'ds_menu'
		},
		dsPagina: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'ds_pagina'
		},
		dsImagem: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ds_imagem'
		}
	}, {
		tableName: 'cao_menu'
	});
};
