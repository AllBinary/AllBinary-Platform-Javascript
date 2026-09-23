/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Cipher } from '../../../../../../../javax/crypto/Cipher.js';
//not GWT import const SecretKey
import { ByteUtil } from '../../../../../../../org/allbinary/logic/java/byteutil/ByteUtil.js';
//not GWT import const ByteUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseSecretComposite } from './BaseSecretComposite.js';
//not GWT import - same folder const BaseSecretComposite
export class SecretComposite extends BaseSecretComposite {
    constructor(secretKey, cipher, key) {
        super();
        this.byteUtil = ByteUtil.getInstance();
        this.secretKey = secretKey;
        this.cipher = cipher;
        this.key = key;
    }
    //@Throws(Exception.constructor)
    encrypt(array) {
        array = this.mutilate(array);
        this.cipher.init(Cipher.ENCRYPT_MODE, this.secretKey);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cipher.doFinal(array);
        ;
    }
    //@Throws(Exception.constructor)
    decrypt(array) {
        this.cipher.init(Cipher.DECRYPT_MODE, this.secretKey);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mutilate(this.cipher.doFinal(array));
        ;
    }
    mutilate(array) {
        for (var index = 0; index < this.key.length; index++) {
            var value = this.key[index];
            ;
            if (value < 8 && value > 0) {
                array = this.byteUtil.xorByte(array, Math.round(value));
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return array;
    }
}
