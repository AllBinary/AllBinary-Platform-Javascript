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
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponLayerCircularPool = globalThis.org.allbinary.game.layer.weapon.WeaponLayerCircularPool;
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
//not GWT import const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;
import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
//not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicWeaponPart } from './BasicWeaponPart.js';
//not GWT import const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;
export class BasicProjectileWeaponPart extends BasicWeaponPart {
    static createBasicProjectileWeaponPart(animationInterface, weaponLayerCircularStaticPool) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicProjectileWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    }
    constructor(animationInterface, sourceLayerInterface, weaponLayerCircularStaticPool, weaponProperties, scoreableInterface, relativeRelationship) {
        super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        //For kotlin this is before the body of the constructor.
        this.weaponLayerCircularStaticPool = weaponLayerCircularStaticPool;
    }
    //@Throws(Exception.constructor)
    processScore(allbinaryLayerManager, angle, otherAngle, weaponProperties, scoreableInterface) {
        var weaponLayer = this.weaponLayerCircularStaticPool.getInstanceWeaponLayer(this.getOwnerLayerInterface(), this.relativeRelationship.getX(), this.relativeRelationship.getY(), this.relativeRelationship.getZ(), Math.round(angle), Math.round(otherAngle), weaponProperties, scoreableInterface);
        ;
        allbinaryLayerManager.append(weaponLayer);
    }
}
