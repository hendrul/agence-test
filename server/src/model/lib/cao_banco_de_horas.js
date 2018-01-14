/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoBancoDeHoras', {
		id: {
			type: DataTypes.INTEGER(128),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coUsuario: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		dataCadastro: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'data_cadastro'
		},
		segundos: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			defaultValue: '0',
			field: 'segundos'
		},
		tipo: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: '',
			field: 'tipo'
		}
	}, {
		tableName: 'cao_banco_de_horas'
	});
};
