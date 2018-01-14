/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoNoticia', {
		coNoticia: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_noticia'
		},
		assunto: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'assunto'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'descricao'
		},
		foto: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'foto'
		},
		coUsuario: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		dtNoticia: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_noticia'
		}
	}, {
		tableName: 'cao_noticia'
	});
};
