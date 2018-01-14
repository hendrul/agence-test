/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHelpMotivoChamado', {
		coMotivo: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_motivo'
		},
		dsMotivo: {
			type: DataTypes.STRING(70),
			allowNull: false,
			defaultValue: '0',
			field: 'ds_motivo'
		}
	}, {
		tableName: 'cao_help_motivo_chamado'
	});
};
