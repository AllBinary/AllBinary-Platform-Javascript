/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//sameFolderImports - not GWT import - same folder const BasicUserRole
export class BasicUserRoles extends Object {
    constructor() {
        super(...arguments);
        this.roleVector = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicUserRoles.instance;
    }
    //@Throws(Exception.constructor)
    getRole(role) {
        let roleVector = this.getAll();
        ;
        let size = roleVector.size();
        ;
        for (let index = 0; index < size; index++) {
            let userRole = roleVector.get(index);
            ;
            if (role.compareTo(userRole.toString()) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return userRole;
            }
        }
        throw new Exception("Unable to get role - Unknown Role");
    }
    getAll() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.roleVector;
    }
}
BasicUserRoles.instance = new BasicUserRoles();
