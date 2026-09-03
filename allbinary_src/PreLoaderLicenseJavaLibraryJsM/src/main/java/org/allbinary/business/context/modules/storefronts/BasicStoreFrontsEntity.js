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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;
import { InitSql } from '../../../../../../org/allbinary/business/init/InitSql.js';
//not GWT import const InitSql = globalThis.org.allbinary.business.init.InitSql;
import { UserDbInitInfo } from '../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;
import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicStoreFront } from './BasicStoreFront.js';
//not GWT import const BasicStoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefronts.BasicStoreFrontInterface;
export class BasicStoreFrontsEntity extends InitSql {
    constructor() {
        super(new UserDbInitInfo());
        this.logUtil = LogUtil.getInstance();
        this.tableName = "storefronts";
        //For kotlin this is before the body of the constructor.
        this.setTable(this.tableName);
    }
    //@Throws(Exception.constructor)
    getStoreFrontInterface(name) {
        var keysAndValues = StdUtil.getInstance().createHashMap();
        ;
        keysAndValues.put(StoreFrontData.getInstance().NAME, name);
        var storeHashMap = super.getRow(keysAndValues);
        ;
        if (storeHashMap ==
            null)
            throw new Exception("No Such Store: " + name);
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().FACTORYERROR)) {
            this.logUtil.putF("StoreFront: " + storeHashMap.toString(), this, "getStore()");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicStoreFront(storeHashMap);
    }
}
