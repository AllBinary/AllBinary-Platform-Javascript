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
//not plain js import { NoDecimalTrigTable } 
const NoDecimalTrigTable = globalThis.org.allbinary.math.NoDecimalTrigTable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicWeaponPart } from './BasicWeaponPart.js';
//not GWT import - same folder const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;
export class StraightMultiProjectileWeaponPart extends BasicWeaponPart {
    static createStraightMultiProjectileWeaponPart(animationInterface, weaponLayerCircularStaticPool) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StraightMultiProjectileWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, 2, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    }
    constructor(animationInterface, sourceLayerInterface, weaponLayerCircularStaticPool, total, weaponProperties, scoreableInterface, relativeRelationship) {
        super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        this.noDecimalTrigTable = NoDecimalTrigTable.getInstance();
        //For kotlin this is before the body of the constructor.
        this.total = total;
        this.weaponLayerCircularStaticPool = weaponLayerCircularStaticPool;
    }
    //@Throws(Exception.constructor)
    processScore(allbinaryLayerManager, angle, otherAngle, weaponProperties, scoreableInterface) {
        var sourceLayerInterface = this.getOwnerLayerInterface();
        ;
        var reducedWidth = (sourceLayerInterface.getWidth() * 8 / 10);
        ;
        var halfWidth = (reducedWidth >> 1);
        ;
        var x = this.relativeRelationship.getX();
        ;
        var y = this.relativeRelationship.getY();
        ;
        var sine = 0;
        ;
        var beamX = 0;
        ;
        var cosine = 0;
        ;
        var beamY = 0;
        ;
        var weaponLayer;
        ;
        var increment = reducedWidth / (this.total - 1);
        ;
        var next = -halfWidth;
        ;
        for (var index = 0; index < this.total; index++) {
            sine = (next * this.noDecimalTrigTable.sin(Math.round(angle)));
            beamX = Math.round((sine / this.noDecimalTrigTable.SCALE));
            cosine = (next * this.noDecimalTrigTable.cos(Math.round(angle)));
            beamY = -Math.round((cosine / this.noDecimalTrigTable.SCALE));
            weaponLayer = this.weaponLayerCircularStaticPool.getInstanceWeaponLayer(sourceLayerInterface, x + beamX, y + beamY, 0, Math.round(angle), Math.round(otherAngle), weaponProperties, scoreableInterface);
            allbinaryLayerManager.append(weaponLayer);
            next += increment;
        }
    }
}
