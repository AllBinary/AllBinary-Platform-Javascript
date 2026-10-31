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
var _a, _b;
var _c;
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//import { Class } from '../../../../java/lang/Class.js';
const Class = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Class) !== null && _c !== void 0 ? _c : class {
});
//not GWT import const LicensingException
//Current folder imports from return types, extended types, and scope (deduplicated)
//Warning you must have sql root access
export class InitDb extends Object {
    constructor(...args) {
        super();
        this.METHOD_CALL_GET_HOST_NAME = "getHostName";
        this.METHOD_CALL_ADD_USERS = "addUsers";
        this.METHOD_CALL_ADD_DATABASES = "addDatabases";
        this.METHOD_CALL_ADD_TABLES = "addTables";
        this.METHOD_CALL_TEMP_MAIN_PATH = "useTemporaryMainPath";
        this.METHOD_CALL_MAIN_PATH = "useNormalMainPath";
        if (args.length === 0) {
            this.constructor$0();
        }
        else if (args.length === 1) {
            this.constructor$1(args[0]);
        }
    }
    constructor$0() {
    }
    constructor$1(dbConnectionInfo) {
    }
    setHelper(anyType) {
        this.anyType = anyType;
    }
    getHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.anyType;
    }
    getHostName() {
        try {
            let dynamicClass = this.anyType.constructor;
            ;
            let method = dynamicClass.getMethod(this.METHOD_CALL_GET_HOST_NAME, null);
            ;
            let result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return null;
            }
        }
    }
    addUsers() {
        try {
            let dynamicClass = this.anyType.constructor;
            ;
            let method = dynamicClass.getMethod(this.METHOD_CALL_ADD_USERS, null);
            ;
            let result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
    addDatabases() {
        try {
            let dynamicClass = this.anyType.constructor;
            ;
            let method = dynamicClass.getMethod(this.METHOD_CALL_ADD_DATABASES, null);
            ;
            let result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
    addTables() {
        try {
            let dynamicClass = this.anyType.constructor;
            ;
            let method = dynamicClass.getMethod(this.METHOD_CALL_ADD_TABLES, null);
            ;
            let result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
    useTemporaryMainPath() {
        try {
            let dynamicClass = this.anyType.constructor;
            ;
            let method = dynamicClass.getMethod(this.METHOD_CALL_TEMP_MAIN_PATH, null);
            ;
            let result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
    useNormalMainPath() {
        try {
            let dynamicClass = this.anyType.constructor;
            ;
            let method = dynamicClass.getMethod(this.METHOD_CALL_MAIN_PATH, null);
            ;
            let result = method.invoke(this.anyType, null);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result.valueOf();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
}
