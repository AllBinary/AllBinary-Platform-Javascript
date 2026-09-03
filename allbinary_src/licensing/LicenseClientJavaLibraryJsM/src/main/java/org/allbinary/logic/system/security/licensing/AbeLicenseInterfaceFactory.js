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
//not GWT import const IOException = globalThis.java.io.IOException;
import { Calendar } from '../../../../../../java/util/Calendar.js';
//not GWT import const Calendar = globalThis.java.util.Calendar;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbeLicenseClient } from '../../../../../../org/allbinary/logic/system/security/licensing/client/AbeLicenseClient.js';
//not GWT import const AbeLicenseClient = globalThis.org.allbinary.logic.system.security.licensing.client.AbeLicenseClient;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { AbeNoLicense } from './AbeNoLicense.js';
//not GWT import const AbeNoLicense = globalThis.org.allbinary.logic.system.security.licensing.AbeNoLicense;
import { AbeClientInformationData } from './AbeClientInformationData.js';
//not GWT import const AbeClientInformationData = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationData;
import { LicensingException } from './LicensingException.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;
export class AbeLicenseInterfaceFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbeLicenseInterfaceFactory.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.time = 0;
        this.check = false;
        this.checkPeriod = 36000000;
        this.abeLicenseInterface = null;
    }
    //@Throws(LicensingException.constructor)
    getLicenseInstance(abeClientInformation) {
        if (isTimeToGetKey()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.get(abeClientInformation);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.abeLicenseInterface;
        }
    }
    //@Throws(LicensingException.constructor)
    get(abeClientInformation) {
        try {
            this.logUtil.putF("Getting Keys", this, this.commonStrings.GET);
            this.abeLicenseInterface = AbeNoLicense.getInstance();
            var licenseClient = new AbeLicenseClient();
            ;
            this.abeLicenseInterface = licenseClient.get(abeClientInformation);
            if (this.abeLicenseInterface !=
                null) {
                this.logUtil.putF("Default Key: " + this.abeLicenseInterface.getKey(AbeClientInformationData.getInstance().KEY), this, this.commonStrings.GET);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.abeLicenseInterface;
            //: 
        }
        catch (e) {
            this.logUtil.put("Licensing IO Error", this, this.commonStrings.GET, e);
            throw new LicensingException("License Server Connection Error");
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.put("Licensing Failure", this, this.commonStrings!.GET, e);
            
        
        
        
                                    throw new LicensingException("Unknown License Failure: " +this.constructor.name.toString()!);
                            
        }
        */
    }
    isTimeToGetKey() {
        var calendar = Calendar.getInstance();
        ;
        var currentTime = calendar.getTimeInMillis();
        ;
        if (this.abeLicenseInterface ==
            null
            || this.abeLicenseInterface == AbeNoLicense.getInstance() || !this.abeLicenseInterface.hasKey() || isCheck() || currentTime - checkPeriod > time) {
            this.abeLicenseInterface =
                null;
            this.time = currentTime;
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if ()
            ;
    }
    setCheck(check) {
        this.check = check;
    }
    isCheck() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.check;
    }
}
AbeLicenseInterfaceFactory.SINGLETON = new AbeLicenseInterfaceFactory();
