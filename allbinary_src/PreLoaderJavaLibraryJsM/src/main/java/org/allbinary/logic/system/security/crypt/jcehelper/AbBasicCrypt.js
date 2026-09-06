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
//not GWT import const Provider = globalThis.java.security.Provider;
import { Security } from '../../../../../../../java/security/Security.js';
//not GWT import const KeySpec = globalThis.java.security.spec.KeySpec;
import { Cipher } from '../../../../../../../javax/crypto/Cipher.js';
//not GWT import const SecretKey = globalThis.javax.crypto.SecretKey;
import { SecretKeyFactory } from '../../../../../../../javax/crypto/SecretKeyFactory.js';
//not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const SunJCE = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.SunJCE;
import { KeySpecFactory } from './KeySpecFactory.js';
//not GWT import - same folder const KeySpecFactory = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.KeySpecFactory;
export class AbBasicCrypt extends Object {
    constructor(algorithm, key) {
        super();
        try {
            this.algorithm = algorithm;
            this.key = key.getBytes();
            this.init();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, this, "AbCrypt(alg,key)", e);
        }
    }
    init() {
        try {
            var sunJce = new com.sun.crypto.provider.SunJCE();
            ;
            Security.addProvider(sunJce);
            var keySpec = KeySpecFactory.getInstance().getInstance(this.algorithm, this.key);
            ;
            var keyFactory = SecretKeyFactory.getInstance(this.algorithm);
            ;
            this.secretKey = keyFactory.generateSecret(keySpec);
            this.cipher = Cipher.getInstance(this.algorithm);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE("init Failed", this, commonStrings.INIT, e);
        }
    }
    encrypt(array) {
        try {
            this.cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            var ivArray = this.secretKey.getEncoded();
            ;
            var encrypted = this.cipher.doFinal(array);
            ;
            var result = new Array(ivArray.length + encrypted.length);
            ;
            PreLogUtil.put("ivArray Length: " + ivArray.length, this, "encrypt");
            for (var index = 0; index < ivArray.length; index++) {
                result[index] = ivArray[index];
            }
            for (var index = 0; index < encrypted.length; index++) {
                result[index + ivArray.length] = encrypted[index];
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return result;
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    decrypt(array) {
        try {
            this.cipher.init(Cipher.DECRYPT_MODE, secretKey);
            var ivArray = new Array(8);
            ;
            for (var index = 0; index < 8; index++) {
                ivArray[index] = array[index];
            }
            PreLogUtil.put("ivArray Length: " + ivArray.length, this, "encrypt");
            var result = new Array(array.length - ivArray.length);
            ;
            for (var index = ivArray.length; index < array.length; index++) {
                result[index - ivArray.length] = array[index];
            }
            var decrypted = this.cipher.doFinal(result);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result;
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
}
