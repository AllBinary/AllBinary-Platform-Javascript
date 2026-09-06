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
//not GWT import const Set = globalThis.java.util.Set;
import { HistoryDbInitInfo } from '../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js';
//not GWT import const HistoryDbInitInfo = globalThis.org.allbinary.business.init.db.HistoryDbInitInfo;
import { InventoryDbInitInfo } from '../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js';
//not GWT import const InventoryDbInitInfo = globalThis.org.allbinary.business.init.db.InventoryDbInitInfo;
import { LogDbInitInfo } from '../../../../org/allbinary/business/init/db/LogDbInitInfo.js';
//not GWT import const LogDbInitInfo = globalThis.org.allbinary.business.init.db.LogDbInitInfo;
import { StaticPagesDbInitInfo } from '../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js';
//not GWT import const StaticPagesDbInitInfo = globalThis.org.allbinary.business.init.db.StaticPagesDbInitInfo;
import { UserDbInitInfo } from '../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { StringValidationUtil } from '../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitializerData } from './InitializerData.js';
//not GWT import - same folder const InitializerData = globalThis.org.allbinary.business.installer.InitializerData;
export class Initializer extends Object {
    constructor(map) {
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
        this.getFormData(hashMap);
    }
    constructor(initHashMap) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.getFormData(initHashMap);
    }
    getFormData(hashMap) {
        try {
            var initializerData = InitializerData.getInstance();
            ;
            this.userJdbcDriver = hashMap.get(initializerData.CUSTOMERJDBCDRIVER);
            this.userName = hashMap.get(initializerData.CUSTOMERNAME);
            this.userUserName = hashMap.get(initializerData.CUSTOMERUSERNAME);
            this.userPassword = hashMap.get(initializerData.CUSTOMERPASSWORD);
            this.userSchema = hashMap.get(initializerData.CUSTOMERSCHEMA);
            this.userServer = hashMap.get(initializerData.CUSTOMERSERVER);
            this.userPort = hashMap.get(initializerData.CUSTOMERPORT);
            this.historyJdbcDriver = hashMap.get(initializerData.HISTORYJDBCDRIVER);
            this.historyName = hashMap.get(initializerData.HISTORYNAME);
            this.historyUserName = hashMap.get(initializerData.HISTORYUSERNAME);
            this.historyPassword = hashMap.get(initializerData.HISTORYPASSWORD);
            this.historySchema = hashMap.get(initializerData.HISTORYSCHEMA);
            this.historyServer = hashMap.get(initializerData.HISTORYSERVER);
            this.historyPort = hashMap.get(initializerData.HISTORYPORT);
            this.logJdbcDriver = hashMap.get(initializerData.LOGJDBCDRIVER);
            this.logName = hashMap.get(initializerData.LOGNAME);
            this.logUserName = hashMap.get(initializerData.LOGUSERNAME);
            this.logPassword = hashMap.get(initializerData.LOGPASSWORD);
            this.logSchema = hashMap.get(initializerData.LOGSCHEMA);
            this.logServer = hashMap.get(initializerData.LOGSERVER);
            this.logPort = hashMap.get(initializerData.LOGPORT);
            this.inventoryJdbcDriver = hashMap.get(initializerData.INVENTORYJDBCDRIVER);
            this.inventoryName = hashMap.get(initializerData.INVENTORYNAME);
            this.inventoryUserName = hashMap.get(initializerData.INVENTORYUSERNAME);
            this.inventoryPassword = hashMap.get(initializerData.INVENTORYPASSWORD);
            this.inventorySchema = hashMap.get(initializerData.INVENTORYSCHEMA);
            this.inventoryServer = hashMap.get(initializerData.INVENTORYSERVER);
            this.inventoryPort = hashMap.get(initializerData.INVENTORYPORT);
            this.staticPagesJdbcDriver = hashMap.get(initializerData.STATICPAGESJDBCDRIVER);
            this.staticPagesName = hashMap.get(initializerData.STATICPAGESNAME);
            this.staticPagesUserName = hashMap.get(initializerData.STATICPAGESUSERNAME);
            this.staticPagesPassword = hashMap.get(initializerData.STATICPAGESPASSWORD);
            this.staticPagesSchema = hashMap.get(initializerData.STATICPAGESSCHEMA);
            this.staticPagesServer = hashMap.get(initializerData.STATICPAGESSERVER);
            this.staticPagesPort = hashMap.get(initializerData.STATICPAGESPORT);
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
        if (!this.isJdbcDriverValid(this.userJdbcDriver)) {
            isValid = false;
        }
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (!stringValidationUtil.isValidRequired(this.userName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.userUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidNotRequired(this.userPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        }
        if (!this.isJdbcDriverValid(this.historyJdbcDriver)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.historyName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.historyUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidNotRequired(this.historyPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        }
        if (!this.isJdbcDriverValid(this.logJdbcDriver)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.logName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.logUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidNotRequired(this.logPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        }
        if (!this.isJdbcDriverValid(this.inventoryJdbcDriver)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.inventoryName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.inventoryUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidNotRequired(this.inventoryPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            isValid = false;
        }
        if (!this.isJdbcDriverValid(this.staticPagesJdbcDriver)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.staticPagesName, Initializer.MIN, Initializer.MAXDB)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidRequired(this.staticPagesUserName, Initializer.MIN, Initializer.MAX)) {
            isValid = false;
        }
        if (!stringValidationUtil.isValidNotRequired(this.staticPagesPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
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
    getJdbcDriverSolutionInfo() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("The following describes the possible problems and solutions regarding the Jdbc Driver error(s):<p/>");
        stringBuffer.append("1. A JDBC driver you specified is not in your classpath.<br/>");
        stringBuffer.append("Solution 1: Move the JDBC driver into any directory specified in the existing classpath. <br/>");
        stringBuffer.append("Solution 2: Add the directory that contains the JDBC driver to the classpath.<br/>");
        stringBuffer.append("Solution 3: Add the JDBC driver to the WEB-INF/lib directory where you installed this webapp.<br/>");
        stringBuffer.append("2. The JDBC driver you specified does not exit.<br/>");
        stringBuffer.append("Solution: Get a JDBC driver. <br/>");
        stringBuffer.append("3. The JDBC driver you specified is not valid.<br/>");
        stringBuffer.append("Solution: Use a valid JDBC driver.<p/>");
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getInvalidInfo() {
        var isJdbcDriversValid = true;
        ;
        var stringBuffer = new StringMaker();
        ;
        if (!this.isJdbcDriverValid(this.userJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer.append(this.getJdbcDriverValidationInfo(this.userJdbcDriver));
        }
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (!stringValidationUtil.isValidRequired(this.userName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer.append("User db name should be < " + Initializer.MAXDB + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidRequired(this.userUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer.append("User db username should be < " + Initializer.MAX + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidNotRequired(this.userPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer.append("User DB password should be < " + Initializer.MAX + " and > " + Initializer.MINPASSWORD + " characters in length.<br />");
        }
        if (!this.isJdbcDriverValid(this.historyJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer.append(this.getJdbcDriverValidationInfo(this.historyJdbcDriver));
        }
        if (!stringValidationUtil.isValidRequired(this.historyName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer.append("History db should be < " + Initializer.MAXDB + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidRequired(this.historyUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer.append("History db username should be < " + Initializer.MAX + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidNotRequired(this.historyPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer.append("History db password should be < " + Initializer.MAX + " and > " + Initializer.MINPASSWORD + " characters in length.<br />");
        }
        if (!this.isJdbcDriverValid(this.logJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer.append(this.getJdbcDriverValidationInfo(this.logJdbcDriver));
        }
        if (!stringValidationUtil.isValidRequired(this.logName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer.append("Log db should be < " + Initializer.MAXDB + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidRequired(this.logUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer.append("Log db username should be < " + Initializer.MAX + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidNotRequired(this.logPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer.append("Log db password should be < " + Initializer.MAX + " and > " + Initializer.MINPASSWORD + " characters in length.<br />");
        }
        if (!this.isJdbcDriverValid(this.inventoryJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer.append(this.getJdbcDriverValidationInfo(this.inventoryJdbcDriver));
        }
        if (!stringValidationUtil.isValidRequired(this.inventoryName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer.append("Inventory db should be < " + Initializer.MAXDB + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidRequired(this.inventoryUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer.append("Inventory db username should be < " + Initializer.MAX + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidNotRequired(this.inventoryPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer.append("Inventory DB password should be < " + Initializer.MAX + " and > " + Initializer.MINPASSWORD + " characters in length.<br />");
        }
        if (!this.isJdbcDriverValid(this.staticPagesJdbcDriver)) {
            isJdbcDriversValid = false;
            stringBuffer.append(this.getJdbcDriverValidationInfo(this.staticPagesJdbcDriver));
        }
        if (!stringValidationUtil.isValidRequired(this.staticPagesName, Initializer.MIN, Initializer.MAXDB)) {
            stringBuffer.append("Static Pages db should be < " + Initializer.MAXDB + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidRequired(this.staticPagesUserName, Initializer.MIN, Initializer.MAX)) {
            stringBuffer.append("Static Pages db username should be < " + Initializer.MAX + " and > " + Initializer.MIN + " characters in length.<br />");
        }
        if (!stringValidationUtil.isValidNotRequired(this.staticPagesPassword, Initializer.MINPASSWORD, Initializer.MAX)) {
            stringBuffer.append("Static Pages DB password should be < " + Initializer.MAX + " and > " + Initializer.MINPASSWORD + " characters in length.<br />");
        }
        if (!isJdbcDriversValid) {
            stringBuffer.append(getJdbcDriverSolutionInfo());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    //@Throws(Exception.constructor)
    set() {
        this.logUtil.putF("Creating DB connection files", this, "set()");
        var userDbInitInfo = new UserDbInitInfo(false);
        ;
        userDbInitInfo.setJdbcDriver(this.userJdbcDriver);
        userDbInitInfo.setName(this.userName);
        userDbInitInfo.setUserName(this.userUserName);
        userDbInitInfo.setPassword(this.userPassword);
        userDbInitInfo.setSchema(this.userSchema);
        userDbInitInfo.setServer(this.userServer);
        userDbInitInfo.setPort(this.userPort);
        userDbInitInfo.setHasRead(true);
        userDbInitInfo.write();
        var historyDbInitInfo = new HistoryDbInitInfo(false);
        ;
        historyDbInitInfo.setJdbcDriver(this.historyJdbcDriver);
        historyDbInitInfo.setName(this.historyName);
        historyDbInitInfo.setUserName(this.historyUserName);
        historyDbInitInfo.setPassword(this.historyPassword);
        historyDbInitInfo.setSchema(this.historySchema);
        historyDbInitInfo.setServer(this.historyServer);
        historyDbInitInfo.setPort(this.historyPort);
        historyDbInitInfo.setHasRead(true);
        historyDbInitInfo.write();
        var logDbInitInfo = new LogDbInitInfo(false);
        ;
        logDbInitInfo.setJdbcDriver(this.logJdbcDriver);
        logDbInitInfo.setName(this.logName);
        logDbInitInfo.setUserName(this.logUserName);
        logDbInitInfo.setPassword(this.logPassword);
        logDbInitInfo.setSchema(this.logSchema);
        logDbInitInfo.setServer(this.logServer);
        logDbInitInfo.setPort(this.logPort);
        logDbInitInfo.setHasRead(true);
        logDbInitInfo.write();
        var staticPagesDbInitInfo = new StaticPagesDbInitInfo(false);
        ;
        staticPagesDbInitInfo.setJdbcDriver(this.staticPagesJdbcDriver);
        staticPagesDbInitInfo.setName(this.staticPagesName);
        staticPagesDbInitInfo.setUserName(this.staticPagesUserName);
        staticPagesDbInitInfo.setPassword(this.staticPagesPassword);
        staticPagesDbInitInfo.setSchema(this.staticPagesSchema);
        staticPagesDbInitInfo.setServer(this.staticPagesServer);
        staticPagesDbInitInfo.setPort(this.staticPagesPort);
        staticPagesDbInitInfo.setHasRead(true);
        staticPagesDbInitInfo.write();
        var inventoryDbInitInfo = new InventoryDbInitInfo(false);
        ;
        inventoryDbInitInfo.setJdbcDriver(this.inventoryJdbcDriver);
        inventoryDbInitInfo.setName(this.inventoryName);
        inventoryDbInitInfo.setUserName(this.inventoryUserName);
        inventoryDbInitInfo.setPassword(this.inventoryPassword);
        inventoryDbInitInfo.setSchema(this.inventorySchema);
        inventoryDbInitInfo.setServer(this.inventoryServer);
        inventoryDbInitInfo.setPort(this.inventoryPort);
        inventoryDbInitInfo.setHasRead(true);
        inventoryDbInitInfo.write();
        this.logUtil.putF("Created DB connection files", this, "set()");
    }
}
Initializer.MAXDB = 30;
Initializer.MAX = 16;
Initializer.MIN = 4;
Initializer.MINPASSWORD = 0;
