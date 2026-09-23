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
import { Exception } from '../../../../java/lang/Exception.js';
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream
import { FileInputStream } from '../../../../java/io/FileInputStream.js';
//not GWT import const InputStream
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2SE - PC
export class ResourceUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ResourceUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.path = StringUtil.getInstance().EMPTY_STRING;
        this.ext = StringUtil.getInstance().EMPTY_STRING;
    }
    setLoadingPaths(path, ext) {
        this.path = path;
        this.ext = ext;
    }
    setClassLoader(classLoader) {
    }
    //@Throws(Exception.constructor)
    getResourceAsStream(resource) {
        var inputStream = this.getResourceAsStreamAtStart(resource, 2);
        ;
        if (inputStream ==
            null) {
            inputStream = this.getResourceAsStreamAtStart(resource, 1);
            if (inputStream ==
                null) {
                throw new Exception(new StringMaker().append("Unable to obtain: ").append(resource).toString());
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
    //@Throws(Exception.constructor)
    getResourceAsStreamAtStart(resource, startIndex) {
        var inputStream = new FileInputStream(new StringMaker().append(this.path).append(resource).append(this.ext).toString());
        ;
        if (inputStream !=
            null) {
            var byteArray = new Array(inputStream.available());
            ;
            StreamUtil.getInstance().getByteArray(inputStream, new ByteArrayOutputStream(), byteArray);
            //if statement needs to be on the same line and ternary does not work the same way.
            return new ByteArrayInputStream(byteArray);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
    addResource(resource, value) {
    }
}
ResourceUtil.instance = new ResourceUtil();
