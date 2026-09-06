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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;
import { NoOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js';
//not GWT import const NoOperatingSystem = globalThis.org.allbinary.logic.system.os.NoOperatingSystem;
import { OperatingSystems } from '../../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
//not GWT import const OperatingSystems = globalThis.org.allbinary.logic.system.os.OperatingSystems;
//not plain js import { SystemProperties } 
const SystemProperties = globalThis.org.allbinary.logic.system.os.SystemProperties;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WindowsOS } from './WindowsOS.js';
//not GWT import - same folder const WindowsOS = globalThis.org.allbinary.logic.system.os.windows.WindowsOS;
export class WindowsOperatingSystemFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WindowsOperatingSystemFactory.instance;
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
            if (osName.compareTo(operatingSystems.WINDOWS_NT) == 0) {
                operatingSystemInterface = new WindowsOS();
            }
            else if (osName.compareTo(operatingSystems.WINDOWS_10) == 0) {
                operatingSystemInterface = new WindowsOS();
            }
            else if (osName.compareTo(operatingSystems.WINDOWS_11) == 0) {
                operatingSystemInterface = new WindowsOS();
            }
            else if (osName.compareTo(operatingSystems.WINDOWS2000) == 0) {
                operatingSystemInterface = new WindowsOS();
            }
            else if (osName.compareTo(operatingSystems.WINDOWS_XP) == 0) {
                operatingSystemInterface = new WindowsOS();
            }
            else if (osName.compareTo(operatingSystems.WINDOWS_VISTA) == 0) {
                operatingSystemInterface = new WindowsOS();
            }
            else {
                if (operatingSystems.isUnknownSpecificOSAllowed()) {
                    operatingSystemInterface = new WindowsOS();
                }
                else {
                    throw new Exception("Specific Windows OS Not Supported: " + osName);
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
WindowsOperatingSystemFactory.instance = new WindowsOperatingSystemFactory();
