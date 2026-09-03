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
//not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
import { CollidableAlwaysPickupNeverCollideBehaviorFactory } from '../../../../../org/allbinary/game/collision/CollidableAlwaysPickupNeverCollideBehaviorFactory.js';
//not GWT import const CollidableAlwaysPickupNeverCollideBehaviorFactory = globalThis.org.allbinary.game.collision.CollidableAlwaysPickupNeverCollideBehaviorFactory;
import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
//not GWT import const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;
import { MultiPlayerGameLayer } from '../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
//not GWT import const PickupableInterface = globalThis.org.allbinary.game.layer.pickup.PickupableInterface;
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;
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
