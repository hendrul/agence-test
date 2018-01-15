/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_dr_ativ_comp', {
    id_ativ_comp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '1970-01-01'
    },
    assunto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tempo_gasto: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_dr_ativ_comp'
  });
};
