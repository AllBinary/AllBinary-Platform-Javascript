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
//not GWT import const DamageableInterface = globalThis.org.allbinary.game.combat.damage.DamageableInterface;
export class DamageableBaseBehavior extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DamageableBaseBehavior.instance;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    //@Throws(Exception.constructor)
    damage(damage, damageType) {
    }
    //@Throws(Exception.constructor)
    getDamage(damageType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 6000;
    }
}
DamageableBaseBehavior.instance = new DamageableBaseBehavior();
