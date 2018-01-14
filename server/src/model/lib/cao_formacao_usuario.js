/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoFormacaoUsuario', {
		coUsuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'co_usuario'
		},
		tpCurso: {
			type: DataTypes.STRING(13),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'tp_curso'
		},
		dsCurso: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_curso'
		},
		dsInstituicao: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_instituicao'
		},
		dtConclusao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dt_conclusao'
		}
	}, {
		tableName: 'cao_formacao_usuario'
	});
};
