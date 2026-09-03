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
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LicenseType } from './LicenseType.js';
//not GWT import const LicenseType = globalThis.org.allbinary.logic.system.security.licensing.LicenseType;
export class LicenseTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.UNKNOWN = new LicenseType(CommonStrings.getInstance().UNKNOWN);
        this.DEMO = new LicenseType("Demo");
        this.NORMAL = new LicenseType("Normal");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LicenseTypeFactory.instance;
    }
    getInstance(name) {
        if (this.DEMO.getName().compareTo(name) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.DEMO;
        }
        else if (this.NORMAL.getName().compareTo(name) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NORMAL;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.UNKNOWN;
    }
}
LicenseTypeFactory.instance = new LicenseTypeFactory();
