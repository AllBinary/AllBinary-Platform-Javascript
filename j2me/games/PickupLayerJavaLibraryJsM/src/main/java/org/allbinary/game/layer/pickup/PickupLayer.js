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
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
import { CollidableAlwaysPickupNeverCollideBehaviorFactory } from '../../../../../org/allbinary/game/collision/CollidableAlwaysPickupNeverCollideBehaviorFactory.js';
import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
import { MultiPlayerGameLayer } from '../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';
export class PickupLayer extends MultiPlayerGameLayer {
    constructor(name, remoteInfo, total, pickedUpLayerInterfaceFactoryInterface, animationInterface, rectangle, viewPosition) {
        super(remoteInfo, BasicGroupFactory.getInstance().NONE_ARRAY, name, rectangle, viewPosition);
        this.pickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        this.destroyed = false;
        this.animationInterface = NullAnimationFactory.getFactoryInstance().getInstance(0);
        //For kotlin this is before the body of the constructor.
        this.setCollidableInferface(CollidableAlwaysPickupNeverCollideBehaviorFactory.getInstance().createBehavior());
        this.setLayerWidth(10);
        this.setLayerHeight(10);
        this.init(pickedUpLayerInterfaceFactoryInterface, animationInterface);
    }
    init(pickedUpLayerInterfaceFactoryInterface, animationInterface) {
        this.pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface;
        this.animationInterface = animationInterface;
        this.setDestroyed(false);
    }
    initXYZ(x, y, z) {
        this.setPosition(x, y, z);
    }
    paint(graphics) {
        var viewPosition = this.getViewPosition();
        ;
        var viewX = viewPosition.getX();
        ;
        var viewY = viewPosition.getY();
        ;
        this.animationInterface.paintXY(graphics, viewX, viewY);
    }
    paintThreed(graphics) {
        var viewPosition = this.getViewPosition();
        ;
        var viewX = viewPosition.getX();
        ;
        var viewY = viewPosition.getY();
        ;
        this.animationInterface.paintThreedXYZ(graphics, viewX, viewY, 3);
    }
    getPickedUpLayerInterfaceFactoryInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pickedUpLayerInterfaceFactoryInterface;
    }
    setPickedUp() {
        this.setDestroyed(true);
    }
    isDestroyed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.destroyed;
    }
    setDestroyed(destroyed) {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            DestroyedLayerProcessor.getInstance().add(this);
        }
    }
    damage(damage, damageType) {
    }
    getDamage(damageType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    //@Throws(Exception.constructor)
    set(gl) {
        var openGLSurfaceChangedInterface = this.animationInterface;
        ;
        openGLSurfaceChangedInterface.set(gl);
    }
}
