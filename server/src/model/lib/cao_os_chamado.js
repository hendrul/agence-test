/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoOsChamado', {
		coChamado: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_chamado'
		},
		coSistema: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_sistema'
		},
		coOs: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_os'
		},
		dsChamado: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'ds_chamado'
		},
		coTipo: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_tipo'
		},
		coPrioridade: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_prioridade'
		},
		coItem: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_item'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'descricao'
		},
		dsSolucao: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'ds_solucao'
		},
		tempo: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '',
			field: 'tempo'
		},
		dtChamado: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'dt_chamado'
		},
		status: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		},
		coUsuario: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		coAnalista: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'co_analista'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'email'
		}
	}, {
		tableName: 'cao_os_chamado'
	});
};
