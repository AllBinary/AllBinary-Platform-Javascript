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
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WeaponLayer } from './WeaponLayer.js';
//not GWT import const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;
import { CollidableDamageWeaponBehavior } from './CollidableDamageWeaponBehavior.js';
//not GWT import const CollidableDamageWeaponBehavior = globalThis.org.allbinary.game.layer.weapon.CollidableDamageWeaponBehavior;
export class DamageWeaponLayer extends WeaponLayer {
    constructor(name, remoteInfo, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition, username, actorSessionId, id, multiPlayerType) {
        super(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
        //For kotlin this is before the body of the constructor.
        this.setCollidableInferface(new CollidableDamageWeaponBehavior(true));
    }
}
