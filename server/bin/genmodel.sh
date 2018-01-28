#!/usr/bin/env bash
DBCONFIG=$(node -p <<-LOAD_CONFIG
    const appConfig = require('./app-config')
    const sqlConfigs = appConfig.data.sql
    const activeConfig = sqlConfigs[sqlConfigs.\$activeProfile]
    console.log((activeConfig.host||'127.0.0.1') + '|' + (activeConfig.port||'') + '|' + (activeConfig.user||'') + '|' + (activeConfig.password||'') + '|' + (activeConfig.database||'') + '|' + (activeConfig.dialect||'') + '|' + (activeConfig.storage||''))
    process.exit(0)
LOAD_CONFIG
)
HOST="$(echo $DBCONFIG | cut -d'|' -f1)"
PORT="$(echo $DBCONFIG | cut -d'|' -f2)"
USER="$(echo $DBCONFIG | cut -d'|' -f3)"
PASS="$(echo $DBCONFIG | cut -d'|' -f4)"
DATABASE="$(echo $DBCONFIG | cut -d'|' -f5)"
DIALECT="$(echo $DBCONFIG | cut -d'|' -f6)"
STORAGE="$(echo $DBCONFIG | cut -d'|' -f7)"
OUTPUT="src/lib/model/generated"
$(echo "sequelize-auto --camel ${HOST:+"-h $HOST"} ${PORT:+"-p $PORT"} ${USER:+"-u $USER"} ${PASS:+"-x $PASS"} ${DATABASE:+"-d $DATABASE"} ${DIALECT:+"-e $DIALECT"} -o $OUTPUT")