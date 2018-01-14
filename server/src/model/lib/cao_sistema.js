/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoSistema', {
		coSistema: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_sistema'
		},
		coCliente: {
			type: DataTypes.INTEGER(8).UNSIGNED,
			allowNull: true,
			defaultValue: '0',
			field: 'co_cliente'
		},
		coUsuario: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: '0',
			field: 'co_usuario'
		},
		coArquitetura: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: true,
			defaultValue: '0',
			field: 'co_arquitetura'
		},
		noSistema: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'no_sistema'
		},
		dsSistemaResumo: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_sistema_resumo'
		},
		dsCaracteristica: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_caracteristica'
		},
		dsRequisito: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ds_requisito'
		},
		noDiretoriaSolic: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'no_diretoria_solic'
		},
		dddTelefoneSolic: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'ddd_telefone_solic'
		},
		nuTelefoneSolic: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'nu_telefone_solic'
		},
		noUsuarioSolic: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'no_usuario_solic'
		},
		dtSolicitacao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_solicitacao'
		},
		dtEntrega: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_entrega'
		},
		coEmail: {
			type: DataTypes.INTEGER(30),
			allowNull: true,
			field: 'co_email'
		}
	}, {
		tableName: 'cao_sistema'
	});
};
