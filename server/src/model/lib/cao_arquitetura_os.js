/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoArquiteturaOs', {
		coArquitetura: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'co_arquitetura'
		},
		dsArquitetura: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			field: 'ds_arquitetura'
		}
	}, {
		tableName: 'cao_arquitetura_os'
	});
};
