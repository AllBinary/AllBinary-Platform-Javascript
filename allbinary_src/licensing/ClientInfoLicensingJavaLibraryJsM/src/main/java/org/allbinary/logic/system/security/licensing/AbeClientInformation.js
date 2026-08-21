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
import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ClientInformation } from './ClientInformation.js';
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
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
    }
}
