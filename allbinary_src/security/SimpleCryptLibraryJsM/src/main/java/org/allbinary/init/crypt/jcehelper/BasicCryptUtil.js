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
import { ByteArrayInputStream } from '../../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import - same folder const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;
export class BasicCryptUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.XML_START = "<?xml";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicCryptUtil.instance;
    }
    //@Throws(Exception.constructor)
    getDecryptedInputStream(inputStream, cryptInterface) {
        var buffer = new ByteArrayOutputStream();
        ;
        var ch = 0;
        ;
        while (true) {
            ch = inputStream.read();
            if (ch == -1) {
                break;
            }
            buffer.write(ch);
        }
        var decrypted = cryptInterface.decrypt(buffer.toByteArray());
        ;
        var decryptedString = String.fromCharCode(...decrypted);
        ;
        var index = decryptedString.indexOf(this.XML_START);
        ;
        if (index > 0) {
            decryptedString = decryptedString.substring(index);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ByteArrayInputStream(this.tsUtil.getByteArray(decryptedString));
    }
}
BasicCryptUtil.instance = new BasicCryptUtil();
