/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOs', {
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_os'
		},
		nuOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			field: 'nu_os'
		},
		coSistema: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: '0',
			field: 'co_sistema'
		},
		coUsuario: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: '0',
			field: 'co_usuario'
		},
		coArquitetura: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0',
			field: 'co_arquitetura'
		},
		dsOs: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: '0',
			field: 'ds_os'
		},
		dsCaracteristica: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: '0',
			field: 'ds_caracteristica'
		},
		dsRequisito: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'ds_requisito'
		},
		dtInicio: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_inicio'
		},
		dtFim: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_fim'
		},
		coStatus: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0',
			field: 'co_status'
		},
		diretoriaSol: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: '0',
			field: 'diretoria_sol'
		},
		dtSol: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_sol'
		},
		nuTelSol: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: '0',
			field: 'nu_tel_sol'
		},
		dddTelSol: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'ddd_tel_sol'
		},
		nuTelSol2: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'nu_tel_sol2'
		},
		dddTelSol2: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'ddd_tel_sol2'
		},
		usuarioSol: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: '0',
			field: 'usuario_sol'
		},
		dtImp: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_imp'
		},
		dtGarantia: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_garantia'
		},
		coEmail: {
			type: DataTypes.INTEGER(30),
			allowNull: true,
			field: 'co_email'
		},
		coOsProspectRel: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			field: 'co_os_prospect_rel'
		}
	}, {
		tableName: 'cao_os'
	});
};
