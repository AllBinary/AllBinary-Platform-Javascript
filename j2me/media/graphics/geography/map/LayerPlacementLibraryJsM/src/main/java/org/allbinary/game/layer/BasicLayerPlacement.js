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
import { Object } from '../../../../java/lang/Object.js';
export class BasicLayerPlacement extends Object {
    constructor(layerType, width, height) {
        super();
        this.layerType = layerType;
        this.width = width;
        this.height = height;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.width;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.height;
    }
    getLayerType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerType;
    }
    setLayerType(layerType) {
        this.layerType = layerType;
    }
}
