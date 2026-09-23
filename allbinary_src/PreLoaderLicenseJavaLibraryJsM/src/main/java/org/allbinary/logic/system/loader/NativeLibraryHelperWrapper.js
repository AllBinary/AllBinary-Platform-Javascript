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
import { System } from '../../../../../java/lang/System.js';
//not GWT import const Method
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NativeLibraryClassLoader } from './NativeLibraryClassLoader.js';
//not GWT import - same folder const NativeLibraryClassLoader
export class NativeLibraryHelperWrapper extends Object {
    constructor(libraryName) {
        super();
        this.setLibraryName(libraryName);
    }
    //@Throws(Exception.constructor)
    load() {
        var params = new Array(1);
        ;
        params[0] = this.getLibraryName();
        var classes = new Array(1);
        ;
        classes[0] = this.getLibraryName().constructor;
        this.loader = new NativeLibraryClassLoader(this.constructor.namegetClassLoader());
        var myClass = this.loader.loadClass("dynamic.NativeLibraryHelper");
        ;
        var constructor = myClass.getConstructor(classes);
        ;
        this.anyType = constructor.newInstance(params);
        var commonStrings = CommonStrings.getInstance();
        ;
        var method = this.anyType.constructor.name.getMethod(commonStrings.LOAD, null);
        ;
        method.invoke(this.anyType, null);
    }
    unload() {
        this.anyType =
            null;
        this.loader =
            null;
        System.gc();
        System.gc();
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return "Library: " + this.getLibraryName();
    }
    getLibraryName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.libraryName;
    }
    setLibraryName(libraryName) {
        this.libraryName = libraryName;
    }
}
