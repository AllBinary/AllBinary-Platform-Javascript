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
import { Integer } from '../../../../../../java/lang/Integer.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { RegistrationConfiguration } from '../../../../../../org/allbinary/logic/system/security/licensing/registration/RegistrationConfiguration.js';
//not GWT import const RegistrationConfiguration
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbeClientInformation } from './AbeClientInformation.js';
//not GWT import - same folder const AbeClientInformation
import { PartnerIdentifierFileUtil } from './PartnerIdentifierFileUtil.js';
//not GWT import - same folder const PartnerIdentifierFileUtil
export class MobileClientInformation extends AbeClientInformation {
    constructor(name, version, specialName, shortName) {
        super(name, version, new StringMaker().append(specialName).append(CommonSeps.getInstance().SPACE).append(PartnerIdentifierFileUtil.getInstance().get()).toString(), shortName);
        //For kotlin this is before the body of the constructor.
        var string = this.getSpecialName();
        ;
        var number = string.substring(string.length - 1);
        ;
        if (Integer.getInteger(number) ==
            null) {
            this.setHardSale(false);
        }
        var commonStrings = CommonStrings.getInstance();
        ;
        if (this.isHardSale()) {
            this.logUtil.putF("Use Hard Coded Selling", this, commonStrings.CONSTRUCTOR);
        }
        else {
            this.logUtil.putF("Don't Use Hard Coded Selling", this, commonStrings.CONSTRUCTOR);
        }
    }
    toHashtable() {
        var hashtable = super.toHashtable();
        ;
        var registrationConfiguration = RegistrationConfiguration.getInstance();
        ;
        hashtable.put(registrationConfiguration.NAME, registrationConfiguration.getRegistrationCode());
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
}
MobileClientInformation.DESC = "Mobile";
MobileClientInformation.ANDROID_DESC = "Android" + MobileClientInformation.DESC;
