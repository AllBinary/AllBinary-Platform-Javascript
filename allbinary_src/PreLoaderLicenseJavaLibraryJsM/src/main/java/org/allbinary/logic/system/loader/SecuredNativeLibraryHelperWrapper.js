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
import { AbKeys } from '../../../../../org/allbinary/logic/system/security/AbKeys.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NativeLibraryHelperWrapper } from './NativeLibraryHelperWrapper.js';
//not GWT import const SecuredNativeLibraryInterface = globalThis.org.allbinary.logic.system.loader.SecuredNativeLibraryInterface;
export class SecuredNativeLibraryHelperWrapper extends NativeLibraryHelperWrapper {
    constructor(securedNativeLibraryInterface) {
        super(securedNativeLibraryInterface.getLibraryName());
        //For kotlin this is before the body of the constructor.
        this.securedNativeLibraryInterface = securedNativeLibraryInterface;
    }
    //@Throws(LicensingException.constructor)
    unlock(abeClientInformation) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.securedNativeLibraryInterface.unlock(AbKeys.getInstance().getKey(abeClientInformation, this.securedNativeLibraryInterface.getName()));
        ;
    }
}
