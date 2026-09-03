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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Angle } from '../../../org/allbinary/math/Angle.js';
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DirectionFactory } from './DirectionFactory.js';
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
export class DirectionUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DirectionUtil.instance;
    }
    constructor() {
        super();
        this.directionArray = new Array(10);
        this.directionArray2 = new Array(10);
        var angleFactory = AngleFactory.getInstance();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        this.directionArray[directionFactory.LEFT.getValue()] = angleFactory.LEFT;
        this.directionArray[directionFactory.RIGHT.getValue()] = angleFactory.RIGHT;
        this.directionArray[directionFactory.UP.getValue()] = angleFactory.UP;
        this.directionArray[directionFactory.DOWN.getValue()] = angleFactory.DOWN;
        this.directionArray2[directionFactory.LEFT.getValue()] = angleFactory.LEFT;
        this.directionArray2[directionFactory.RIGHT.getValue()] = angleFactory.RIGHT;
        this.directionArray2[directionFactory.UP.getValue()] = angleFactory.UP;
        this.directionArray2[directionFactory.DOWN.getValue()] = angleFactory.DOWN;
    }
    getAngle(direction) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directionArray2[direction.getValue()];
    }
    getFrameAngle(direction) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.directionArray[direction.getValue()];
    }
}
DirectionUtil.instance = new DirectionUtil();
