const path = require('path')
const { Transaction } = require('sequelize')

const { ISOLATION_LEVELS } = Transaction

module.exports = {
  www: path.resolve(__dirname, '../build'),
  data: {
    sql: {
      $activeProfile: 'mysqlDevelopment',
      sqliteDevelopment: {
        user: null,
        password: null,
        database: 'agence',
        dialect: 'sqlite',
        define: {
          timestamps: false,
          freezeTableName: true,
          underscored: true,
        },
      },

      mysqlDevelopment: {
        user: 'root',
        password: 'root',
        database: 'agence',
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        charset: 'latin1',
        collate: 'latin1-general-ci',
        define: {
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          timezone: '-04:30',
        },
        isolationLevel: ISOLATION_LEVELS.READ_COMMITTED,
      },

      pgProduction: {
        user: 'sxtksbotgvcgti',
        password: '68d6987381fa722a5a29648ecd0a3b5518f44615a2edc037843b6e54c783be12',
        database: 'd9dlr8gp55lnks',
        host: 'ec2-23-23-110-26.compute-1.amazonaws.com',
        port: 5432,
        dialect: 'postgres',
        isolationLevel: ISOLATION_LEVELS.READ_COMMITTED,
        charset: 'latin1',
        collate: 'latin1-general-ci',
        logging: true,
        define: {
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          timezone: '-04:30',
        },
        pool: {
          min: 1,
          max: 50,
        },
      },

      pgDevelopment: {
        user: 'root',
        password: 'root',
        database: 'agence',
        schema: 'public',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
        isolationLevel: ISOLATION_LEVELS.READ_COMMITTED,
        charset: 'latin1',
        collate: 'latin1-general-ci',
        logging: true,
        define: {
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          timezone: '-04:30',
        },
        pool: {
          min: 1,
          max: 50,
        },
      },

    },
  },
}
