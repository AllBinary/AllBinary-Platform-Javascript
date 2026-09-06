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
import { Thread } from '../../../../java/lang/Thread.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2SE - J2ME
export class ResourceUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ResourceUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    setLoadingPaths(path, ext) {
        this.logUtil.putF(CommonStrings.getInstance().NOT_IMPLEMENTED, this, "setLoadingPaths");
    }
    setClassLoader(classLoader) {
        this.logUtil.putF(new StringMaker().append("Resource Loader: ").append(classLoader.constructor.name.toString()).toString(), this, "setClassLoader");
        ResourceUtil.classLoader = classLoader;
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
        var commonSeps = CommonSeps.getInstance();
        ;
        var index = resource.indexOf(commonSeps.COLON);
        ;
        var resourcePath = resource.substring(index + startIndex);
        ;
        var inputStream = resource..javaClass.getResourceAsStream(resourcePath);
        ;
        if (inputStream !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return inputStream;
        }
        var classLoader = ResourceUtil.classLoader;
        ;
        inputStream = classLoader.getResourceAsStream(resourcePath);
        if (inputStream !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return inputStream;
        }
        inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(resourcePath);
        if (inputStream !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return inputStream;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
    addResource(resource, value) {
    }
}
ResourceUtil.classLoader = NullUtil.getInstance().NULL_OBJECT;
ResourceUtil.instance = new ResourceUtil();
