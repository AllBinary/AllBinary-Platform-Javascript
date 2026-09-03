/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { Class } from '../../../../java/lang/Class.js';
//not GWT import const Connection = globalThis.java.sql.Connection;
import { DriverManager } from '../../../../java/sql/DriverManager.js';
//not GWT import const Set = globalThis.java.util.Set;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const DbConnectionInfo = globalThis.org.allbinary.business.init.db.DbConnectionInfo;
import { StdUtil } from '../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;
import { LogConfigTypes } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
import { SqlStrings } from '../../../../org/allbinary/logic/communication/sql/SqlStrings.js';
//not GWT import const SqlStrings = globalThis.org.allbinary.logic.communication.sql.SqlStrings;
import { SqlTypeStrings } from '../../../../org/allbinary/logic/communication/sql/SqlTypeStrings.js';
//not GWT import const SqlTypeStrings = globalThis.org.allbinary.logic.communication.sql.SqlTypeStrings;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InitSql extends Object {
    constructor(databaseConnectionInfoInterface) {
        super();
        this.stringUtil = StringUtil.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.sqlTypeStrings = SqlTypeStrings.getInstance();
        this.sqlStrings = SqlStrings.getInstance();
        this.stdUtil = StdUtil.getInstance();
        this.INSERT = "insert";
        this.UPDATE = "update";
        this.useridAndPassword = false;
        this.SUCCESS_SQL_STATEMENT = "Success\nSQL Statement: ";
        this.FAILED_SQL_STATEMENT = "Failed\nSQL Statement: ";
        this.INIT_SQL = "InitSql";
        this.commonStrings = CommonStrings.getInstance();
        this.EQUAL_QUOTE = "=\"";
        this.METHOD_GET_ROW = "getRow()";
        this.METHOD_UPDATE_WHERE = "updateWhere()";
        this.ROW_VALUE_LABEL = "Row Value: ";
        this.NO_RESULTS_IN_RESULT_SET = "No Results in ResultSet";
        this.INSERT_END = "')";
        this.setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface);
    }
    setTable(tableName) {
        this.tableName = tableName;
    }
    setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface) {
        this.databaseConnectionInfoInterface = databaseConnectionInfoInterface;
    }
    createTable(tableData) {
        try {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("Creating Table: ");
            stringBuffer.append(tableData);
            PreLogUtil.put(stringBuffer.toString(), INIT_SQL, "createTable()");
            this.executeSQLStatement(tableData);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, INIT_SQL, "createTable()", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    dropTable() {
        var sqlStatement = this.sqlStrings.DROP_TABLE + this.tableName;
        ;
        try {
            this.executeSQLStatement(sqlStatement);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, INIT_SQL, "dropTables()", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getRow(keysAndValues) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.sqlStrings.SELECT_ALL_FROM);
        stringBuffer.append(this.tableName);
        stringBuffer.append(this.sqlStrings.WHERE);
        try {
            var result = null;
            ;
            var set = keysAndValues.keySet();
            ;
            var keyArray = set.toArray();
            ;
            var size = keyArray.length;
            ;
            for (var i = 0; i < size; i++) {
                var key = keyArray[i];
                ;
                var value = .toCharArray();
                ;
                stringBuffer.append(key);
                stringBuffer.append(this.sqlStrings.EQUAL_QUOTE);
                stringBuffer.append(this.getValue(value));
                stringBuffer.append(this.sqlStrings.CLOSE_QUOTE);
                if (i < size - 1) {
                    stringBuffer.append(this.sqlStrings.AND);
                }
            }
            var sqlStatement = stringBuffer.toString();
            ;
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGING)) {
                PreLogUtil.put(this.sqlStrings.SQL_STATEMENT_LABEL + sqlStatement, this.INIT_SQL, this.METHOD_GET_ROW);
            }
            var rset = this.executeSQLStatement(sqlStatement);
            ;
            var resultSetMetaData = rset.getMetaData();
            ;
            while (rset.next()) {
                result = stdUtil.createHashMap();
                var columnCount = resultSetMetaData.getColumnCount();
                ;
                for (var index = 1; index <= columnCount; index++) {
                    var columnName = resultSetMetaData.getColumnName(index);
                    ;
                    var field = rset.getString(columnName);
                    ;
                    result.put(columnName, field);
                }
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGING)) {
                    PreLogUtil.put(this.ROW_VALUE_LABEL + result.toString(), this.INIT_SQL, this.METHOD_GET_ROW);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return result;
            }
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.put(this.NO_RESULTS_IN_RESULT_SET, this.INIT_SQL, this.METHOD_GET_ROW);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.FAILED_SQL_STATEMENT + stringBuffer, this.INIT_SQL, this.METHOD_GET_ROW, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    updateWhere(key, value, updatedKeyValuePairs) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.sqlStrings.UPDATE);
        stringBuffer.append(this.tableName);
        stringBuffer.append(this.sqlStrings.SET);
        try {
            var columnArray = updatedKeyValuePairs.keySet().();
            ;
            var size = columnArray.length;
            ;
            for (var i = 0; i < size; i++) {
                var columnName = columnArray[i].toString();
                ;
                stringBuffer.append(this.commonSeps.SPACE);
                stringBuffer.append(columnName);
                stringBuffer.append(this.EQUAL_QUOTE);
                var columnValue = updatedKeyValuePairs.get(columnName);
                ;
                if (columnValue ==
                    null) {
                    columnValue = this.stringUtil.EMPTY_STRING;
                }
                else {
                }
                stringBuffer.append(this.getValue(columnValue));
                stringBuffer.append(this.sqlStrings.CLOSE_QUOTE);
                if (i < size - 1) {
                    stringBuffer.append(this.commonSeps.COMMA);
                }
            }
            stringBuffer.append(this.sqlStrings.WHERE);
            stringBuffer.append(key);
            stringBuffer.append(this.sqlStrings.EQUAL_QUOTE);
            stringBuffer.append(this.getValue(value));
            stringBuffer.append(this.sqlStrings.CLOSE_QUOTE);
            var sqlStatement = stringBuffer.toString();
            ;
            this.executeSQLStatement(sqlStatement);
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGING)) {
                PreLogUtil.put(this.SUCCESS_SQL_STATEMENT + sqlStatement, this.INIT_SQL, METHOD_UPDATE_WHERE);
            }
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.FAILED_SQL_STATEMENT + stringBuffer, this.INIT_SQL, METHOD_UPDATE_WHERE, e);
            }
        }
    }
    insert(values) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.sqlStrings.INSERT_INTO);
        stringBuffer.append(this.tableName);
        stringBuffer.append(this.sqlStrings.VALUES);
        try {
            var size = values.size();
            ;
            for (var i = 0; i < size - 1; i++) {
                var value = this.getValue(values.get(i));
                ;
                stringBuffer.append(value);
                stringBuffer.append(this.sqlStrings.SINGLE_QUOTE_COMMA_SEP);
            }
            var value = this.getValue(values.get(values.size() - 1));
            ;
            stringBuffer.append(value);
            stringBuffer.append(this.INSERT_END);
            var sqlStatement = stringBuffer.toString();
            ;
            this.executeSQLStatement(sqlStatement);
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGING)) {
                PreLogUtil.put(this.SUCCESS_SQL_STATEMENT + sqlStatement, this.INIT_SQL, INSERT);
            }
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.FAILED_SQL_STATEMENT + stringBuffer.toString(), this.INIT_SQL, INSERT, e);
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getValue(value) {
        if (StringValidationUtil.getInstance().isEmpty(value)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.stringUtil.EMPTY_STRING;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return value;
        }
    }
    //@Throws(Exception.constructor, SQLException.constructor)
    executeSQLStatement(statement) {
        try {
            if (this.conn ==
                null) {
                this.initialize();
            }
            var stmt = this.conn.createStatement();
            ;
            stmt.execute(statement);
            var rset = stmt.getResultSet();
            ;
            stmt.close();
            //if statement needs to be on the same line and ternary does not work the same way.
            return rset;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, INIT_SQL, "executeSQLStatement()", e);
            }
            throw e;
        }
        //: 
        /* catch(e)
                    {
        
                                if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR))
                                
                                            {
                                            PreLogUtil.putOE(this.commonStrings!.EXCEPTION, INIT_SQL, "executeSQLStatement()", e);
            
        
                                            }
                                        
        
        
        
                                    throw e;
                            
        }
        */
    }
    //@Throws(SQLException.constructor)
    createConnection() {
        try {
            if (this.useridAndPassword == true) {
                this.conn = DriverManager.getConnection(this.databaseConnectionInfoInterface.getUrl(), this.userid, this.password);
            }
            else {
                this.conn = DriverManager.getConnection(this.databaseConnectionInfoInterface.getUrl());
            }
            //: 
        }
        catch (se) {
            PreLogUtil.putOE(this.commonStrings.EXCEPTION, INIT_SQL, "createConnection()", se);
            throw se;
        }
    }
    //@Throws(Exception.constructor)
    initialize() {
        try {
            try {
                var jdbcDriver = this.databaseConnectionInfoInterface.getJdbcDriver();
                ;
                PreLogUtil.put(new StringMaker().append("Loading DbConnnectionInfo: ").append(this.databaseConnectionInfoInterface.constructor.name.toString()).append(" Driver: ").append(jdbcDriver).toString(), this.INIT_SQL, "initialize()");
                Class.forName(jdbcDriver).newInstance();
                //: 
            }
            catch (e) {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                    PreLogUtil.putOE("LoadDriver Failed: " + this.databaseConnectionInfoInterface.getJdbcDriver(), this.INIT_SQL, "initialize()", e);
                }
                throw e;
            }
            if (this.userid ==
                null
                && this.password ==
                    null) {
                this.useridAndPassword = true;
            }
            this.createConnection();
            //: 
        }
        catch (se) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, INIT_SQL, "initialize()", se);
            }
            throw se;
        }
    }
    getDatabaseConnectionInfoInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.databaseConnectionInfoInterface;
    }
}
