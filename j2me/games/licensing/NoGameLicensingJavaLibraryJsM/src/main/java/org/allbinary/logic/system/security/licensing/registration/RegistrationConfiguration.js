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
import { Object } from '../../../../../../../java/lang/Object.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RegistrationConfiguration extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RegistrationConfiguration.SINGLETON;
    }
    constructor() {
        super();
        this.registrationCode = "No Registration Code";
        this.NAME = "registrationid";
    }
    //@Throws(Exception.constructor)
    read() {
    }
    //@Throws(Exception.constructor)
    write() {
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append("Registration Code: ").append(this.getRegistrationCode()).toString();
        ;
    }
    setRegistrationCode(registrationCode) {
        this.registrationCode = registrationCode;
    }
    getRegistrationCode() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.registrationCode;
    }
}
RegistrationConfiguration.SINGLETON = new RegistrationConfiguration();
