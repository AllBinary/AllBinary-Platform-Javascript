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
import { Movement } from './Movement.js';
//not GWT import const Movement = globalThis.org.allbinary.physics.movement.Movement;
export class NoMovementFactory extends Object {
    constructor() {
        super(...arguments);
        this.movement = new Movement();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoMovementFactory.instance;
    }
    getMovmentInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.movement;
    }
}
NoMovementFactory.instance = new NoMovementFactory();
