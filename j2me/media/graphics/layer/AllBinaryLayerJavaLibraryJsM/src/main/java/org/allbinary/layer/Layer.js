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
import { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.js';
import { CanvasStrings } from '../../../org/allbinary/graphics/displayable/CanvasStrings.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Layer extends Object {
    constructor(width, height) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.x = 0;
        this.y = 0;
        this.z = 3;
        this.width = 0;
        this.height = 0;
        this.visible = true;
        this.setLayerWidth(width);
        this.setLayerHeight(height);
    }
    setPosition(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    moveDXY(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    moveDXYZ(dx, dy, dz) {
        this.x += dx;
        this.y += dy;
        this.z += dz;
    }
    getXP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    getYP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y;
    }
    getZP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.z;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.width;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.height;
    }
    getDepth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    setVisible(visible) {
        this.visible = visible;
    }
    isVisible() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.visible;
    }
    paint(graphics) {
        var commonStrings = CommonStrings.getInstance();
        ;
        var canvasStrings = CanvasStrings.getInstance();
        ;
        this.logUtil.putF(commonStrings.NOT_IMPLEMENTED, this, canvasStrings.PAINT);
    }
    setLayerWidth(width) {
        if (width < 0) {
            throw new IllegalArgumentException();
        }
        this.width = width;
    }
    setLayerHeight(height) {
        if (height < 0) {
            throw new IllegalArgumentException();
        }
        this.height = height;
    }
    toStringAppend(stringBuffer) {
    }
}
Layer.ID = SmallIntegerSingletonFactory.getInstance().getAt(0);
