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
import { Object } from '../../../../../java/lang/Object.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NoOperatingSystem } from './NoOperatingSystem.js';
export class OperatingSystemFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OperatingSystemFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.genericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getOperatingSystemInstance() {
        var commonStrings = CommonStrings.getInstance();
        ;
        try {
            var osString = new StringMaker().append("OperatingSystem Info: ").append(this.genericOperatingSystem.toString()).toString();
            ;
            console.log(osString);
            this.logUtil.putF(osString, this, commonStrings.GET_INSTANCE);
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return genericOperatingSystem;
    }
}
OperatingSystemFactory.instance = new OperatingSystemFactory();
