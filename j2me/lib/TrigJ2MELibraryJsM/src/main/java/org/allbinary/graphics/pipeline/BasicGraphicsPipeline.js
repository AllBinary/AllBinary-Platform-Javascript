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
//not GWT import const GPoint
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const Angle
import { NoDecimalTrigTable } from '../../../../org/allbinary/math/NoDecimalTrigTable.js';
//not GWT import const NoDecimalTrigTable
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicGraphicsPipeline extends Object {
    constructor(points) {
        super();
        this.noDecimalTrigTable = NoDecimalTrigTable.getInstance();
        this.pointBasicArrayList = points;
    }
    setInitMatrix(points) {
        this.pointBasicArrayList = points;
    }
    createMatrix() {
    }
    //@Throws(Exception.constructor)
    translate(x, y) {
        var newBasicArrayList = new BasicArrayListD();
        ;
        var size = this.pointBasicArrayList.size();
        ;
        var pointFactory = PointFactory.getInstance();
        ;
        var secondPoint;
        ;
        for (var index = 0; index < size; index++) {
            secondPoint = this.pointBasicArrayList.objectArray[index];
            if (secondPoint.getX() != 1000) {
                newBasicArrayList.add(pointFactory.createXY(secondPoint.getX() + x, secondPoint.getY() + y));
            }
            else {
                newBasicArrayList.add(secondPoint);
            }
        }
        this.pointBasicArrayList = newBasicArrayList;
    }
    //@Throws(Exception.constructor)
    rotateToAngle(angle) {
        this.rotate(Math.round(angle.getValue()));
    }
    //@Throws(Exception.constructor)
    rotate(angle) {
        var newBasicArrayList = new BasicArrayListD();
        ;
        var secondPoint;
        ;
        var y = 0;
        ;
        var secondX = 0;
        ;
        var secondY = 0;
        ;
        var point;
        ;
        var pointFactory = PointFactory.getInstance();
        ;
        var size = this.pointBasicArrayList.size();
        ;
        var sin = 0;
        ;
        var cos = 0;
        ;
        for (var index = 0; index < size; index++) {
            secondPoint = this.pointBasicArrayList.objectArray[index];
            if (secondPoint.getX() != 1000) {
                sin = this.noDecimalTrigTable.sin(angle);
                cos = this.noDecimalTrigTable.cos(angle);
                y = secondPoint.getY() * sin;
                secondX = (secondPoint.getX() * cos) - y;
                secondY = (secondPoint.getX() * sin) + (secondPoint.getY() * cos);
                point = pointFactory.createXY(Math.round(secondX) / 10000, Math.round(secondY) / 10000);
                newBasicArrayList.add(point);
            }
            else {
                newBasicArrayList.add(secondPoint);
            }
        }
        this.pointBasicArrayList = newBasicArrayList;
    }
    //@Throws(Exception.constructor)
    mirror(width) {
        var pointFactory = PointFactory.getInstance();
        ;
        var halfWidth = (width >> 1);
        ;
        var newBasicArrayList = new BasicArrayListD();
        ;
        var secondPoint;
        ;
        var newX = 0;
        ;
        var point;
        ;
        var size = this.pointBasicArrayList.size();
        ;
        for (var index = 0; index < size; index++) {
            secondPoint = this.pointBasicArrayList.objectArray[index];
            if (secondPoint.getX() != 1000) {
                newX = 0;
                if (secondPoint.getX() > halfWidth) {
                    newX = halfWidth - (secondPoint.getX() - halfWidth);
                }
                else {
                    newX = halfWidth + (halfWidth - secondPoint.getX());
                }
                point = pointFactory.createXY(newX, secondPoint.getY());
                newBasicArrayList.add(point);
            }
            else {
                newBasicArrayList.add(secondPoint);
            }
        }
        this.pointBasicArrayList = newBasicArrayList;
    }
    getMatrix() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pointBasicArrayList;
    }
}
