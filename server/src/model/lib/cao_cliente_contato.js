/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoClienteContato', {
		coCliente: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_cliente'
		},
		dtContato: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '0000-00-00',
			field: 'dt_contato'
		},
		fgAgendado: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: true,
			defaultValue: '0',
			field: 'fg_agendado'
		},
		hrIni: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: '00:00:00',
			field: 'hr_ini'
		},
		hrEnd: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: '00:00:00',
			field: 'hr_end'
		}
	}, {
		tableName: 'cao_cliente_contato'
	});
};
