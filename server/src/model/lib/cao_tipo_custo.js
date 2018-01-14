/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoTipoCusto', {
		coTipoCusto: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_tipo_custo'
		},
		descricao: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '',
			field: 'descricao'
		}
	}, {
		tableName: 'cao_tipo_custo'
	});
};
