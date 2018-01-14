/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoSistemaObs', {
		coObs: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_obs'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'descricao'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'co_sistema'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'co_usuario'
		},
		dtObs: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dt_obs'
		}
	}, {
		tableName: 'cao_sistema_obs'
	});
};
