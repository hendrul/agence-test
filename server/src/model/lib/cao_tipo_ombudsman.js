/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoTipoOmbudsman', {
		idtipo: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idtipo'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '',
			field: 'descricao'
		}
	}, {
		tableName: 'cao_tipo_ombudsman'
	});
};
