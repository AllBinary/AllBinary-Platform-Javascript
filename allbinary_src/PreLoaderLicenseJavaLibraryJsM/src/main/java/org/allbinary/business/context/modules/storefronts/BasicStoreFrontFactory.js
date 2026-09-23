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
import { Object } from '../../../../../../java/lang/Object.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicStoreFrontsEntity } from './BasicStoreFrontsEntity.js';
//not GWT import - same folder const BasicStoreFrontInterface
export class BasicStoreFrontFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicStoreFrontFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getInstance(storeName) {
        try {
            var storeFronts = new BasicStoreFrontsEntity();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return storeFronts.getStoreFrontInterface(storeName);
            ;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
}
BasicStoreFrontFactory.instance = new BasicStoreFrontFactory();
