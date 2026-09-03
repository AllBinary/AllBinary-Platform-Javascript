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
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;
import { AbCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/AbCrypt.js';
//not GWT import const AbCrypt = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.AbCrypt;
import { KeySpecFactory } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/KeySpecFactory.js';
//not GWT import const KeySpecFactory = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.KeySpecFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbCryptUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbCryptUtil.instance;
    }
    constructor() {
        super();
        this.streamUtil = StreamUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    decrypt(inputStream, key) {
        var outputStream = null;
        ;
        try {
            outputStream = this.streamUtil.get(inputStream, new ByteArrayOutputStream(), new Array(16384));
            var abCrypt = new AbCrypt(KeySpecFactory.getInstance().DESEDE);
            ;
            abCrypt.init(key);
            //if statement needs to be on the same line and ternary does not work the same way.
            return abCrypt.decrypt(outputStream.toByteArray());
            ;
            try {
            }
            finally {
                this.streamUtil.close(outputStream);
                this.streamUtil.close(inputStream);
            }
        }
        finally {
        }
    }
}
AbCryptUtil.instance = new AbCryptUtil();
