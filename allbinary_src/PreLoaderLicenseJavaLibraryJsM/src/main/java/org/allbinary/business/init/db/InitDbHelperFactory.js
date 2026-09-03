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
import { AbeFactory } from '../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const DatabaseConnectionInfoInterface = globalThis.org.allbinary.business.init.db.DatabaseConnectionInfoInterface;
export class InitDbHelperFactory extends Object {
    //@Throws(LicensingException.constructor)
    static getInstance(abeClientInformation, databaseConnectionInfoInterface) {
        var params = new Array(1);
        ;
        var classes = new Array(1);
        ;
        classes[0] =
        ;
        params[0] = databaseConnectionInfoInterface;
        var anyType = AbeFactory.getInstance().getInstance(abeClientInformation, CLASSNAME, classes, params);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType;
    }
    //@Throws(LicensingException.constructor)
    static getInstance(abeClientInformation) {
        var anyType = AbeFactory.getInstance().getInstance(abeClientInformation, CLASSNAME, null, null);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType;
    }
    constructor() {
        super();
    }
}
InitDbHelperFactory.CLASSNAME = "org.allbinary.business.installer.InitDbCrypted";
