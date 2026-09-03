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
//not GWT import const HealthInterfaceCompositeInterface = globalThis.org.allbinary.game.health.HealthInterfaceCompositeInterface;
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
import { CountedLayerInterfaceFactoryPart } from '../../../../../org/allbinary/game/part/CountedLayerInterfaceFactoryPart.js';
//not GWT import const PartInterface = globalThis.org?.allbinary?.game?.part?.PartInterface;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const PickedUpLayerType = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerType;
import { PickedUpLayerTypeFactory } from './PickedUpLayerTypeFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;
export class PickupBehavior extends Object {
    static getNullInstance() {
        if (PickupBehavior.NULL_PICKUP_BEHAVIOR == NullUtil.getInstance().NULL_OBJECT) {
            PickupBehavior.NULL_PICKUP_BEHAVIOR = new PickupBehavior(CollidableCompositeLayer.getNullInstance(), 0);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return PickupBehavior.NULL_PICKUP_BEHAVIOR;
    }
    constructor(ownerLayerInterface, countedIndex) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.ownerLayerInterface = ownerLayerInterface;
        this.countedIndex = countedIndex;
    }
    doPickup(pickupProcessorInterface) {
        try {
            var healthInterfaceCompositeInterface = this.ownerLayerInterface;
            ;
            if (healthInterfaceCompositeInterface.getHealthInterface().isAlive()) {
                pickupProcessorInterface.process(this.ownerLayerInterface);
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "doPickup", e);
        }
    }
    doPickupLayer(pickupLayerInterface) {
        try {
            var pickedUpLayerInterfaceFactoryInterface = pickupLayerInterface.getPickedUpLayerInterfaceFactoryInterface();
            ;
            var pickedUpLayerType = pickedUpLayerInterfaceFactoryInterface.getPickedUpLayerType();
            ;
            var pickedUpLayerTypeFactory = PickedUpLayerTypeFactory.getInstance();
            ;
            if (pickedUpLayerType == pickedUpLayerTypeFactory.BEAM || pickedUpLayerType == pickedUpLayerTypeFactory.MINE || pickedUpLayerType == pickedUpLayerTypeFactory.PROJECTILE || pickedUpLayerType == pickedUpLayerTypeFactory.ENHANCEMENT) {
                this.add(pickedUpLayerInterfaceFactoryInterface);
            }
            else if (pickedUpLayerInterfaceFactoryInterface.getPickedUpLayerType() == pickedUpLayerTypeFactory.PART) {
                var collidableDestroyableDamageableLayer = this.ownerLayerInterface;
                ;
                collidableDestroyableDamageableLayer.addPart(pickedUpLayerInterfaceFactoryInterface);
            }
            else if (pickedUpLayerType == pickedUpLayerTypeFactory.NONE) {
            }
            else {
                var pickupProcessorInterface = pickedUpLayerInterfaceFactoryInterface;
                ;
                this.doPickup(pickupProcessorInterface);
            }
            pickupLayerInterface.setPickedUp();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, this, "doPickup", e);
        }
    }
    add(countedPickedUpLayerInterfaceFactoryInterface) {
        var partIndex = countedPickedUpLayerInterfaceFactoryInterface.getId() + this.countedIndex;
        ;
        this.addAt(countedPickedUpLayerInterfaceFactoryInterface, partIndex);
    }
    addAt(countedPickedUpLayerInterfaceFactoryInterface, partIndex) {
        var collidableDestroyableDamageableLayer = this.ownerLayerInterface;
        ;
        var countedLayerInterfaceFactory = collidableDestroyableDamageableLayer.getPartInterfaceArray()[partIndex];
        ;
        countedLayerInterfaceFactory.setTotal(countedLayerInterfaceFactory.getTotal() + countedPickedUpLayerInterfaceFactoryInterface.getTotal());
    }
    getFirstAvailableCountedLayerInterfaceFactory(pickedUpLayerTypeArray) {
        var collidableDestroyableDamageableLayer = this.ownerLayerInterface;
        ;
        var partInterfaceArray = collidableDestroyableDamageableLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var nextCountedLayerInterfaceFactory;
        ;
        var countedPickedUpLayerInterfaceFactory;
        ;
        for (var index = this.countedIndex; index < size; index++) {
            nextCountedLayerInterfaceFactory = collidableDestroyableDamageableLayer.getPartInterfaceArray()[index];
            countedPickedUpLayerInterfaceFactory = nextCountedLayerInterfaceFactory.getCountedPickedUpLayerInterfaceFactory();
            for (var index2 = pickedUpLayerTypeArray.length; --index2 >= 0;) {
                if (countedPickedUpLayerInterfaceFactory.getPickedUpLayerType() == pickedUpLayerTypeArray[index2]) {
                    if (nextCountedLayerInterfaceFactory.getTotal() > 0) {
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nextCountedLayerInterfaceFactory;
                    }
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    }
    //@Throws(Exception.constructor)
    getCountedLayerInterfaceFactoryForSlot(slotIndex) {
        var currentSlot = 0;
        ;
        var collidableDestroyableDamageableLayer = this.ownerLayerInterface;
        ;
        var partInterfaceArray = collidableDestroyableDamageableLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var nextCountedLayerInterfaceFactory;
        ;
        for (var index = this.countedIndex; index < size; index++) {
            nextCountedLayerInterfaceFactory = collidableDestroyableDamageableLayer.getPartInterfaceArray()[index];
            if (nextCountedLayerInterfaceFactory.getTotal() > 0) {
                if (currentSlot == slotIndex) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return nextCountedLayerInterfaceFactory;
                }
                else {
                    currentSlot++;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    }
    getCountedIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.countedIndex;
    }
}
PickupBehavior.NULL_PICKUP_BEHAVIOR = NullUtil.getInstance().NULL_OBJECT;
