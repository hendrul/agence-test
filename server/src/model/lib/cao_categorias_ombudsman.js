/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoCategoriasOmbudsman', {
		idcategoria: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idcategoria'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '',
			field: 'descricao'
		}
	}, {
		tableName: 'cao_categorias_ombudsman'
	});
};
