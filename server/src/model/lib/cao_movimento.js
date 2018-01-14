/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoMovimento', {
		coMovimento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_movimento'
		},
		coUsuario: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		dtEntrada: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_entrada'
		},
		dtSaidaAlmoco: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_saida_almoco'
		},
		dtVoltaAlmoco: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_volta_almoco'
		},
		dtSaida: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_saida'
		},
		isEncerrado: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'is_encerrado'
		}
	}, {
		tableName: 'cao_movimento'
	});
};
