/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsObsChamado', {
		coObs: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_obs'
		},
		coChamado: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_chamado'
		},
		coUsuario: {
			type: DataTypes.STRING(80),
			allowNull: true,
			defaultValue: '0',
			field: 'co_usuario'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'descricao'
		},
		dtObs: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_obs'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'email'
		},
		arquivoObs: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'arquivo_obs'
		}
	}, {
		tableName: 'cao_os_obs_chamado'
	});
};
