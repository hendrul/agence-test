/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoCidade', {
		coCidade: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_cidade'
		},
		noCidade: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '',
			field: 'no_cidade'
		},
		coUf: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_uf'
		}
	}, {
		tableName: 'cao_cidade'
	});
};
