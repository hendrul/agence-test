/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoAtividadeConsultor', {
		coAtividade: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_atividade'
		},
		dsAtividade: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'ds_atividade'
		},
		ativo: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cao_atividade_consultor'
	});
};
