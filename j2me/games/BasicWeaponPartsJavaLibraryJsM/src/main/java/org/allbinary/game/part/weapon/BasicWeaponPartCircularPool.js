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
//not GWT import const AllBinaryLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicWeaponPart } from './BasicWeaponPart.js';
//not GWT import - same folder const BasicWeaponPartFactoryInterface
export class BasicWeaponPartCircularPool extends Object {
    constructor() {
        super(...arguments);
        this.basicWeaponPart = BasicWeaponPart.NULL_BASIC_WEAPON_PART;
    }
    //@Throws(Exception.constructor)
    init(basicWeaponPartFactoryInterface) {
        this.basicWeaponPart = basicWeaponPartFactoryInterface.getInstance();
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getInstance(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship) {
        this.basicWeaponPart.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicWeaponPart;
    }
}
BasicWeaponPartCircularPool.NULL_BASIC_WEAPON_PART_CIRCULAR_POOL = new BasicWeaponPartCircularPool();
