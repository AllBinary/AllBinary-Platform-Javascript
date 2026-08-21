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
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
import { LicenseTypeFactory } from './LicenseTypeFactory.js';
export class AbeNoLicense extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbeNoLicense.abeNoLicense;
    }
    constructor() {
        super();
        this.serverVector = new BasicArrayListD();
    }
    hasKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getKey(keyName) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    getLicenseId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    getSpecial() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    getServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverVector;
    }
    isValid() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getLicenseType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LicenseTypeFactory.getInstance().UNKNOWN;
    }
}
AbeNoLicense.abeNoLicense = new AbeNoLicense();
