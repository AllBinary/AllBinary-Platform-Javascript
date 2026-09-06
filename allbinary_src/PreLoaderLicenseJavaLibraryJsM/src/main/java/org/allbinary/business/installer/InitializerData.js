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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InitializerData extends Object {
    constructor() {
        super(...arguments);
        this.DBUSER = "DBUSER";
        this.DBPASSWORD = "DBPASSWORD";
        this.ADMINJDBCDRIVER = "ADMIN_JDBCDRIVER";
        this.ADMINSCHEMA = "ADMINSCHEMA";
        this.ADMINSERVER = "ADMINSERVER";
        this.ADMINPORT = "ADMINPORT";
        this.CUSTOMERJDBCDRIVER = "CUSTOMER_JDBCDRIVER";
        this.CUSTOMERNAME = "CUSTOMERNAME";
        this.CUSTOMERUSERNAME = "CUSTOMERUSERNAME";
        this.CUSTOMERPASSWORD = "CUSTOMERPASSWORD";
        this.CUSTOMERSCHEMA = "CUSTOMERSCHEMA";
        this.CUSTOMERSERVER = "CUSTOMERSERVER";
        this.CUSTOMERPORT = "CUSTOMERPORT";
        this.HISTORYJDBCDRIVER = "HISTORY_JDBCDRIVER";
        this.HISTORYNAME = "HISTORYNAME";
        this.HISTORYUSERNAME = "HISTORYUSERNAME";
        this.HISTORYPASSWORD = "HISTORYPASSWORD";
        this.HISTORYSCHEMA = "HISTORYSCHEMA";
        this.HISTORYSERVER = "HISTORYSERVER";
        this.HISTORYPORT = "HISTORYPORT";
        this.LOGJDBCDRIVER = "LOG_JDBCDRIVER";
        this.LOGNAME = "LOGNAME";
        this.LOGUSERNAME = "LOGUSERNAME";
        this.LOGPASSWORD = "LOGPASSWORD";
        this.LOGSCHEMA = "LOGSCHEMA";
        this.LOGSERVER = "LOGSERVER";
        this.LOGPORT = "LOGPORT";
        this.INVENTORYJDBCDRIVER = "INVENTORY_JDBCDRIVER";
        this.INVENTORYNAME = "INVENTORYNAME";
        this.INVENTORYUSERNAME = "INVENTORYUSERNAME";
        this.INVENTORYPASSWORD = "INVENTORYPASSWORD";
        this.INVENTORYSCHEMA = "INVENTORYSCHEMA";
        this.INVENTORYSERVER = "INVENTORYSERVER";
        this.INVENTORYPORT = "INVENTORYPORT";
        this.STATICPAGESJDBCDRIVER = "STATICPAGES_JDBCDRIVER";
        this.STATICPAGESNAME = "STATICPAGESNAME";
        this.STATICPAGESUSERNAME = "STATICPAGESUSERNAME";
        this.STATICPAGESPASSWORD = "STATICPAGESPASSWORD";
        this.STATICPAGESSCHEMA = "STATICPAGESSCHEMA";
        this.STATICPAGESSERVER = "STATICPAGESSERVER";
        this.STATICPAGESPORT = "STATICPAGESPORT";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InitializerData.instance;
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
}
InitializerData.instance = new InitializerData();
