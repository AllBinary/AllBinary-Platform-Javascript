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
//not GWT import const Serializable
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicUserRoles } from './BasicUserRoles.js';
//sameFolderImports - not GWT import - same folder const BasicUserRoles
export class BasicUserRole extends Object {
    constructor(...args) {
        super();
        if (args.length === 4) {
            this.constructor$0(args[0], args[1], args[2], args[3]);
        }
        else if (args.length === 5) {
            this.constructor$1(args[0], args[1], args[2], args[3], args[4]);
        }
    }
    constructor$0(aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout) {
        this.constructor$1(aRole, aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout);
        //For kotlin this is before the body of the constructor.
    }
    constructor$1(aRole, aDisplayValue, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout) {
        this.m_int_RoleId = a_int_RoleId;
        this.role = aRole;
        this.displayValue = aDisplayValue;
        this.sessionTimeout = aSessionTimeout;
        this.sessionInactivityTimeout = aSessionInactivityTimeout;
        BasicUserRoles.getInstance().roleVector.add(this);
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
