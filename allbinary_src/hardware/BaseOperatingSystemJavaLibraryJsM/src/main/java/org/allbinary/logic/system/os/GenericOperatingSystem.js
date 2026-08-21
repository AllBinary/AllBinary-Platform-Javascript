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
import { CharacterSet } from '../../../../../org/allbinary/logic/java/character/CharacterSet.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
import { SystemProperties } from './SystemProperties.js';
export class GenericOperatingSystem extends Object {
    constructor() {
        super();
        this.characterSet = new CharacterSet();
        this.scalable = false;
        var systemProperties = SystemProperties.getInstance();
        ;
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        var EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        ;
        if (stringValidationUtil.isEmpty(systemProperties.getName())) {
            this.osName = EMPTY_STRING;
        }
        else {
            this.osName = systemProperties.getName();
        }
        if (stringValidationUtil.isEmpty(systemProperties.getArch())) {
            this.osArch = EMPTY_STRING;
        }
        else {
            this.osArch = systemProperties.getArch();
        }
        if (stringValidationUtil.isEmpty(systemProperties.getVersion())) {
            this.osVersion = EMPTY_STRING;
        }
        else {
            this.osVersion = systemProperties.getVersion();
        }
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.osName;
    }
    getVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.osVersion;
    }
    getArch() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.osArch;
    }
    getCharacterSet() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.characterSet;
    }
    isOverScan() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getOverScanXPercent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 100;
    }
    getOverScanYPercent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 100;
    }
    isScalable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scalable;
    }
    isAutoHide() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        var NEW_LINE = CommonSeps.getInstance().NEW_LINE;
        ;
        var osBuffer = new StringMaker();
        ;
        osBuffer.append("Operating System Info: \n");
        osBuffer.append(this.getName());
        osBuffer.append(NEW_LINE);
        osBuffer.append(this.getArch());
        osBuffer.append(NEW_LINE);
        osBuffer.append(this.getVersion());
        osBuffer.append(NEW_LINE);
        osBuffer.append(StringUtil.getInstance().toString(this.getCharacterSet()));
        osBuffer.append(NEW_LINE);
        //if statement needs to be on the same line and ternary does not work the same way.
        return osBuffer.toString();
        ;
    }
}
