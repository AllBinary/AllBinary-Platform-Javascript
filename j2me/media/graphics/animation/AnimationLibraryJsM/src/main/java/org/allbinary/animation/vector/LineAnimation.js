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
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const PositionInterface
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LineAnimation extends Animation {
    constructor(basicColor) {
        super();
        this.newLine = new Array(2).fill(null).map(() => new Array(2).fill(0));
        this.tempLine = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY;
        this.line = new Array(2).fill(null).map(() => new Array(2).fill(0));
        this.setBasicColorP(basicColor);
    }
    init(x, y) {
        this.newLine[0][0] = x;
        this.newLine[0][1] = y;
        this.newLine[1][0] = x;
        this.newLine[1][1] = y;
        this.tempLine = this.line;
        this.line = this.newLine;
        this.newLine = this.tempLine;
    }
    setPosition(x, y, z) {
        this.newLine[0][0] = this.line[1][0];
        this.newLine[0][1] = this.line[1][1];
        this.newLine[1][0] = x;
        this.newLine[1][1] = y;
        this.tempLine = this.line;
        this.line = this.newLine;
        this.newLine = this.tempLine;
    }
    paintXY(graphics, x, y) {
        var currentLine = this.line;
        ;
        this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
        graphics.drawLine(currentLine[0][0], currentLine[0][1], currentLine[1][0], currentLine[1][1]);
    }
    nextFrame() {
    }
}
