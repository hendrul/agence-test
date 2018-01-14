/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHelpAutor', {
		coAutor: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_autor'
		},
		noAutor: {
			type: DataTypes.STRING(80),
			allowNull: false,
			defaultValue: '0',
			field: 'no_autor'
		},
		coFilial: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'co_filial'
		},
		nuDdd1: {
			type: DataTypes.STRING(4),
			allowNull: true,
			field: 'nu_ddd1'
		},
		nuTel1: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'nu_tel1'
		},
		nuRamal1: {
			type: DataTypes.STRING(6),
			allowNull: true,
			field: 'nu_ramal1'
		},
		nuDdd2: {
			type: DataTypes.STRING(4),
			allowNull: true,
			field: 'nu_ddd2'
		},
		nuTel2: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'nu_tel2'
		},
		nuRamal2: {
			type: DataTypes.STRING(6),
			allowNull: true,
			field: 'nu_ramal2'
		},
		dsEmail: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_email'
		},
		dsFuncao: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '',
			field: 'ds_funcao'
		}
	}, {
		tableName: 'cao_help_autor'
	});
};
