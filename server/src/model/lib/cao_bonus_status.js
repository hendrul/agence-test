/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoBonusStatus', {
		id: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coUsuario: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		dataSolic: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'data_solic'
		},
		mes: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'mes'
		},
		valor: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'valor'
		},
		isSolic: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'is_solic'
		},
		isPg: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'is_pg'
		},
		isHoras: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'is_horas'
		}
	}, {
		tableName: 'cao_bonus_status'
	});
};
