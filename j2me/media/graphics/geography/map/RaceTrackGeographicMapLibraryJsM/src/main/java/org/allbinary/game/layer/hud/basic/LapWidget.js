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
export class LapWidget extends BasicHud {
    constructor(location, direction, basicColor) {
        super(location, direction, 2, basicColor);
        this.LAP_STR = "Lap ";
        this.OF_STR = " of ";
        this.string = StringUtil.getInstance().EMPTY_STRING;
        //For kotlin this is before the body of the constructor.
        this.updateMaxHeight = 15;
        this.updateMaxWidth = 40;
    }
    update(lapInfo) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.delete(0, stringBuffer.length());
        stringBuffer.append(this.LAP_STR);
        stringBuffer.appendint(lapInfo.getCurrentLap());
        stringBuffer.append(this.OF_STR);
        stringBuffer.appendint(lapInfo.getTotalLaps());
        this.string = stringBuffer.toString();
    }
    paint(graphics) {
        super.paintString(graphics, this.string);
    }
}
