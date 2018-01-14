/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoLogChamado', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coChamado: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'co_chamado'
		},
		dtChamado: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_chamado'
		},
		coUsuario: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		coDaily: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_daily'
		}
	}, {
		tableName: 'cao_log_chamado'
	});
};
