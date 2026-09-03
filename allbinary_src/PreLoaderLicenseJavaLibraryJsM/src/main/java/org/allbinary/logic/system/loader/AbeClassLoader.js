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
import { ClassLoader } from '../../../../../java/lang/ClassLoader.js';
import { ClassNotFoundException } from '../../../../../java/lang/ClassNotFoundException.js';
import { FileInputStream } from '../../../../../java/io/FileInputStream.js';
//not GWT import const Map = globalThis.java.util.Map;
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogBuffer } from '../../../../../org/allbinary/logic/communication/log/LogBuffer.js';
const LogBuffer = globalThis.org.allbinary.logic.communication.log.LogBuffer;
//not plain js import { LogFactory } from '../../../../../org/allbinary/logic/communication/log/LogFactory.js';
const LogFactory = globalThis.org.allbinary.logic.communication.log.LogFactory;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;
//not plain js import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AbCryptUtil } from '../../../../../org/allbinary/logic/system/security/AbCryptUtil.js';
//not GWT import const NoClassDefFoundError = globalThis.org.allbinary.logic.system.loader.NoClassDefFoundError;
export class AbeClassLoader extends ClassLoader {
    constructor(parent, key) {
        super(parent);
        this.logUtil = LogUtil.getInstance();
        this.abCryptUtil = AbCryptUtil.getInstance();
        this.LOAD_CLASS = "loadClass";
        this.ENCRYPTED_EXTENSION = AbPathData.getInstance().EXTENSION_SEP + "abc";
        //For kotlin this is before the body of the constructor.
        this.key = key;
        AbeClassLoader.PATH = org.allbinary.globals.URLGLOBALS.getWebappPath() + "WEB-INF/classes/";
    }
    findLoadedClass1(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbeClassLoader.classes.get(name);
    }
    //@Throws(ClassNotFoundException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    loadClass(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loadClass(name, false);
        ;
    }
    //@Throws(ClassNotFoundException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    loadClass(name, resolve) {
        var loadedWith = "findLoadedClass1";
        ;
        var logBuffer = new LogBuffer();
        ;
        try {
            var myClass = this.findLoadedClass1(name);
            ;
            if (myClass ==
                null) {
                try {
                    loadedWith = "super.loadClass";
                    var normalClass = super.loadClass(name, resolve);
                    ;
                    if (normalClass !=
                        null) {
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return normalClass;
                    }
                    //: 
                }
                catch (e) {
                    logBuffer.add(LogFactory.getInstance("Failed to Load Class: " + name + "\nwith: " + loadedWith, this, this.LOAD_CLASS, e));
                }
                //: 
                /* catch(e)
                            {
                logBuffer!.add(LogFactory.getInstance("Failed to Load Class: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS, e));
                    
                }
                */
                //: 
                /* catch(e)
                            {
                logBuffer!.add(LogFactory.getInstanceF("NoClassDefFoundError Failed Loaded Class: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS));
                    
                }
                */
                var classBytes = this.loadClassBytesFromFile(name);
                ;
                if (classBytes ==
                    null) {
                    throw new ClassNotFoundException("My Bytes not loaded for: " + name + "\nwith: " + "loadClassBytes");
                }
                myClass = defineClass(name, classBytes, 0, classBytes.length);
                if (myClass ==
                    null) {
                    throw new ClassNotFoundException("My Class Not Defineable for: " + name + "\nwith: " + "loadClassBytes");
                }
                AbeClassLoader.classes.put(name, myClass.prototype.constructor);
            }
            else {
                logBuffer.add(LogFactory.getInstanceF("Already Loaded: " + name + "\nwith: " + loadedWith, this, this.LOAD_CLASS));
            }
            resolveClass(myClass.prototype.constructor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return myClass;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                logBuffer.logAll();
                this.logUtil.put("Failure loading: " + name + "\nwith: " + loadedWith, this, this.LOAD_CLASS, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    loadClassBytesFromFile(name) {
        var ;
         in ;
        FileInputStream =
            null;
        ;
        var cname = StringUtil.getInstance().EMPTY_STRING;
        ;
        try {
            cname = AbeClassLoader.PATH + name.replace('.', AbPathData.getInstance().SEPARATORCHAR) + this.ENCRYPTED_EXTENSION;
                in ;
            new FileInputStream(cname);
            var decrypted = this.abCryptUtil.decrypt( in , this.key);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return decrypted;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                this.logUtil.put("(Before LogBuffer Output) Failure loading Encrypted: " + name + " File: " + cname, "AbeClassLoader", "loadClassBytes", e);
            }
            StreamUtil.getInstance().close( in );
        }
        //: 
        /* catch(e)
                    {
        
            var loadedWith: string = "loadClassBytes";;
            
        
                                if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                                
                                            {
                                            this.logUtil!.put("(Before LogBuffer Output) Failed to Loaded Class: " +name +" File: " +cname +"\nwith: " +loadedWith, this, "loadClassBytes", e);
            
        
                                            }
                                        
        }
        */
        //: 
        /* catch(e)
                    {
        
            var loadedWith: string = "loadClassBytes";;
            
        
                                if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                                
                                            {
                                            this.logUtil!.putF("(Before LogBuffer Output) NoClassDefFoundError Failed Loaded Class: " +name +" File: " +cname +"\nwith: " +loadedWith, this, "loadClassBytes");
            
        
                                            }
                                        
        }
        */
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    //@Throws(ClassNotFoundException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    oldLoadClass(name, resolve) {
        var loadedWith = "findLoadedClass1";
        ;
        try {
            var myClass = this.findLoadedClass1(name);
            ;
            if (myClass ==
                null) {
                try {
                    loadedWith = "super.loadClass";
                    var normalClass = super.loadClass(name, resolve);
                    ;
                    if (normalClass !=
                        null) {
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return normalClass;
                    }
                    //: 
                }
                catch (e) {
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADER)) {
                        this.logUtil.putF("Failed Loaded Class: " + name + " with: " + loadedWith, this, this.LOAD_CLASS);
                    }
                }
                //: 
                /* catch(e)
                            {
                
                                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                                        
                                                    {
                                                    this.logUtil!.putF("Failed Loaded Class: " +name +" with: " +loadedWith, this, this.LOAD_CLASS);
                    
                
                                                    }
                                                
                }
                */
                //: 
                /* catch(e)
                            {
                
                                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                                        
                                                    {
                                                    this.logUtil!.putF("Failed Loaded Class: " +name +" with: " +loadedWith, this, this.LOAD_CLASS);
                    
                
                                                    }
                                                
                }
                */
                loadedWith = "loadClassBytes";
                var classBytes = this.loadClassBytesFromFile(name);
                ;
                if (classBytes ==
                    null) {
                    throw new ClassNotFoundException("Bytes not loaded for: " + name);
                }
                myClass = defineClass(name, classBytes, 0, classBytes.length);
                if (myClass ==
                    null) {
                    throw new ClassNotFoundException("Class Not Defineable for: " + name);
                }
                AbeClassLoader.classes.put(name, myClass.prototype.constructor);
            }
            else {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADER)) {
                    this.logUtil.putF("Already Loaded: " + name + " with: " + loadedWith, this, this.LOAD_CLASS);
                }
            }
            resolveClass(myClass.prototype.constructor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return myClass;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().LOADERERROR)) {
                this.logUtil.put("Failure loading: " + name, "AbeClassLoader", this.LOAD_CLASS, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
}
AbeClassLoader.classes = StdUtil.getInstance().createHashMap();
