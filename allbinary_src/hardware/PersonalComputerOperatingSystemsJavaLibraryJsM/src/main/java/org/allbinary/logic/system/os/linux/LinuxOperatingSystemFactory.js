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
import { Exception } from '../../../../../../java/lang/Exception.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
import { NoOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js';
import { OperatingSystems } from '../../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
import { SystemProperties } from '../../../../../../org/allbinary/logic/system/os/SystemProperties.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LinuxOS } from './LinuxOS.js';
export class LinuxOperatingSystemFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LinuxOperatingSystemFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    getOperatingSystemInstance() {
        try {
            var operatingSystems = OperatingSystems.getInstance();
            ;
            var osName = SystemProperties.getInstance().getName();
            ;
            var operatingSystemInterface;
            ;
            if (osName.compareTo(operatingSystems.LINUX) == 0) {
                operatingSystemInterface = new LinuxOS();
            }
            else {
                if (operatingSystems.isUnknownSpecificOSAllowed()) {
                    operatingSystemInterface = new LinuxOS();
                }
                else {
                    throw new Exception("Specific Linux OS Not Supported: " + osName);
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return operatingSystemInterface;
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return NoOperatingSystem.NO_OPERATING_SYSTEM;
        }
    }
}
LinuxOperatingSystemFactory.instance = new LinuxOperatingSystemFactory();
