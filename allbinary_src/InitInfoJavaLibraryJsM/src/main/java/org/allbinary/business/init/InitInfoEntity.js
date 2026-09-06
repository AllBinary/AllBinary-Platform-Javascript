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
//not GWT import const HashMap = globalThis.java.util.HashMap;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { UserDbInitInfo } from '../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;
import { LogConfigTypes } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitSql } from './InitSql.js';
//not GWT import - same folder const InitSql = globalThis.org.allbinary.business.init.InitSql;
import { InitInfo } from './InitInfo.js';
//not GWT import - same folder const InitInfo = globalThis.org.allbinary.business.init.InitInfo;
export class InitInfoEntity extends InitSql {
    constructor() {
        super(new UserDbInitInfo());
        this.NAME = "InitInfoEntity";
        this.NOTHING = "NOTHING";
        this.tableName = "initdata";
        this.NOT_IN_DB = "Not In DB";
        this.METHOD_GET = "get()";
        this.METHOD_IS = "is()";
        this.METHOD_ADD = "add()";
        this.CREATED_SUCCESS = " Created Successfully";
        this.FAILED_TO_CREATE = "Failed to create ";
        //For kotlin this is before the body of the constructor.
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.sqlStrings.CREATE_TABLE);
        stringBuffer.append(this.tableName);
        stringBuffer.append(this.sqlStrings.START);
        stringBuffer.append(this.NOTHING);
        stringBuffer.append(this.sqlTypeStrings.MAX_CHAR_COLUMN_NOT_NULL);
        stringBuffer.append(InitInfo.getInstance().TESTING);
        stringBuffer.append(this.sqlTypeStrings.MAX_CHAR_COLUMN_NOT_NULL);
        stringBuffer.append(InitInfo.getInstance().TESTHTMLPATH);
        stringBuffer.append(this.sqlTypeStrings.MAX_CHAR_COLUMN_NOT_NULL);
        stringBuffer.append(InitInfo.getInstance().MAINPATH);
        stringBuffer.append(this.sqlTypeStrings.MAX_CHAR_COLUMN_NOT_NULL);
        stringBuffer.append(this.sqlStrings.PRIMARY_KEY);
        stringBuffer.append(this.NOTHING);
        stringBuffer.append(this.sqlStrings.END);
        this.tableData = stringBuffer.toString();
        this.setTable(this.tableName);
    }
    get() {
        try {
            var keyAndValue = StdUtil.getInstance().createHashMap();
            ;
            keyAndValue.put(this.NOTHING, this.NOTHING);
            var hashMap = getRow(keyAndValue);
            ;
            if (hashMap !=
                null) {
                InitInfo.getInstance().set(hashMap);
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
                    PreLogUtil.put(this.NOT_IN_DB, NAME, this.METHOD_GET);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, this.NAME, this.METHOD_GET, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    is() {
        try {
            var keyAndValue = StdUtil.getInstance().createHashMap();
            ;
            keyAndValue.put(this.NOTHING, this.NOTHING);
            var hashMap = getRow(keyAndValue);
            ;
            if (hashMap !=
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
                    PreLogUtil.put(this.NOT_IN_DB, this.NAME, this.METHOD_IS);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, this.NAME, this.METHOD_IS, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    update() {
        updateWhere(NOTHING, NOTHING, InitInfo.getInstance().toHashMap());
    }
    add() {
        try {
            var values = new BasicArrayListD();
            ;
            values.add(this.NOTHING);
            values.add(InitInfo.getInstance().getTesting());
            values.add(InitInfo.getInstance().getTestHtmlPath());
            values.add(InitInfo.getInstance().getMainPath());
            insert(values);
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, this.NAME, this.METHOD_ADD, e);
            }
        }
    }
    createTable() {
        if (super.createTable(this.tableData)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.tableName + this.CREATED_SUCCESS;
        }
        else {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(this.FAILED_TO_CREATE);
            stringBuffer.append(this.tableData);
            stringBuffer.append(AbPathData.getInstance().EXTENSION_SEP);
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
        }
    }
}
