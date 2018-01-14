/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoPontosConhecimento', {
		idpontos: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idpontos'
		},
		pontuacao: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			references: {
				model: 'cao_escala_ranking',
				key: 'idescala'
			},
			field: 'pontuacao'
		},
		coCoordenador: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			references: {
				model: 'cao_usuario',
				key: 'co_usuario'
			},
			field: 'co_coordenador'
		},
		idconhecimento: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			references: {
				model: 'cao_conhecimentos',
				key: 'idconhecimento'
			},
			field: 'idconhecimento'
		}
	}, {
		tableName: 'cao_pontos_conhecimento'
	});
};
