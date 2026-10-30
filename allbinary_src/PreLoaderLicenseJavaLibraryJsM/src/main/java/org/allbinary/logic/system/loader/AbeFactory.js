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
//not GWT import const Constructor
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { ConstructorUtil } from '../../../../../org/allbinary/logic/java/anyType/ConstructorUtil.js';
//not GWT import const ConstructorUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { AbKeys } from '../../../../../org/allbinary/logic/system/security/AbKeys.js';
//not GWT import const AbeClientInformationInterface
import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WebappClassLoaderInfo } from './WebappClassLoaderInfo.js';
//sameFolderImports - not GWT import - same folder const WebappClassLoaderInfo
import { AbeClassLoader } from './AbeClassLoader.js';
//sameFolderImports - not GWT import - same folder const AbeClassLoader
export class AbeFactory extends Object {
    static getInstance(...args) {
        if (args.length === 0)
            return this.getInstance$overload1();
        if (args.length === 2 && typeof args[1] === 'string')
            return this.getInstance$overload2(args[0], args[1]);
        if (args.length === 4 && typeof args[1] === 'string')
            return this.getInstance$overload3(args[0], args[1], args[2], args[3]);
        throw new TypeError('No matching overload: getInstance');
    }
    static getInstance$overload1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbeFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.useCustomLoader = false;
    }
    //@Throws(LicensingException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getInstance$overload2(abeClientInformation, className) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new this.constructor.name();
            ;
        }
        catch (caught) {
            if (caught instanceof LicensingException) {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                    this.logUtil.put("Failure for: " + className, this, "getInstance(classname)", e);
                }
                throw e;
            }
            else {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                    this.logUtil.put("Failure for: " + className, this, "getInstance(classname)", e);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return null;
            }
        }
    }
    //@Throws(LicensingException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getInstance$overload3(abeClientInformation, className, classes, params) {
        let constructor = null;
        ;
        try {
            let parent = WebappClassLoaderInfo.getLoader();
            ;
            if (this.useCustomLoader) {
                let loader = new AbeClassLoader(parent, AbKeys.getInstance().getKey(abeClientInformation, className));
                ;
                let myClass = loader.loadClass(className);
                ;
                constructor = myClass.getConstructor(classes);
                //if statement needs to be on the same line and ternary does not work the same way.
                return constructor.newInstance(params);
                ;
            }
            else {
                let myClass = parent.loadClass(className);
                ;
                constructor = myClass.getConstructor(classes);
                //if statement needs to be on the same line and ternary does not work the same way.
                return constructor.newInstance(params);
                ;
            }
        }
        catch (caught) {
            if (caught instanceof LicensingException) {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Failure for: ");
                    stringBuffer.append(className);
                    stringBuffer.append(CommonSeps.getInstance().SPACE);
                    stringBuffer.append(ConstructorUtil.view(constructor, CommonSeps.getInstance().NEW_LINE));
                    this.logUtil.put(stringBuffer.toString(), this, "getInstance(className,params)", e);
                }
                throw e;
            }
            else {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Failure for: ");
                    stringBuffer.append(className);
                    stringBuffer.append(CommonSeps.getInstance().SPACE);
                    stringBuffer.append(ConstructorUtil.view(constructor, CommonSeps.getInstance().NEW_LINE));
                    this.logUtil.put(stringBuffer.toString(), this, "getInstance(className,params)", e);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return null;
            }
        }
    }
    //@Throws(LicensingException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    constructor(abeClientInformation, className) {
        this.logUtil = LogUtil.getInstance();
        this.useCustomLoader = false;
        try {
            let parent = WebappClassLoaderInfo.getLoader();
            ;
            if (this.useCustomLoader) {
                let loader = new AbeClassLoader(parent, AbKeys.getInstance().getKey(abeClientInformation, className));
                ;
                let c = loader.loadClass(className);
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return c;
            }
            else {
                let c = parent.loadClass(className);
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return c;
            }
        }
        catch (caught) {
            if (caught instanceof LicensingException) {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                    this.logUtil.put("Failure for: " + className, this, "getClass(className)", e);
                }
                throw e;
            }
            else {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                    this.logUtil.put("Failure for: " + className, this, "getClass(className)", e);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return null;
            }
        }
    }
}
AbeFactory.instance = new AbeFactory();
