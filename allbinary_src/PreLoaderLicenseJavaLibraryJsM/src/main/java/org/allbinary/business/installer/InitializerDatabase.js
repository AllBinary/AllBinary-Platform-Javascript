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
//not GWT import const DatabaseConnectionInfoInterface = globalThis.org.allbinary.business.init.db.DatabaseConnectionInfoInterface;
import { DbConnectionInfo } from '../../../../org/allbinary/business/init/db/DbConnectionInfo.js';
//not GWT import const DbConnectionInfo = globalThis.org.allbinary.business.init.db.DbConnectionInfo;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DynamicInitDb } from './DynamicInitDb.js';
//not GWT import - same folder const DynamicInitDb = globalThis.org.allbinary.business.installer.DynamicInitDb;
import { InitializerData } from './InitializerData.js';
//not GWT import - same folder const InitializerData = globalThis.org.allbinary.business.installer.InitializerData;
export class InitializerDatabase extends Object {
    constructor(abeClientInformation, map) {
        super();
        this.logUtil = LogUtil.getInstance();
        var stringBuffer = new StringMaker();
        ;
        var hashMap = StdUtil.getInstance().createHashMap();
        ;
        var keys = map.keySet();
        ;
        var keyArray = keys.toArray();
        ;
        var size = keyArray.length;
        ;
        for (var index = 0; index < size; index++) {
            var key = keyArray[index];
            ;
            var values = map.get(key);
            ;
            hashMap.put(key.toCharArray().slice(0).join(''), toCharArray());
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append("key: ");
            stringBuffer.append(key);
            stringBuffer.append(" Value: ");
            stringBuffer.append(values[0]);
            this.logUtil.putF(stringBuffer.toString(), this, "getFormData()");
        }
        this.getFormData(abeClientInformation, hashMap);
    }
    constructor(abeClientInformation, initHashMap) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.getFormData(abeClientInformation, initHashMap);
    }
    getFormData(abeClientInformation, hashMap) {
        try {
            var initializerData = InitializerData.getInstance();
            ;
            this.setAdminDbUserName(hashMap.get(initializerData.DBUSER));
            this.setAdminDbPassword(hashMap.get(initializerData.DBPASSWORD));
            this.setAdminJdbcDriver(hashMap.get(initializerData.ADMINJDBCDRIVER));
            this.setAdminSchema(hashMap.get(initializerData.ADMINSCHEMA));
            this.setAdminServer(hashMap.get(initializerData.ADMINSERVER));
            this.setAdminPort(hashMap.get(initializerData.ADMINPORT));
            var dbConnectionInfo = new DbConnectionInfo();
            ;
            var adminDbName = StringUtil.getInstance().EMPTY_STRING;
            ;
            dbConnectionInfo.setJdbcDriver(getAdminJdbcDriver());
            dbConnectionInfo.setName(adminDbName);
            dbConnectionInfo.setUserName(getAdminDbUserName());
            dbConnectionInfo.setPassword(getAdminDbPassword());
            dbConnectionInfo.setSchema(getAdminSchema());
            dbConnectionInfo.setServer(getAdminServer());
            dbConnectionInfo.setPort(getAdminPort());
            this.initDb = new DynamicInitDb(abeClientInformation, dbConnectionInfo);
            //: 
        }
        catch (e) {
            this.logUtil.put("Unable to get form data", this, "getFormData()", e);
        }
    }
    isJdbcDriverValid(jdbcDriverClassPathString) {
        try {
            Class.forName(jdbcDriverClassPathString).newInstance();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.IS_VALID, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isValid() {
        var isValid = true;
        ;
        if (!this.isJdbcDriverValid(this.adminJdbcDriver)) {
            isValid = false;
        }
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (!stringValidationUtil.isValidRequired(this.adminDbUserName, InitializerDatabase.MIN, InitializerDatabase.MAX)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidNotRequired(this.adminDbPassword, InitializerDatabase.MINPASSWORD, InitializerDatabase.MAX)) {
            isValid = false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return isValid;
    }
    getJdbcDriverValidationInfo(jdbcDriver) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("The JDBC driver (");
        stringBuffer.append(jdbcDriver);
        stringBuffer.append(") you have provided is not valid.<br/>");
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getInvalidInfo() {
        var isValid = true;
        ;
        var isJdbcDriversValid = true;
        ;
        var stringBuffer = new StringMaker();
        ;
        if (!this.isJdbcDriverValid(this.adminJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer.append(this.getJdbcDriverValidationInfo(this.getAdminJdbcDriver()));
        }
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (!stringValidationUtil.isValidRequired(this.adminDbUserName, InitializerDatabase.MIN, InitializerDatabase.MAX)) {
            stringBuffer.append("Admin username should be < " + InitializerDatabase.MAX + " and > " + InitializerDatabase.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidNotRequired(this.adminDbPassword, InitializerDatabase.MINPASSWORD, InitializerDatabase.MAX)) {
            stringBuffer.append("Admin password should be < " + InitializerDatabase.MAX + " and > " + InitializerDatabase.MINPASSWORD + " characters in length.<br />");
        }
        if (!isJdbcDriversValid) {
            stringBuffer.append(InitializerData.getInstance().getJdbcDriverSolutionInfo());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    createUsers() {
        try {
            this.initDb.addUsers();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            this.logUtil.put("Unable to Create Users", this, "createUsers()", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    createDatabases() {
        try {
            this.initDb.addDatabases();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            this.logUtil.put("Unable to Create Databases", this, "createDatabases()", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    createTables() {
        try {
            this.initDb.addTables();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            this.logUtil.put("Unable to Create Tables", this, "createTables()", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getAdminDbUserName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminDbUserName;
    }
    setAdminDbUserName(adminDbUserName) {
        this.adminDbUserName = adminDbUserName;
    }
    getAdminDbPassword() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminDbPassword;
    }
    setAdminDbPassword(adminDbPassword) {
        this.adminDbPassword = adminDbPassword;
    }
    getAdminJdbcDriver() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminJdbcDriver;
    }
    setAdminJdbcDriver(adminJdbcDriver) {
        this.adminJdbcDriver = adminJdbcDriver;
    }
    getAdminSchema() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminSchema;
    }
    setAdminSchema(adminSchema) {
        this.adminSchema = adminSchema;
    }
    getAdminServer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminServer;
    }
    setAdminServer(adminServer) {
        this.adminServer = adminServer;
    }
    getAdminPort() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adminPort;
    }
    setAdminPort(adminPort) {
        this.adminPort = adminPort;
    }
}
InitializerDatabase.MAXDB = 30;
InitializerDatabase.MAX = 16;
InitializerDatabase.MIN = 4;
InitializerDatabase.MINPASSWORD = 0;
