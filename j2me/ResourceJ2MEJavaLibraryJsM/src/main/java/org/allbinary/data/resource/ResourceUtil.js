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
//not GWT import const InputStream
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2ME
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
    //@Throws(Exception.constructor)
    getResourceAsStream(resource) {
        var inputStream = resource..javaClass.getResourceAsStream(resource);
        ;
        if (inputStream ==
            null) {
            inputStream = this.getResourceAsStreamAtStart(resource, 2);
            if (inputStream ==
                null) {
                inputStream = this.getResourceAsStreamAtStart(resource, 1);
                if (inputStream ==
                    null) {
                    var stringMaker = new StringMaker();
                    ;
                    var index = resource.lastIndexOf('/');
                    ;
                    var resourcePath = resource.substring(index + 1);
                    ;
                    inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                    if (inputStream ==
                        null) {
                        resourcePath = resource.substring(index);
                        inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                        if (inputStream ==
                            null) {
                            var RES = "res";
                            ;
                            resourcePath = stringMaker.append(RES).append(resource.substring(index)).toString();
                            inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                            if (inputStream ==
                                null) {
                                stringMaker.delete(0, stringMaker.length());
                                resourcePath = stringMaker.append("/").append(RES).append(resource.substring(index)).toString();
                                inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                                var COLON = CommonSeps.getInstance().COLON;
                                ;
                                if (inputStream ==
                                    null) {
                                    stringMaker.delete(0, stringMaker.length());
                                    resourcePath = stringMaker.append(RES).append(COLON).append(resource.substring(index)).toString();
                                    inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                                    if (inputStream ==
                                        null) {
                                        stringMaker.delete(0, stringMaker.length());
                                        resourcePath = stringMaker.append(RES).append(COLON).append(resource.substring(index + 1)).toString();
                                        inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                                        if (inputStream ==
                                            null) {
                                            var RESOURCE_STRING = "resource";
                                            ;
                                            stringMaker.delete(0, stringMaker.length());
                                            resourcePath = stringMaker.append(RESOURCE_STRING).append(COLON).append(resource.substring(index)).toString();
                                            inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                                            if (inputStream ==
                                                null) {
                                                stringMaker.delete(0, stringMaker.length());
                                                resourcePath = stringMaker.append(RESOURCE_STRING).append(COLON).append(resource.substring(index + 1)).toString();
                                                inputStream = resource..javaClass.getResourceAsStream(resourcePath);
                                                if (inputStream ==
                                                    null) {
                                                    stringMaker.delete(0, stringMaker.length());
                                                    throw new Exception(stringMaker.append("Unable to obtain: ").append(resource).toString());
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
    //@Throws(Exception.constructor)
    getResourceAsStreamAtStart(resource, startIndex) {
        var stringMaker = new StringMaker();
        ;
        var index = resource.indexOf(CommonSeps.getInstance().COLON);
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
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
    addResource(resource, value) {
    }
}
ResourceUtil.instance = new ResourceUtil();
