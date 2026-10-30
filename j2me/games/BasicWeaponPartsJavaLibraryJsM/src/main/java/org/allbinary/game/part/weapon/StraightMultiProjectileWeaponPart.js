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
//not GWT import const Animation
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponLayerCircularPool
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
//not GWT import const ScoreableInterface
import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
//not GWT import const RelativeRelationship
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayerManager
import { NoDecimalTrigTable } from '../../../../../org/allbinary/math/NoDecimalTrigTable.js';
//not GWT import const NoDecimalTrigTable
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicWeaponPart } from './BasicWeaponPart.js';
//sameFolderImports - not GWT import - same folder const BasicWeaponPart
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
        let sourceLayerInterface = this.getOwnerLayerInterface();
        ;
        let reducedWidth = (sourceLayerInterface.getWidth() * 8 / 10);
        ;
        let halfWidth = (reducedWidth >> 1);
        ;
        let x = this.relativeRelationship.getX();
        ;
        let y = this.relativeRelationship.getY();
        ;
        let sine = 0;
        ;
        let beamX = 0;
        ;
        let cosine = 0;
        ;
        let beamY = 0;
        ;
        let weaponLayer;
        ;
        let increment = globalThis.Math.trunc(reducedWidth / (this.total - 1));
        ;
        let next = -halfWidth;
        ;
        for (let index = 0; index < this.total; index++) {
            sine = (next * this.noDecimalTrigTable.sin(globalThis.Math.trunc(angle)));
            beamX = globalThis.Math.trunc((sine / this.noDecimalTrigTable.SCALE));
            cosine = (next * this.noDecimalTrigTable.cos(globalThis.Math.trunc(angle)));
            beamY = -globalThis.Math.trunc((cosine / this.noDecimalTrigTable.SCALE));
            weaponLayer = this.weaponLayerCircularStaticPool.getInstanceWeaponLayer(sourceLayerInterface, x + beamX, y + beamY, 0, globalThis.Math.trunc(angle), globalThis.Math.trunc(otherAngle), weaponProperties, scoreableInterface);
            allbinaryLayerManager.append(weaponLayer);
            next += increment;
        }
    }
}
