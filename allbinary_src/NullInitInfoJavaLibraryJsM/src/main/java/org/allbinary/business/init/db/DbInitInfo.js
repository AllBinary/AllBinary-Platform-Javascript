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
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DbConnectionInfo } from './DbConnectionInfo.js';
//not GWT import const DbConnectionInfo = globalThis.org.allbinary.business.init.db.DbConnectionInfo;
//import org.allbinary.logic.communication.log.config.type.LogConfigTypes;
export class DbInitInfo extends DbConnectionInfo {
    constructor(initFileName, read) {
        super();
        //For kotlin this is before the body of the constructor.
    }
    getUrl() {
        var url = super.getUrl();
        ;
        PreLogUtil.put("Url: " + url, this, "getUrl");
        //if statement needs to be on the same line and ternary does not work the same way.
        return url;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    write() {
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    load() {
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setHasRead(value) {
    }
}
