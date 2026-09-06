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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const OutputStream = globalThis.java.io.OutputStream;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class StreamUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StreamUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    get(inputStream, outputStream, buffer) {
        var len = 0;
        ;
        while (true) {
            len = inputStream.read(buffer, 0, buffer.length);
            if (len != -1) {
            }
            else {
                break;
            }
            outputStream.write(buffer, 0, len);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return outputStream;
    }
    //@Throws(Exception.constructor)
    getByteArray(inputStream, outputStream2, byteArray) {
        var outputStream = outputStream2;
        ;
        try {
            this.get(inputStream, outputStream, byteArray);
            //if statement needs to be on the same line and ternary does not work the same way.
            return outputStream.toByteArray();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
        finally {
            this.close(outputStream);
        }
    }
    close(closeable) {
        try {
            if (closeable !=
                null) {
                closeable.close();
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CLOSE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
StreamUtil.instance = new StreamUtil();
