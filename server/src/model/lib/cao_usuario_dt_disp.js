/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoUsuarioDtDisp', {
		coDtDisp: {
			type: DataTypes.INTEGER(6).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_dt_disp'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'co_usuario'
		},
		dtDisp: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_disp'
		},
		dtAlt: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_alt'
		}
	}, {
		tableName: 'cao_usuario_dt_disp'
	});
};
