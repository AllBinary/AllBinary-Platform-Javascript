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
import { Object } from '../../../../../../../java/lang/Object.js';
import { WeaponLayerCircularPool } from '../../../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
//not GWT import const ViewPositionFactoryInterface = globalThis.org.allbinary.view.ViewPositionFactoryInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MineCountedPickedUpLayerInterfaceFactory } from './MineCountedPickedUpLayerInterfaceFactory.js';
//not GWT import const MineCountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.ag.layer.weapon.mine.MineCountedPickedUpLayerInterfaceFactory;
import { MineLayerFactory } from './MineLayerFactory.js';
//not GWT import const MineLayerFactory = globalThis.org.allbinary.game.ag.layer.weapon.mine.MineLayerFactory;
export class MineLayerCircularStaticPool extends Object {
    //@Throws(Exception.constructor)
    static init(viewPositionFactoryInterface) {
        MineCountedPickedUpLayerInterfaceFactory.init();
        MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL.initAllBinaryLayerCircularPool(new MineLayerFactory(viewPositionFactoryInterface), 20);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL;
    }
}
MineLayerCircularStaticPool.WEAPON_LAYER_CIRCULAR_STATIC_POOL = new WeaponLayerCircularPool();
