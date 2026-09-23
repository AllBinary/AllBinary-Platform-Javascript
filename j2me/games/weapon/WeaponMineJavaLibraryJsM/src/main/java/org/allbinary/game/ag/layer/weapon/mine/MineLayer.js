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
import { DropWeaponSound } from '../../../../../../../org/allbinary/ag/weapon/media/audio/DropWeaponSound.js';
//not GWT import const DropWeaponSound
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory
import { SimpleWeaponLayer } from '../../../../../../../org/allbinary/game/layer/weapon/SimpleWeaponLayer.js';
//not GWT import const SimpleWeaponLayer
import { RemoteInfo } from '../../../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo
import { PointFactory } from '../../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const AllBinaryLayer
import { SecondaryPlayerQueueFactory } from '../../../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory
import { NoMovementFactory } from '../../../../../../../org/allbinary/physics/movement/NoMovementFactory.js';
//not GWT import const ViewPositionBase
import { ViewPositionEventHandler } from '../../../../../../../org/allbinary/view/event/ViewPositionEventHandler.js';
//not GWT import const ViewPositionEventHandler
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MineWeaponResources } from './MineWeaponResources.js';
//not GWT import - same folder const MineWeaponResources
export class MineLayer extends SimpleWeaponLayer {
    constructor(viewPosition) {
        super(MineLayer.NAME, RemoteInfo.REMOTE_INFO, -1, NoMovementFactory.getInstance().getMovmentInstance(), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(MineWeaponResources.getInstance().RESOURCE).getInstance(0), SimpleWeaponLayer.createDestroyed(), new Rectangle(PointFactory.getInstance().ZERO_ZERO, 10, 10), viewPosition);
        this.viewPositionEventHandler = ViewPositionEventHandler.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    initXYZ(x, y, z) {
        this.setPosition(x + 5, y + 5, z);
        this.viewPositionEventHandler.addListener(this);
        SecondaryPlayerQueueFactory.getInstance().add(DropWeaponSound.getInstance());
    }
    damage(damage, damageType) {
        this.totalDamage = this.getInitDamage() + 1;
    }
    getDamage(damageType) {
        super.getDamage(damageType);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInitDamage();
        ;
    }
    setDestroyed(destroyed) {
        super.setDestroyed(destroyed);
        if (this.isDestroyed()) {
            this.viewPositionEventHandler.removeListener(this);
        }
    }
}
MineLayer.NAME = "MineLayer";
