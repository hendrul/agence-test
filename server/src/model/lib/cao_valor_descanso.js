/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoValorDescanso', {
		id: {
			type: DataTypes.INTEGER(40),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coUsuario: {
			type: DataTypes.STRING(40),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		segundos: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'segundos'
		},
		mesReferencia: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'mes_referencia'
		}
	}, {
		tableName: 'cao_valor_descanso'
	});
};
