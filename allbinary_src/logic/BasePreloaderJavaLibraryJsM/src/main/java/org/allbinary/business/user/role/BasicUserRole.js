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
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const Serializable = globalThis.java.io.Serializable;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicUserRole extends Object {
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getRole(role) {
        var roleVector = BasicUserRole.getAll();
        ;
        var size = roleVector.size();
        ;
        for (var index = 0; index < size; index++) {
            var userRole = roleVector.get(index);
            ;
            if (role.compareTo(userRole.toString()) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return userRole;
            }
        }
        throw new Exception("Unable to get role - Unknown Role");
    }
    static getAll() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicUserRole.roleVector;
    }
    constructor(aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout) {
        this(aRole, aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout);
        //For kotlin this is before the body of the constructor.
    }
    constructor(aRole, aDisplayValue, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout) {
        super();
        this.m_int_RoleId = a_int_RoleId;
        this.role = aRole;
        this.displayValue = aDisplayValue;
        this.sessionTimeout = aSessionTimeout;
        this.sessionInactivityTimeout = aSessionInactivityTimeout;
        BasicUserRole.roleVector.add(this);
    }
    getRoleId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.m_int_RoleId;
    }
    getRole() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.role;
    }
    getSessionTimeout() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sessionTimeout;
    }
    getSessionInactivityTimeout() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sessionInactivityTimeout;
    }
    equals(basicUserRole) {
        if (this.getRoleId() == basicUserRole.getRoleId()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getRole();
        ;
    }
}
BasicUserRole.roleVector = new BasicArrayListD();
