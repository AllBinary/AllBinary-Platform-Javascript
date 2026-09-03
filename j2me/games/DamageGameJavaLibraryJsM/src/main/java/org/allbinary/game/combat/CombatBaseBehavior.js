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
import { DamageableBaseBehavior } from '../../../../org/allbinary/game/combat/damage/DamageableBaseBehavior.js';
//not GWT import const DamageableBaseBehavior = globalThis.org.allbinary.game.combat.damage.DamageableBaseBehavior;
import { DestroyableBaseBehavior } from '../../../../org/allbinary/game/combat/destroy/DestroyableBaseBehavior.js';
//not GWT import const DestroyableBaseBehavior = globalThis.org.allbinary.game.combat.destroy.DestroyableBaseBehavior;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CombatBaseBehavior extends Object {
    constructor(damageableBaseBehavior, destroyableBaseBehavior) {
        super();
        this.readyForExplosion = false;
        this.damageableBaseBehavior = damageableBaseBehavior;
        this.destroyableBaseBehavior = destroyableBaseBehavior;
    }
    getDamageableBaseBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.damageableBaseBehavior;
    }
    getDestroyableBaseBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.destroyableBaseBehavior;
    }
    isReadyForExplosion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.readyForExplosion;
    }
    setReadyForExplosion(readyForExplosion) {
        this.readyForExplosion = readyForExplosion;
    }
}
CombatBaseBehavior.NULL_COMBAT_BEHAVIOR = new CombatBaseBehavior(DamageableBaseBehavior.getInstance(), DestroyableBaseBehavior.getInstance());
