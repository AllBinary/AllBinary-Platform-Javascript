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
import { DESKeySpec } from '../../../../../../../javax/crypto/spec/DESKeySpec.js';
import { DESedeKeySpec } from '../../../../../../../javax/crypto/spec/DESedeKeySpec.js';
import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
import { PreLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
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
