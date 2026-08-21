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
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { ConstructorUtil } from '../../../../../org/allbinary/logic/java/anyType/ConstructorUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { AbKeys } from '../../../../../org/allbinary/logic/system/security/AbKeys.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WebappClassLoaderInfo } from './WebappClassLoaderInfo.js';
import { AbeClassLoader } from './AbeClassLoader.js';
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
