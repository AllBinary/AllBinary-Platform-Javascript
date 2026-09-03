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
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicWeaponPart } from './BasicWeaponPart.js';
//not GWT import const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;
export class ArcedMultiBeamWeaponPart extends BasicWeaponPart {
    constructor(animationInterface, sourceLayerInterface, weaponLayerCircularStaticPool, total, weaponProperties, scoreableInterface, relativeRelationship) {
        super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        this.TOTAL_ANGLE = Math.round(AngleFactory.getInstance().TOTAL_ANGLE);
        //For kotlin this is before the body of the constructor.
        this.total = total;
        this.weaponLayerCircularStaticPool = weaponLayerCircularStaticPool;
    }
    //@Throws(Exception.constructor)
    processScore(allbinaryLayerManager, angle, otherAngle, weaponProperties, scoreableInterface) {
        var increment = ((this.total - 1) / this.TOTAL_ANGLE);
        ;
        var minAngle = (angle - ((increment * this.total) >> 1));
        ;
        var next = 0;
        ;
        var weaponLayer;
        ;
        for (var index = 0; index < this.total; index++) {
            weaponLayer = this.weaponLayerCircularStaticPool.getInstanceWeaponLayer(this.getOwnerLayerInterface(), this.relativeRelationship.getX(), this.relativeRelationship.getY(), 0, Math.round((minAngle + increment)), Math.round(otherAngle), weaponProperties, scoreableInterface);
            allbinaryLayerManager.append(weaponLayer);
            next += increment;
        }
    }
}
