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
import { CollisionType } from './CollisionType.js';
//not GWT import - same folder const CollisionType
export class CollisionTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.NONE = new CollisionType("None");
        this.DAMAGE = new CollisionType("Damage");
        this.PICKUP = new CollisionType("Pickup");
        this.COLLISION = new CollisionType("Collision");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollisionTypeFactory.SINGLETON;
    }
}
CollisionTypeFactory.SINGLETON = new CollisionTypeFactory();
