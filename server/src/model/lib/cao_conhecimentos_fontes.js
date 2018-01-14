/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoConhecimentosFontes', {
		idfonte: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idfonte'
		},
		idconhecimento: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			references: {
				model: 'cao_conhecimentos',
				key: 'idconhecimento'
			},
			field: 'idconhecimento'
		},
		datahora: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'datahora'
		},
		arquivo: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'arquivo'
		},
		caminho: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'caminho'
		}
	}, {
		tableName: 'cao_conhecimentos_fontes'
	});
};
