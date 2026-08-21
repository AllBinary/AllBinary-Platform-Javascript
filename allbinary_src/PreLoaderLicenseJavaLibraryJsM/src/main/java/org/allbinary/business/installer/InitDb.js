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
//Current folder imports from return types, extended types, and scope (deduplicated)
//Warning you must have sql root access
export class InitDb extends Object {
    constructor() {
        super();
        this.METHOD_CALL_GET_HOST_NAME = "getHostName";
        this.METHOD_CALL_ADD_USERS = "addUsers";
        this.METHOD_CALL_ADD_DATABASES = "addDatabases";
        this.METHOD_CALL_ADD_TABLES = "addTables";
        this.METHOD_CALL_TEMP_MAIN_PATH = "useTemporaryMainPath";
        this.METHOD_CALL_MAIN_PATH = "useNormalMainPath";
    }
    constructor(dbConnectionInfo) {
        super();
        this.METHOD_CALL_GET_HOST_NAME = "getHostName";
        this.METHOD_CALL_ADD_USERS = "addUsers";
        this.METHOD_CALL_ADD_DATABASES = "addDatabases";
        this.METHOD_CALL_ADD_TABLES = "addTables";
        this.METHOD_CALL_TEMP_MAIN_PATH = "useTemporaryMainPath";
        this.METHOD_CALL_MAIN_PATH = "useNormalMainPath";
    }
    setHelper(anyType = {}) {
        this.anyType = anyType;
    }
    getHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.anyType;
    }
    getHostName() {
        try {
            var dynamicClass = this.anyType.constructor;
            ;
            var method = dynamicClass.getMethod(this.METHOD_CALL_GET_HOST_NAME, null);
            ;
            var result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    addUsers() {
        try {
            var dynamicClass = this.anyType.constructor;
            ;
            var method = dynamicClass.getMethod(this.METHOD_CALL_ADD_USERS, null);
            ;
            var result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    addDatabases() {
        try {
            var dynamicClass = this.anyType.constructor;
            ;
            var method = dynamicClass.getMethod(this.METHOD_CALL_ADD_DATABASES, null);
            ;
            var result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    addTables() {
        try {
            var dynamicClass = this.anyType.constructor;
            ;
            var method = dynamicClass.getMethod(this.METHOD_CALL_ADD_TABLES, null);
            ;
            var result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    useTemporaryMainPath() {
        try {
            var dynamicClass = this.anyType.constructor;
            ;
            var method = dynamicClass.getMethod(this.METHOD_CALL_TEMP_MAIN_PATH, null);
            ;
            var result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    useNormalMainPath() {
        try {
            var dynamicClass = this.anyType.constructor;
            ;
            var method = dynamicClass.getMethod(this.METHOD_CALL_MAIN_PATH, null);
            ;
            var result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
