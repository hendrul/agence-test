/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoServico', {
		coServico: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_servico'
		},
		dsServico: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'ds_servico'
		}
	}, {
		tableName: 'cao_servico'
	});
};
