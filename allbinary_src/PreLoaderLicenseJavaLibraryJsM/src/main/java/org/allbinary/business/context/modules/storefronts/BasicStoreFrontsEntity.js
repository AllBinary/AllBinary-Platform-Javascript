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
import { Exception } from '../../../../../../java/lang/Exception.js';
import { HashMap } from '../../../../../../java/util/HashMap.js';
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
import { InitSql } from '../../../../../../org/allbinary/business/init/InitSql.js';
import { UserDbInitInfo } from '../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicStoreFront } from './BasicStoreFront.js';
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
        var keysAndValues = new HashMap();
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
