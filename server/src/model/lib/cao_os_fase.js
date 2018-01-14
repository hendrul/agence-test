/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsFase', {
		coFase: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_fase'
		},
		descricao: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: '0',
			field: 'descricao'
		},
		descricaoIngl: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '',
			field: 'descricao_ingl'
		},
		ordem: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ordem'
		}
	}, {
		tableName: 'cao_os_fase'
	});
};
