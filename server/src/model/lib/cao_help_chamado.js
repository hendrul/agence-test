/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHelpChamado', {
		coChamado: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_chamado'
		},
		dsChamado: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_chamado'
		},
		dsSolucao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_solucao'
		},
		coStatus: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'co_status'
		},
		coMotivo: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			defaultValue: '0',
			field: 'co_motivo'
		},
		coTela: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			defaultValue: '0',
			field: 'co_tela'
		},
		coAutor: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			defaultValue: '0',
			field: 'co_autor'
		},
		coFilial: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: '0',
			field: 'co_filial'
		},
		coSistema: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		dtChamado: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00',
			field: 'dt_chamado'
		},
		dtSolucao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_solucao'
		}
	}, {
		tableName: 'cao_help_chamado'
	});
};
