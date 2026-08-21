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
import { Exception } from '../../../../../java/lang/Exception.js';
import { AndroidOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/android/AndroidOperatingSystemFactory.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NoOperatingSystem } from './NoOperatingSystem.js';
import { SystemProperties } from './SystemProperties.js';
import { OperatingSystems } from './OperatingSystems.js';
export class OperatingSystemFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OperatingSystemFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.genericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
        this.hasDetected = false;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getOperatingSystemInstance() {
        var commonStrings = CommonStrings.getInstance();
        ;
        try {
            var systemProperties = SystemProperties.getInstance();
            ;
            var osName = systemProperties.getName();
            ;
            if (!this.hasDetected) {
                this.hasDetected = true;
                if (osName.indexOf(OperatingSystems.getInstance().ANDROID) >= 0) {
                    this.logUtil.putF("Found a Android OS", this, commonStrings.GET_INSTANCE);
                    this.genericOperatingSystem = AndroidOperatingSystemFactory.getInstance().getOperatingSystemInstance();
                    this.logUtil.putF(new StringMaker().append("Operating System Info: ").append(this.genericOperatingSystem.toString()).toString(), this, commonStrings.GET_INSTANCE);
                }
                else if (osName.indexOf(OperatingSystems.getInstance().HARMONY) >= 0) {
                    this.logUtil.putF("Found a Harmony OS", this, commonStrings.GET_INSTANCE);
                    this.genericOperatingSystem = AndroidOperatingSystemFactory.getInstance().getOperatingSystemInstance();
                    this.logUtil.putF(new StringMaker().append("Operating System Info: ").append(this.genericOperatingSystem.toString()).toString(), this, commonStrings.GET_INSTANCE);
                }
                else {
                    throw new Exception(new StringMaker().append("OS Not Supported: ").append(osName).toString());
                }
            }
            //: 
        }
        catch (e) {
            this.genericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.genericOperatingSystem;
    }
}
OperatingSystemFactory.instance = new OperatingSystemFactory();
