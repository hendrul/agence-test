/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoHistOcorrenciasOs', {
		idocorrencia: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idocorrencia'
		},
		coOs: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			references: {
				model: 'cao_os',
				key: 'co_os'
			},
			field: 'co_os'
		},
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: true,
			references: {
				model: 'cao_usuario',
				key: 'co_usuario'
			},
			field: 'co_usuario'
		},
		data: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'data'
		},
		tipo: {
			type: DataTypes.ENUM('Interna','Externa'),
			allowNull: false,
			defaultValue: 'Interna',
			field: 'tipo'
		},
		descricao: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'descricao'
		},
		responsavel: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'responsavel'
		},
		dataFechamento: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'data_fechamento'
		}
	}, {
		tableName: 'cao_hist_ocorrencias_os'
	});
};
