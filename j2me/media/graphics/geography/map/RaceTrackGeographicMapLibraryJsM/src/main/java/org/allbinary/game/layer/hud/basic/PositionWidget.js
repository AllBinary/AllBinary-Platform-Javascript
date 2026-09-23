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
//not GWT import const Graphics
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { BasicHud } from '../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicColor
//Current folder imports from return types, extended types, and scope (deduplicated)
//super.paint(graphics, positionString, currentPostString, offset2, offset);
export class PositionWidget extends BasicHud {
    static toString(position) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(position.toString());
        if (position == 1) {
            stringBuffer.append("st");
        }
        else if (position == 2) {
            stringBuffer.append("nd");
        }
        else if (position == 3) {
            stringBuffer.append("rd");
        }
        else {
            stringBuffer.append("th");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor(position, location, direction, basicColor) {
        super(location, direction, 2, basicColor);
        this.position = 0;
        this.positionString = StringUtil.getInstance().EMPTY_STRING;
        //For kotlin this is before the body of the constructor.
        this.updateMaxHeight = 10;
        this.updateMaxWidth = 40;
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.position;
    }
    set(position) {
        this.position = position;
        this.positionString = PositionWidget.toString(this.get());
    }
    paint(graphics) {
        super.paintString(graphics, this.positionString);
    }
}
