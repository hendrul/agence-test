/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_fatura_pag', {
    id_fatura_pag: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_fatura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    dt_efetuado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '1970-01-01'
    },
    valor_pago: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_fatura_pag'
  });
};
