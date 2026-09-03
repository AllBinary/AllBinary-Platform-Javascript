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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
import { TsUtil } from '../../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;
import { NoOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js';
//not GWT import const NoOperatingSystem = globalThis.org.allbinary.logic.system.os.NoOperatingSystem;
import { OperatingSystems } from '../../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
//not GWT import const OperatingSystems = globalThis.org.allbinary.logic.system.os.OperatingSystems;
//not plain js import { SystemProperties } from '../../../../../../org/allbinary/logic/system/os/SystemProperties.js';
const SystemProperties = globalThis.org.allbinary.logic.system.os.SystemProperties;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidOS } from './AndroidOS.js';
//not GWT import const AndroidOS = globalThis.org.allbinary.logic.system.os.android.AndroidOS;
export class AndroidOperatingSystemFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidOperatingSystemFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getOperatingSystemInstance() {
        try {
            var GenericOperatingSystem;
            ;
            var systemProperties = SystemProperties.getInstance();
            ;
            var osName = systemProperties.getName();
            ;
            if (this.tsUtil.compareTo(osName, OperatingSystems.getInstance().ANDROID) == 0) {
                GenericOperatingSystem = new AndroidOS();
            }
            else {
                if (OperatingSystems.getInstance().isUnknownSpecificOSAllowed()) {
                    GenericOperatingSystem = new AndroidOS();
                }
                else {
                    throw new Exception("Specific Android OS Not Supported: " + osName);
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return GenericOperatingSystem;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put("Failed to get OperatingSystem returning NoOperatingSystem", this, commonStrings.GET_INSTANCE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return NoOperatingSystem.NO_OPERATING_SYSTEM;
        }
    }
}
AndroidOperatingSystemFactory.instance = new AndroidOperatingSystemFactory();
