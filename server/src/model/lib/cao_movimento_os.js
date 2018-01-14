/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoMovimentoOs', {
		coMovimentoOs: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_movimento_os'
		},
		nuOs: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			defaultValue: '0',
			field: 'nu_os'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		coTipoMovimento: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'co_tipo_movimento'
		},
		nuValor: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'nu_valor'
		},
		dsValor: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_valor'
		},
		usuarioObs: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'usuario_obs'
		},
		dtIni: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dt_ini'
		},
		dtFim: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dt_fim'
		}
	}, {
		tableName: 'cao_movimento_os'
	});
};
