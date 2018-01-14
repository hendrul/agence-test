/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoAtividadeReport', {
		id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coCliente: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_cliente'
		},
		inicio: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'inicio'
		},
		fim: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'fim'
		},
		lembrete: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'lembrete'
		},
		coAtividade: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_atividade'
		},
		coOs: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0',
			field: 'co_os'
		},
		assunto: {
			type: DataTypes.STRING(60),
			allowNull: true,
			field: 'assunto'
		},
		conteudo: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'conteudo'
		},
		status: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'status'
		},
		tempo: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'tempo'
		},
		coUsuario: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'co_usuario'
		},
		dataAtiv: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'data_ativ'
		},
		retorno: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'retorno'
		},
		coFase: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0',
			field: 'co_fase'
		}
	}, {
		tableName: 'cao_atividade_report'
	});
};
