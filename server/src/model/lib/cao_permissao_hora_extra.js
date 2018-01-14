/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoPermissaoHoraExtra', {
		idPermissao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id_permissao'
		},
		coMovimento: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_movimento'
		}
	}, {
		tableName: 'cao_permissao_hora_extra'
	});
};
