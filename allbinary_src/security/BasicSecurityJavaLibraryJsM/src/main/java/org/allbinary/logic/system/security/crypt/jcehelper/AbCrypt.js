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
import { Security } from '../../../../../../../java/security/Security.js';
//not GWT import const KeySpec = globalThis.java.security.spec.KeySpec;
import { Cipher } from '../../../../../../../javax/crypto/Cipher.js';
//not GWT import const SecretKey = globalThis.javax.crypto.SecretKey;
import { SecretKeyFactory } from '../../../../../../../javax/crypto/SecretKeyFactory.js';
//not GWT import const SecretKeyFactory = globalThis.javax.crypto.SecretKeyFactory;
import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
//not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { BouncyCastleProvider } from '../../../../../../../org/bouncycastle/jce/provider/BouncyCastleProvider.js';
//not GWT import const BouncyCastleProvider = globalThis.org.bouncycastle.jce.provider.BouncyCastleProvider;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseSecretComposite } from './BaseSecretComposite.js';
//not GWT import - same folder const BaseSecretComposite = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.BaseSecretComposite;
import { KeySpecFactory } from './KeySpecFactory.js';
//not GWT import - same folder const KeySpecFactory = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.KeySpecFactory;
import { SecretComposite } from './SecretComposite.js';
//not GWT import - same folder const SecretComposite = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.SecretComposite;
export class AbCrypt extends Object {
    constructor(algorithm) {
        super();
        this.tsUtil = TsUtil.getInstance();
        this.secretComposite = BaseSecretComposite.NULL_SECRET_COMPOSITE;
        this.algorithm = algorithm;
    }
    init(keyAsString) {
        var commonStrings = CommonStrings.getInstance();
        ;
        try {
            try {
                Security.addProvider(new BouncyCastleProvider());
                //: 
            }
            catch (e) {
                PreLogUtil.putOE(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
            }
            var key = this.tsUtil.getByteArray(keyAsString);
            ;
            var keySpec = KeySpecFactory.getInstance().getInstance(this.algorithm, key);
            ;
            var keyFactory = SecretKeyFactory.getInstance(this.algorithm);
            ;
            var secretKey = keyFactory.generateSecret(keySpec);
            ;
            var cipher = Cipher.getInstance(this.algorithm);
            ;
            this.secretComposite = new SecretComposite(secretKey, cipher, key);
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("init Failed", this, commonStrings.INIT, e);
        }
    }
    encrypt(array) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.secretComposite.encrypt(array);
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
            return this.secretComposite.decrypt(array);
            ;
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullUtil.getInstance().NULL_BYTE_ARRAY;
        }
    }
}
