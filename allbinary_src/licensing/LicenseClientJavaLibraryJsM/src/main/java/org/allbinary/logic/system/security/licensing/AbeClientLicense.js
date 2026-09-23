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
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const LicenseType
import { AbeClientInformationData } from './AbeClientInformationData.js';
//not GWT import - same folder const AbeClientInformationData
import { LicenseTypeFactory } from './LicenseTypeFactory.js';
//not GWT import - same folder const LicenseTypeFactory
export class AbeClientLicense extends Object {
    static hasRequiredKeys(resultHashtable) {
        var abeClientInformationData = AbeClientInformationData.getInstance();
        ;
        if (resultHashtable.containsKey(abeClientInformationData.LICENSEID) && resultHashtable.containsKey(abeClientInformationData.LICENSESERVERS) && resultHashtable.containsKey(abeClientInformationData.KEY) && resultHashtable.containsKey(abeClientInformationData.LICENSE_TYPE)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    constructor(hashtable) {
        super();
        this.hashtable = StdUtil.getInstance().createHashtable();
        var abeClientInformationData = AbeClientInformationData.getInstance();
        ;
        var keyValue = hashtable.get(abeClientInformationData.KEY);
        ;
        if (keyValue !=
            null) {
            if (keyValue instanceof String) {
                this.hashtable.put(abeClientInformationData.KEY, keyValue);
            }
        }
        this.id = hashtable.get(abeClientInformationData.LICENSEID);
        var vector = hashtable.get(abeClientInformationData.LICENSESERVERS);
        ;
        this.servers = new BasicArrayListD();
        var size = vector.size();
        ;
        for (var index = 0; index < size; index++) {
            this.servers.add(vector.get(index));
        }
        var stringUtil = StringUtil.getInstance();
        ;
        this.setSpecial(stringUtil.getNonNull(hashtable.get(abeClientInformationData.SPECIAL)));
        var licenseTypeString = stringUtil.getNonNull(hashtable.get(abeClientInformationData.LICENSE_TYPE));
        ;
        this.licenseType = LicenseTypeFactory.getInstance().getInstance(licenseTypeString);
    }
    hasKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isValid();
        ;
    }
    getKey(keyName) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable.get(keyName);
    }
    getLicenseId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    getServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.servers;
    }
    isValid() {
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (!stringValidationUtil.isEmpty(this.getKey(AbeClientInformationData.getInstance().KEY))) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        var BREAK = "<br/>";
        ;
        stringBuffer.append("License Id: ");
        stringBuffer.append(this.getLicenseId());
        stringBuffer.append(BREAK);
        stringBuffer.append("Is Valid: ");
        stringBuffer.appendboolean(this.isValid());
        stringBuffer.append(BREAK);
        stringBuffer.append("Keys: ");
        stringBuffer.append(this.hashtable.toString());
        stringBuffer.append(BREAK);
        var serverVector = this.getServers();
        ;
        var size = serverVector.size();
        ;
        for (var index = 0; index < size; index++) {
            var nextServerString = serverVector.get(index);
            ;
            stringBuffer.append("Server: ");
            stringBuffer.append(nextServerString);
            stringBuffer.append(BREAK);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    setSpecial(special) {
        this.special = special;
    }
    getSpecial() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.special;
    }
    getLicenseType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.licenseType;
    }
}
