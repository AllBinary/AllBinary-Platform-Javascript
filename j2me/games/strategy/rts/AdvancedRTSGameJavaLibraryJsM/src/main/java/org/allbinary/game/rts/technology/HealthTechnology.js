/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import const RTSInterface = globalThis.org.allbinary.game.layer.RTSInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UnitTechnologySingletonFactory } from './UnitTechnologySingletonFactory.js';
//not GWT import - same folder const UnitTechnologySingletonFactory = globalThis.org.allbinary.game.rts.technology.UnitTechnologySingletonFactory;
export class HealthTechnology extends Object {
    constructor(maxLevel) {
        super();
        this.level = 0;
        this.maxLevel = maxLevel;
    }
    isCompleted() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getPercentComplete() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.level;
    }
    getMaxLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxLevel;
    }
    getCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    downgrade() {
    }
    getDowngradeCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    isDowngradeable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getUpgradeCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (this.getLevel() * this.getLevel()) * 1000;
    }
    isUpgradeable() {
        if (this.getLevel() < this.getMaxLevel()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    upgrade() {
        this.level++;
        var unitTechnologySingletonFactory = UnitTechnologySingletonFactory.getInstance();
        ;
        unitTechnologySingletonFactory.setHealth(unitTechnologySingletonFactory.getHealth() + (this.getLevel() * 100));
    }
    isSelfUpgradeable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
