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
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
import { AllBinaryLayerCircularPool } from '../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
//not GWT import - same folder const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;
export class WeaponLayerCircularPool extends AllBinaryLayerCircularPool {
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    getInstanceWeaponLayer(sourceLayerInterface, x, y, z, angle, otherAngle, weaponProperties, scoreable) {
        var weaponLayer = super.getNextInstance();
        ;
        weaponLayer.initXYZ(x, y, z);
        weaponLayer.init(sourceLayerInterface, angle, otherAngle, weaponProperties, scoreable);
        //if statement needs to be on the same line and ternary does not work the same way.
        return weaponLayer;
    }
}
