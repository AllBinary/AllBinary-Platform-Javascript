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
//sameFolderImports - not GWT import - same folder const DatabaseConnectionInfoInterface
export class InitDbHelperFactory extends Object {
    static getInstance(...args) {
        if (args.length === 2)
            return this.getInstance$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.getInstance$overload2(args[0]);
        throw new TypeError('No matching overload: getInstance');
    }
    //@Throws(LicensingException.constructor)
    static getInstance$overload1(abeClientInformation, databaseConnectionInfoInterface) {
        let params = new Array(1);
        ;
        let classes = new Array(1);
        ;
        classes[0] =
        ;
        params[0] = databaseConnectionInfoInterface;
        let anyType = AbeFactory.getInstance().getInstance(abeClientInformation, CLASSNAME, classes, params);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType;
    }
    //@Throws(LicensingException.constructor)
    static getInstance$overload2(abeClientInformation) {
        let anyType = AbeFactory.getInstance().getInstance(abeClientInformation, CLASSNAME, null, null);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType;
    }
    constructor() {
        super();
    }
}
InitDbHelperFactory.CLASSNAME = "org.allbinary.business.installer.InitDbCrypted";
