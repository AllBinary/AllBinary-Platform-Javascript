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
import { Object } from '../../../java/lang/Object.js';
//not plain js import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { MathUtil } from '../../../org/allbinary/logic/math/MathUtil.js';
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LayerDistanceUtil extends Object {
    constructor() {
        super(...arguments);
        this.mathUtil = MathUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerDistanceUtil.instance;
    }
    getDistance(layerInterface, layerInterface2) {
        var dx = (layerInterface.getXP() + layerInterface.getHalfWidth()) - (layerInterface2.getXP() + layerInterface2.getHalfWidth());
        ;
        var dy = (layerInterface.getYP() + layerInterface.getHalfHeight()) - (layerInterface2.getYP() + layerInterface2.getHalfHeight());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(this.mathUtil.sqrt((dx * dx) + (dy * dy)));
    }
    getDistance3D(layerInterface, layerInterface2) {
        var dx = (layerInterface.getXP() + layerInterface.getHalfWidth()) - (layerInterface2.getXP() + layerInterface2.getHalfWidth());
        ;
        var dy = (layerInterface.getYP() + layerInterface.getHalfHeight()) - (layerInterface2.getYP() + layerInterface2.getHalfHeight());
        ;
        var dz = (layerInterface.getZP() + layerInterface.getHalfDepth()) - (layerInterface2.getZP() + layerInterface2.getHalfDepth());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(this.mathUtil.sqrt((dx * dx) + (dy * dy) + (dz * dz)));
    }
    getDistanceAt(layerInterface, point) {
        var dx = layerInterface.getXP() - point.getX();
        ;
        var dy = layerInterface.getYP() - point.getY();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(this.mathUtil.sqrt((dx * dx) + (dy * dy)));
    }
}
LayerDistanceUtil.instance = new LayerDistanceUtil();
