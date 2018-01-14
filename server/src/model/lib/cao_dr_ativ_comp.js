/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoDrAtivComp', {
		idAtivComp: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id_ativ_comp'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		data: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'data'
		},
		assunto: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'assunto'
		},
		tempoGasto: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: '00:00:00',
			field: 'tempo_gasto'
		}
	}, {
		tableName: 'cao_dr_ativ_comp'
	});
};
