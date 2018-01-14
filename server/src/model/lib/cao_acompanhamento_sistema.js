/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoAcompanhamentoSistema', {
		coAcompanhamento: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_acompanhamento'
		},
		email: {
			type: DataTypes.STRING(40),
			allowNull: true,
			field: 'email'
		},
		senha: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'senha'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0',
			field: 'co_sistema'
		},
		status: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			field: 'status'
		}
	}, {
		tableName: 'cao_acompanhamento_sistema'
	});
};
