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
import { LogFactory } from '../../../../../org/allbinary/logic/communication/log/LogFactory.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { LinuxOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/linux/LinuxOperatingSystemFactory.js';
import { SolarisOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/solaris/SolarisOperatingSystemFactory.js';
import { WindowsOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/windows/WindowsOperatingSystemFactory.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NoOperatingSystem } from './NoOperatingSystem.js';
import { OperatingSystems } from './OperatingSystems.js';
import { SystemProperties } from './SystemProperties.js';
export class OperatingSystemFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OperatingSystemFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.genericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
        this.hasDetected = false;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getOperatingSystemInstance() {
        try {
            var operatingSystems = OperatingSystems.getInstance();
            ;
            var systemProperties = SystemProperties.getInstance();
            ;
            var osName = systemProperties.getName();
            ;
            var osArch = systemProperties.getArch();
            ;
            var osVersion = systemProperties.getVersion();
            ;
            if (!this.hasDetected) {
                this.logUtil.putF("osName: " + osName, this, this.commonStrings.GET_INSTANCE);
                this.hasDetected = true;
                if (osName.indexOf(operatingSystems.LINUX) >= 0) {
                    if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                        this.logUtil.putF("Found a Linux OS", this, this.commonStrings.GET_INSTANCE);
                    }
                    this.genericOperatingSystem = LinuxOperatingSystemFactory.getInstance().getOperatingSystemInstance();
                }
                else if (osName.indexOf(operatingSystems.WINDOWS) >= 0) {
                    if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                        this.logUtil.putF("Found a Windows OS", this, this.commonStrings.GET_INSTANCE);
                    }
                    this.genericOperatingSystem = WindowsOperatingSystemFactory.getInstance().getOperatingSystemInstance();
                }
                else if (osName.indexOf(operatingSystems.SOLARIS) >= 0) {
                    if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                        this.logUtil.putF("Found a Solaris OS", this, this.commonStrings.GET_INSTANCE);
                    }
                    this.genericOperatingSystem = SolarisOperatingSystemFactory.getInstance().getOperatingSystemInstance();
                }
                else {
                    throw new Exception(new StringMaker().append("OS Not Supported: ").append(osName).toString());
                }
                var log = LogFactory.getInstanceF(new StringMaker().append("OperatingSystem Info: ").append(StringUtil.getInstance().toString(this.genericOperatingSystem)).toString(), this, this.commonStrings.GET_INSTANCE);
                ;
                console.log(log.toString());
                this.logUtil.putL(log);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.genericOperatingSystem;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.GET_INSTANCE, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return NoOperatingSystem.NO_OPERATING_SYSTEM;
        }
    }
}
OperatingSystemFactory.instance = new OperatingSystemFactory();
