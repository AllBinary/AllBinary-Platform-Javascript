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
import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GeographicMapCellPosition extends CellPosition {
    constructor(column, row, columns, rows, width, height) {
        super(column, row, columns, rows);
        //For kotlin this is before the body of the constructor.
        var x = this.getColumn() * width;
        ;
        var y = this.getRow() * height;
        ;
        var pointFactory = PointFactory.getInstance();
        ;
        this.point = pointFactory.createXY(x, y);
        this.midPoint = pointFactory.createXY(x + (width >> 1), y + (height >> 1));
    }
    getPoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.point;
    }
    getMidPoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.midPoint;
    }
    setMidPoint(midPoint) {
        this.midPoint = midPoint;
    }
}
