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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Direction } from './Direction.js';
//not GWT import - same folder const Direction = globalThis.org.allbinary.direction.Direction;
export class DirectionFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DirectionFactory.instance;
    }
    constructor() {
        super();
        this.NAME = "DIRECTION";
        this.LEFT = new Direction(CommonPhoneStrings.getInstance().LEFT, "WEST", 0, 1);
        this.RIGHT = new Direction(CommonPhoneStrings.getInstance().RIGHT, "EAST", 1, 0);
        this.DOWN = new Direction(CommonPhoneStrings.getInstance().DOWN, "SOUTH", 2, 0);
        this.UP = new Direction(CommonPhoneStrings.getInstance().UP, "NORTH", 3, 0);
        this.NOT_BORDERED_WITH = new Direction("NOT_BORDERED_WITH", "NOT_BORDERED_WITH", 8, 0);
        this.NO_DIRECTION = new Direction("NO_DIRECTION", "NO_DIRECTION", 9, 0);
        this.TOP = new Direction("TOP", "TOP", 10, 0);
        this.BOTTOM = new Direction("BOTTOM", "BOTTOM", 11, 0);
        this.ALL_DIRECTION = new Direction("ALL_DIRECTION", "ALL_DIRECTION", 12, 0);
        var stringBuffer = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        this.UP_LEFT = new Direction("UP LEFT", stringBuffer.append(this.UP.getOtherName()).append(commonSeps.SPACE).append(this.LEFT.getOtherName()).toString(), 4, 0);
        stringBuffer.delete(0, stringBuffer.length());
        this.UP_RIGHT = new Direction("UP RIGHT", stringBuffer.append(this.UP.getOtherName()).append(commonSeps.SPACE).append(this.RIGHT.getOtherName()).toString(), 5, 0);
        stringBuffer.delete(0, stringBuffer.length());
        this.DOWN_LEFT = new Direction("DOWN LEFT", stringBuffer.append(this.DOWN.getOtherName()).append(commonSeps.SPACE).append(this.LEFT.getOtherName()).toString(), 6, 0);
        stringBuffer.delete(0, stringBuffer.length());
        this.DOWN_RIGHT = new Direction("DOWN RIGHT", stringBuffer.append(this.DOWN.getOtherName()).append(commonSeps.SPACE).append(this.RIGHT.getOtherName()).toString(), 7, 0);
    }
}
DirectionFactory.instance = new DirectionFactory();
