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
import { AndroidInfoFactory } from '../../../../../../org/allbinary/android/AndroidInfoFactory.js';
//not GWT import const AndroidInfoFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { GenericOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidSystemProperties } from './AndroidSystemProperties.js';
//not GWT import - same folder const AndroidSystemProperties
export class AndroidOS extends GenericOperatingSystem {
    constructor() {
        super();
        this.stringBuffer = new StringMaker();
        this.DEVICE_ID = "DeviceId";
        this.DEVICE_SOFTWARE_VERSION = "DeviceSoftwareVersion";
        this.LINE_1_NUMBER = "Line1Number";
        this.OUYA = "ouya";
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        if (SDK_VERSION > 10) {
            this.scalable = true;
        }
        var properties = AndroidSystemProperties.getInstance();
        ;
        var commonStrings = CommonSeps.getInstance();
        ;
        this.stringBuffer.append(this.DEVICE_ID);
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getDeviceId());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append(this.DEVICE_SOFTWARE_VERSION);
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getDeviceSoftwareVersion());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append(this.LINE_1_NUMBER);
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getLine1Number());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("NetworkCountryIso");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getNetworkCountryIso());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("NetworkOperator");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getNetworkOperator());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("NetworkOperatorName");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getNetworkOperatorName());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("NetworkType");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.appendint(properties.getNetworkType());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("PhoneType");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.appendint(properties.getPhoneType());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("SimCountryIso");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getSimCountryIso());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("SimOperator");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getSimOperator());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("SimOperatorName");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getSimOperatorName());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("SimSerialNumber");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getSimSerialNumber());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("SubscriberId");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getSubscriberId());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("VoiceMailAlphaTag");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getVoiceMailAlphaTag());
        this.stringBuffer.append(commonStrings.SPACE);
        this.stringBuffer.append("VoiceMailNumber");
        this.stringBuffer.append(commonStrings.EQUALS);
        this.stringBuffer.append(properties.getVoiceMailNumber());
        this.stringBuffer.append(commonStrings.SPACE);
    }
    isOverScan() {
        var properties = AndroidSystemProperties.getInstance();
        ;
        if (properties.getDevice().toLowerCase().indexOf(this.OUYA) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getOverScanXPercent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 90;
    }
    getOverScanYPercent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 90;
    }
    toString() {
        var osBuffer = new StringMaker();
        ;
        osBuffer.append(super.toString());
        osBuffer.append(CommonSeps.getInstance().SPACE);
        osBuffer.append("Other System Info: \n");
        osBuffer.append(this.stringBuffer.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return osBuffer.toString();
        ;
    }
}
