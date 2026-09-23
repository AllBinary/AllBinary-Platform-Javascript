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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AbeClientInformationInterface
import { AbeLicenseInterfaceFactory } from '../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterfaceFactory.js';
//not GWT import const LicensingException
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbKeys extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbKeys.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(LicensingException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getKey(abeClientInformation, keyName) {
        try {
            this.logUtil.putF("Getting Key: " + keyName, this, "getKey");
            if (keyName.compareTo("DirectX 8") == 0 || keyName.compareTo("DirectX") == 0 || keyName.compareTo("Low Level") == 0 || keyName.compareTo("System Drivers") == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return "Temp For Input Library";
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return AbeLicenseInterfaceFactory.getInstance().getLicenseInstance(abeClientInformation).getKey(keyName);
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.put("Licensing Failure", this, "getKey()", e);
            
        
        
        
                                    throw new LicensingException("Unknown License Failure");
                            
        }
        */
    }
}
AbKeys.instance = new AbKeys();
