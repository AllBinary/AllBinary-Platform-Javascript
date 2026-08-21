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
import { Vector } from '../../../../../java/util/Vector.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicUserRoleFactory } from './BasicUserRoleFactory.js';
export class StoreRoleFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StoreRoleFactory.instance;
    }
    constructor() {
        super();
        this.roles = new Vector();
        this.subscriberRoles = new Vector();
        this.wholesaleRoles = new Vector();
        var basicUserRoleFactory = BasicUserRoleFactory.getInstance();
        ;
        this.roles.add(basicUserRoleFactory.CUSTOMER);
        this.roles.add(basicUserRoleFactory.SUBSCRIBERCUSTOMER);
        this.roles.add(basicUserRoleFactory.WHOLESALECUSTOMER);
        this.subscriberRoles.add(basicUserRoleFactory.SUBSCRIBERCUSTOMER);
        this.wholesaleRoles.add(basicUserRoleFactory.WHOLESALECUSTOMER);
    }
    getRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.roles;
    }
    getSubscriberRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.subscriberRoles;
    }
    getWholesaleRoles() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.wholesaleRoles;
    }
}
StoreRoleFactory.instance = new StoreRoleFactory();
