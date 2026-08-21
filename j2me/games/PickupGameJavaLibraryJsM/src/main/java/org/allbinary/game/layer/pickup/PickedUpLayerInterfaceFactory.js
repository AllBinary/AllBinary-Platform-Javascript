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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PickedUpLayerInterfaceFactoryBase } from './PickedUpLayerInterfaceFactoryBase.js';
export class PickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactoryBase {
    constructor(pickeUpLayerType, iconLayer, animationInterface) {
        super();
        this.pickedUpLayerType = pickeUpLayerType;
        this.animationInterface = animationInterface;
        this.iconLayer = iconLayer;
    }
    getIconLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.iconLayer;
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
    getPickedUpLayerType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pickedUpLayerType;
    }
}
