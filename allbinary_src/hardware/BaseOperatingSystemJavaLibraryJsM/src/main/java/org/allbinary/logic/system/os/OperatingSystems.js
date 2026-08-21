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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OperatingSystems extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OperatingSystems.instance;
    }
    constructor() {
        super();
        this.LINUX = "Linux";
        this.WINDOWS = "Windows";
        this.SOLARIS = "Solaris";
        this.WINDOWS2000 = "Windows 2000";
        this.WINDOWS_NT = "Windows NT";
        this.WINDOWS_10 = "Windows 10";
        this.WINDOWS_11 = "Windows 11";
        this.WINDOWS_VISTA = "Windows Vista";
        this.WINDOWS_XP = "Windows XP";
        this.ANDROID = this.LINUX;
        this.HARMONY = "HarmonyOS";
        this.unknownSpecificOSAllowed = true;
    }
    isUnknownSpecificOSAllowed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.unknownSpecificOSAllowed;
    }
    setUnknownSpecificOSAllowed(aUnknownSpecificOSAllowed) {
        this.unknownSpecificOSAllowed = aUnknownSpecificOSAllowed;
    }
}
OperatingSystems.instance = new OperatingSystems();
