/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoParticipacaoFuncionario', {
		coPartFuncionario: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_part_funcionario'
		},
		pcParticipacao: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'pc_participacao'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		coEscritorio: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'co_escritorio'
		},
		dtReferencia: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_referencia'
		}
	}, {
		tableName: 'cao_participacao_funcionario'
	});
};
