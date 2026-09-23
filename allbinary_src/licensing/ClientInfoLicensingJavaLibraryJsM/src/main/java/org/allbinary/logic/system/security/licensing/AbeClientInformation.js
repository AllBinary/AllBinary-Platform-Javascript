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
//not GWT import const LicenseInitInfo
import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ClientInformation } from './ClientInformation.js';
//not GWT import - same folder const ClientInformation
// This is the information sent to the license server
export class AbeClientInformation extends ClientInformation {
    constructor(name, version, specialName, shortName) {
        super(name, version, specialName, shortName);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    init() {
        try {
            this.setOperatingSystemInterface(OperatingSystemFactory.getInstance().getOperatingSystemInstance());
            var licenseInitInfo = LicenseInitInfoUtil.getInstance().read();
            ;
            this.setLicenseId(licenseInitInfo.getLicenseId());
            this.setLicenseServers(licenseInitInfo.getServerList());
            var stringValidationUtil = StringValidationUtil.getInstance();
            ;
            if (stringValidationUtil.isEmpty(this.getLicenseId())) {
                var NONE = "No License Id";
                ;
                this.setLicenseId(NONE);
            }
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.put(new StringMaker().append("Special Name: ").append(this.getSpecialName()).toString(), this, commonStrings.CONSTRUCTOR);
            //: 
        }
        catch (e) {
            var logUtil = LogUtil.getInstance();
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
    }
}
