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
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NoHardware } from './NoHardware.js';
import { HardwareFactory } from './HardwareFactory.js';
export class SystemHardwareFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SystemHardwareFactory.instance;
    }
    static static_toString() {
        var systemHardwareFactory = SystemHardwareFactory.getInstance();
        ;
        var osBuffer = new StringMaker();
        ;
        osBuffer.append("Hardware Info: \n");
        if (systemHardwareFactory.hardwareInterface !=
            null) {
            osBuffer.append(systemHardwareFactory.hardwareInterface.toString());
        }
        else {
            osBuffer.append(StringUtil.getInstance().NULL_STRING);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return osBuffer.toString();
        ;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.hardwareInterface = NoHardware.getInstance();
    }
    getInstance(operatingSystemInterface) {
        try {
            if (this.hardwareInterface == NoHardware.getInstance()) {
                this.hardwareInterface = HardwareFactory.getInstance().getInstance(operatingSystemInterface);
            }
            this.logUtil.putF("Found Hardware", this, this.commonStrings.CONSTRUCTOR);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hardwareInterface;
    }
}
SystemHardwareFactory.instance = new SystemHardwareFactory();
