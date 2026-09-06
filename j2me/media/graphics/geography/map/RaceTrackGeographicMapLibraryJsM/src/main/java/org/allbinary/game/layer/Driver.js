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
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Aggression } from './Aggression.js';
//not GWT import - same folder const Aggression = globalThis.org.allbinary.game.layer.Aggression;
export class Driver extends Object {
    constructor(turnSpeed, trackPathSelectionSkill, aggression) {
        super();
        this.turnSpeed = SmallIntegerSingletonFactory.getInstance().getAt(0);
        this.trackPathSelectionSkill = SmallIntegerSingletonFactory.getInstance().getAt(0);
        this.setTurnSpeed(turnSpeed);
        this.setTrackPathSelectionSkill(trackPathSelectionSkill);
        this.aggression = aggression;
    }
    getTurnSpeed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.turnSpeed;
    }
    setTurnSpeed(turnSpeed) {
        this.turnSpeed = turnSpeed;
    }
    getTrackPathSelectionSkill() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.trackPathSelectionSkill;
    }
    setTrackPathSelectionSkill(trackPathSelectionSkill) {
        this.trackPathSelectionSkill = trackPathSelectionSkill;
    }
    getAggression() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.aggression;
    }
    setAggression(aggression) {
        this.aggression = aggression;
    }
}
Driver.NULL_DRIVER = new Driver(SmallIntegerSingletonFactory.getInstance().getAt(0), SmallIntegerSingletonFactory.getInstance().getAt(0), new Aggression(SmallIntegerSingletonFactory.getInstance().getAt(0), SmallIntegerSingletonFactory.getInstance().getAt(0), SmallIntegerSingletonFactory.getInstance().getAt(0)));
