/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { AllBinaryLayer } from '../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ViewPositionBase } from './ViewPositionBase.js';
//not GWT import - same folder const ViewPositionBase
export class ViewPosition extends ViewPositionBase {
    static getInstanceD() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ViewPosition(0, 0, 0);
    }
    constructor(x, y, z) {
        super(x, y, z);
        this.allbinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        //For kotlin this is before the body of the constructor.
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.allbinaryLayer.getXP();
        ;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.allbinaryLayer.getYP();
        ;
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.allbinaryLayer.getZP();
        ;
    }
    getX2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getX() + this.allbinaryLayer.getWidth();
    }
    getY2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getY() + this.allbinaryLayer.getHeight();
    }
    getZ2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round((this.getZ() + this.allbinaryLayer.getDepth()));
    }
    setAllbinaryLayer(allbinaryLayer = {}) {
        this.allbinaryLayer = allbinaryLayer;
    }
}
