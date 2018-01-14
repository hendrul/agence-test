/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoEscalaRanking', {
		idescala: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idescala'
		},
		qtdVisual: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'qtd_visual'
		},
		pontuacao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'pontuacao'
		}
	}, {
		tableName: 'cao_escala_ranking'
	});
};
