/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOmbudsman', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		idtipo: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			references: {
				model: 'cao_tipo_ombudsman',
				key: 'idtipo'
			},
			field: 'idtipo'
		},
		idcategoria: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			references: {
				model: 'cao_categorias_ombudsman',
				key: 'idcategoria'
			},
			field: 'idcategoria'
		},
		data: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'data'
		},
		comentario: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'comentario'
		},
		coEscritorio: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'co_escritorio'
		}
	}, {
		tableName: 'cao_ombudsman'
	});
};
