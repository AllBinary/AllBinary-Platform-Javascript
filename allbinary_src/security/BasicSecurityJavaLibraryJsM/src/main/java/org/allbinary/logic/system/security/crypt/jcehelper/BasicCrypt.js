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
import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
//not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { ByteUtil } from '../../../../../../../org/allbinary/logic/java/byteutil/ByteUtil.js';
//not GWT import const ByteUtil = globalThis.org.allbinary.logic.java.byteutil.ByteUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicCrypt extends Object {
    constructor(keyAsString) {
        super();
        this.byteUtil = ByteUtil.getInstance();
        var key = NullUtil.getInstance().NULL_BYTE_ARRAY;
        ;
        try {
            key = TsUtil.getInstance().getByteArray(keyAsString);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, this, "AbCrypt(alg,key)", e);
        }
        this.key = key;
    }
    encrypt(array) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.mutilate(array);
            ;
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullUtil.getInstance().NULL_BYTE_ARRAY;
        }
    }
    decrypt(array) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.mutilate(array);
            ;
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullUtil.getInstance().NULL_BYTE_ARRAY;
        }
    }
    mutilate(array) {
        var value;
        ;
        for (var index = 0; index < this.key.length; index++) {
            value = this.key[index];
            array = this.byteUtil.xor(array, value);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return array;
    }
}
