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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollidableBaseBehaviorFactory } from './CollidableBaseBehaviorFactory.js';
import { CollidableAlwaysPickupNeverCollideBehavior } from './CollidableAlwaysPickupNeverCollideBehavior.js';
export class CollidableAlwaysPickupNeverCollideBehaviorFactory extends CollidableBaseBehaviorFactory {
    constructor() {
        super(...arguments);
        this.instance = new CollidableAlwaysPickupNeverCollideBehavior();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollidableAlwaysPickupNeverCollideBehaviorFactory.instanceC;
    }
    createBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.instance;
    }
}
CollidableAlwaysPickupNeverCollideBehaviorFactory.instanceC = new CollidableAlwaysPickupNeverCollideBehaviorFactory();
