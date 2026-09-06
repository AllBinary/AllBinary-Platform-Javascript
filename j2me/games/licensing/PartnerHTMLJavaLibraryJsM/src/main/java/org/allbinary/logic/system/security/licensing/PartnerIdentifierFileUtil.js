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
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PartnerIdentifierFileUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.FILE_NAME = "partner.txt";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PartnerIdentifierFileUtil.instance;
    }
    get() {
        try {
            var resourceUtil = ResourceUtil.getInstance();
            ;
            var partnerString = StringUtil.getInstance().EMPTY_STRING;
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return partnerString;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().NULL_STRING;
        }
    }
}
PartnerIdentifierFileUtil.instance = new PartnerIdentifierFileUtil();
