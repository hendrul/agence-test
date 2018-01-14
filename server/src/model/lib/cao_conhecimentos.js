/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoConhecimentos', {
		idconhecimento: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idconhecimento'
		},
		assunto: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '',
			field: 'assunto'
		},
		conhecimento: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'conhecimento'
		},
		url: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'url'
		},
		tags: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'tags'
		},
		usuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			references: {
				model: 'cao_usuario',
				key: 'co_usuario'
			},
			field: 'usuario'
		},
		datahora: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'datahora'
		}
	}, {
		tableName: 'cao_conhecimentos'
	});
};
