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
import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
//not GWT import const KeySpec = globalThis.java.security.spec.KeySpec;
import { DESKeySpec } from '../../../../../../../javax/crypto/spec/DESKeySpec.js';
//not GWT import const DESKeySpec = globalThis.javax.crypto.spec.DESKeySpec;
import { DESedeKeySpec } from '../../../../../../../javax/crypto/spec/DESedeKeySpec.js';
//not GWT import const DESedeKeySpec = globalThis.javax.crypto.spec.DESedeKeySpec;
import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class KeySpecFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return KeySpecFactory.instance;
    }
    constructor() {
        super();
        this.DES = "DES";
        this.DESEDE = "DESede";
        this.BLOWFISH = "Blowfish";
    }
    getInstance(algorithm, keyData) {
        try {
            var tsUtil = TsUtil.getInstance();
            ;
            if (tsUtil.compareTo(algorithm, this.DES) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return new DESKeySpec(keyData);
            }
            else if (tsUtil.compareTo(algorithm, this.DESEDE) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return new DESedeKeySpec(keyData);
            }
            else {
                throw new RuntimeException();
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
            throw new RuntimeException();
        }
    }
}
KeySpecFactory.instance = new KeySpecFactory();
