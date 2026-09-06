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
//not GWT import const Constructor = globalThis.java.lang.reflect.Constructor;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { ConstructorUtil } from '../../../../../org/allbinary/logic/java/anyType/ConstructorUtil.js';
//not GWT import const ConstructorUtil = globalThis.org.allbinary.logic.java.anyType.ConstructorUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { AbKeys } from '../../../../../org/allbinary/logic/system/security/AbKeys.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WebappClassLoaderInfo } from './WebappClassLoaderInfo.js';
//not GWT import - same folder const WebappClassLoaderInfo = globalThis.org.allbinary.logic.system.loader.WebappClassLoaderInfo;
import { AbeClassLoader } from './AbeClassLoader.js';
//not GWT import - same folder const AbeClassLoader = globalThis.org.allbinary.logic.system.loader.AbeClassLoader;
export class AbeFactory extends Object {
    static getInstance() {
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
    getInstance(abeClientInformation, className) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new this.constructor.name();
            ;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                this.logUtil.put("Failure for: " + className, this, "getInstance(classname)", e);
            }
            throw e;
        }
        //: 
        /* catch(e)
                    {
        
                                if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                                
                                            {
                                            this.logUtil!.put("Failure for: " +className, this, "getInstance(classname)", e);
            
        
                                            }
                                        
        
        
        
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return null;
            
        }
        */
    }
    //@Throws(LicensingException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getInstance(abeClientInformation, className, classes, params) {
        var constructor = null;
        ;
        try {
            var parent = WebappClassLoaderInfo.getLoader();
            ;
            if (this.useCustomLoader) {
                var loader = new AbeClassLoader(parent, AbKeys.getInstance().getKey(abeClientInformation, className));
                ;
                var myClass = loader.loadClass(className);
                ;
                constructor = myClass.getConstructor(classes);
                //if statement needs to be on the same line and ternary does not work the same way.
                return constructor.newInstance(params);
                ;
            }
            else {
                var myClass = parent.loadClass(className);
                ;
                constructor = myClass.getConstructor(classes);
                //if statement needs to be on the same line and ternary does not work the same way.
                return constructor.newInstance(params);
                ;
            }
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Failure for: ");
                stringBuffer.append(className);
                stringBuffer.append(CommonSeps.getInstance().SPACE);
                stringBuffer.append(ConstructorUtil.view(constructor, CommonSeps.getInstance().NEW_LINE));
                this.logUtil.put(stringBuffer.toString(), this, "getInstance(className,params)", e);
            }
            throw e;
        }
        //: 
        /* catch(e)
                    {
        
                                if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                                
                                            {
                                            
            var stringBuffer: StringMaker = new StringMaker();;
            
        stringBuffer!.append("Failure for: ");
            
        stringBuffer!.append(className);
            
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
            
        stringBuffer!.append(ConstructorUtil.view(constructor, CommonSeps.getInstance()!.NEW_LINE));
            
        this.logUtil!.put(stringBuffer!.toString(), this, "getInstance(className,params)", e);
            
        
                                            }
                                        
        
        
        
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return null;
            
        }
        */
    }
    //@Throws(LicensingException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    constructor(abeClientInformation, className) {
        this.logUtil = LogUtil.getInstance();
        this.useCustomLoader = false;
        try {
            var parent = WebappClassLoaderInfo.getLoader();
            ;
            if (this.useCustomLoader) {
                var loader = new AbeClassLoader(parent, AbKeys.getInstance().getKey(abeClientInformation, className));
                ;
                var c = loader.loadClass(className);
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return c;
            }
            else {
                var c = parent.loadClass(className);
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return c;
            }
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                this.logUtil.put("Failure for: " + className, this, "getClass(className)", e);
            }
            throw e;
        }
        //: 
        /* catch(e)
                    {
        
                                if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                                
                                            {
                                            this.logUtil!.put("Failure for: " +className, this, "getClass(className)", e);
            
        
                                            }
                                        
        
        
        
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return null;
            
        }
        */
    }
}
AbeFactory.instance = new AbeFactory();
