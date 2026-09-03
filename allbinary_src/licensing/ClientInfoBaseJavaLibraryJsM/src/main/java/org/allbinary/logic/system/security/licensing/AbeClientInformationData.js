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
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbeClientInformationData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbeClientInformationData.instance;
    }
    constructor() {
        super();
        this.KEY = "KEY";
        this.NAME = "NAME";
        this.VERSION = "VERSION";
        this.SPECIALNAME = "SPECIALNAME";
        this.LICENSEID = "LICENSEID";
        this.LICENSE_TYPE = "LICENSETYPE";
        this.PREVIOUSLICENSEID = "PREVIOUSLICENSEID";
        this.OSNAME = "OSNAME";
        this.OSARCH = "OSARCH";
        this.OSVERSION = "OSVERSION";
        this.OS = "OS";
        this.HARDWARE = "HARDWARE";
        this.LICENSESERVERS = "LICENSESERVERS";
        this.NEWLICENSE = "NEWLICENSE";
        this.ISNEW = "ISNEW";
        this.SPECIAL = "SPECIAL";
    }
}
AbeClientInformationData.instance = new AbeClientInformationData();
