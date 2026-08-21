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
import { Exception } from '../../../../../java/lang/Exception.js';
import { Hashtable } from '../../../../../java/util/Hashtable.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InputToGameKeyMapping } from './InputToGameKeyMapping.js';
export class InputMapping extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.hashtable = new Hashtable();
        this.mappedList = new BasicArrayListD();
    }
    getTotalMapped() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable.length;
        ;
    }
    isDefaultNew() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getDefault() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InputToGameKeyMapping.getNullInstance();
        ;
    }
    removeAll() {
        this.hashtable.clear();
        this.mappedList.clear();
    }
    remove(input, mappedToInput) {
        var stringBuffer = new StringMaker();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        stringBuffer.append(CommonLabels.getInstance().START_LABEL);
        stringBuffer.append(stringUtil.toString(input));
        stringBuffer.append(" == ");
        stringBuffer.append(stringUtil.toString(mappedToInput));
        this.logUtil.putF(stringBuffer.toString(), this, "InputMapping::remove");
        var list = this.getMappedInput(input);
        ;
        if (list.contains(mappedToInput)) {
            list.remove(mappedToInput);
            this.mappedList.remove(mappedToInput);
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append("Removed: ");
            stringBuffer.append(stringUtil.toString(input));
            stringBuffer.append(" == ");
            stringBuffer.append(stringUtil.toString(mappedToInput));
            this.logUtil.putF(stringBuffer.toString(), this, "InputMapping::remove");
        }
        else {
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append("Not Deleted: ");
            stringBuffer.append(stringUtil.toString(input));
            stringBuffer.append(" == ");
            stringBuffer.append(stringUtil.toString(mappedToInput));
            this.logUtil.putF(stringBuffer.toString(), this, "InputMapping::remove");
        }
    }
    //@Throws(Exception.constructor)
    addMapping(inputToGameKeyMapping) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    add(input, mappedToInput) {
        var list = this.getMappedInput(input);
        ;
        if (!list.contains(mappedToInput)) {
            list.add(mappedToInput);
            this.mappedList.add(mappedToInput);
        }
    }
    isMapped(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mappedList.contains(input);
        ;
    }
    getMappedInput(id) {
        var mappingInputCanBeNullList = this.hashtable.get(id);
        ;
        if (mappingInputCanBeNullList ==
            null) {
            var list = new BasicArrayListD();
            ;
            this.hashtable.put(id, list);
            //if statement needs to be on the same line and ternary does not work the same way.
            return list;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return mappingInputCanBeNullList;
    }
    getHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
}
