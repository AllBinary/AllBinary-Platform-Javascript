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
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const AbeLicenseInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterface;
import { LicenseTypeFactory } from './LicenseTypeFactory.js';
//not GWT import const LicenseType = globalThis.org.allbinary.logic.system.security.licensing.LicenseType;
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
