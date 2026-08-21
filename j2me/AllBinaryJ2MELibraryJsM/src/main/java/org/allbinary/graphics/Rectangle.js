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
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
export class Rectangle extends Object {
    constructor(point, width, height) {
        super();
        this.point = point;
        this.width = width;
        this.height = height;
    }
    getPoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.point;
    }
    setPoint(point) {
        this.point = point;
    }
    getMaxX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.point.getX() + this.width;
    }
    getMaxY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.point.getY() + this.height;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.getPoint().toString());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(CommonLabels.getInstance().WIDTH_LABEL);
        stringBuffer.appendint(this.getWidth());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(CommonLabels.getInstance().HEIGHT_LABEL);
        stringBuffer.appendint(this.getHeight());
        stringBuffer.append(" MaxX: ");
        stringBuffer.appendint(this.getMaxX());
        stringBuffer.append(" MaxY: ");
        stringBuffer.appendint(this.getMaxY());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
