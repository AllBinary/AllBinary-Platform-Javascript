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
import { BasicHud } from '../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
import { PrimitiveLongUtil } from '../../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LevelHudWidget extends BasicHud {
    //@Throws(Exception.constructor)
    static createHud(maxlevel, location, direction) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new LevelHudWidget(maxlevel, location, direction);
    }
    constructor(maxlevel, location, direction) {
        super(location, direction, 2, BasicColorFactory.getInstance().GREY);
        this.levelNumberCharArray = NullUtil.getInstance().NULL_CHAR_ARRAY;
        this.levelNumberTotalDigits = 0;
        this.offset = 0;
        //For kotlin this is before the body of the constructor.
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(1000);
        var LEVEL = "Lv ";
        ;
        this.levelString = LEVEL.split('');
        this.maxlevel = maxlevel;
        this.level = maxlevel;
        this.update();
        this.updateMaxHeight = 14;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.updateMaxWidth = font.getSize() * 4;
        this.offset = font.charsWidth(this.levelString, 0, this.levelString.length) + font.getSize();
        super.updateMeasurement(graphics);
    }
    update() {
        this.levelNumberCharArray = this.primitiveLongUtil.getCharArray(this.level);
        this.levelNumberTotalDigits = this.primitiveLongUtil.getCurrentTotalDigits();
    }
    setLevel(level) {
        this.level = level;
        this.update();
    }
    nextLevel() {
        this.level++;
        this.update();
    }
    previousLevel() {
        this.level--;
        if (this.level < 0) {
            this.level = 0;
        }
        this.update();
    }
    isComplete() {
        if (this.level <= this.maxlevel) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    paint(graphics) {
        super.paintDX(graphics, this.levelString, 0, this.levelString.length, this.levelNumberCharArray, 0, this.levelNumberTotalDigits, this.offset);
    }
    paintThreed(graphics) {
    }
}
