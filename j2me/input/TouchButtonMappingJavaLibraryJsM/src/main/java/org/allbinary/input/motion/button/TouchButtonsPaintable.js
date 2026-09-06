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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonFactory } from './TouchButtonFactory.js';
//not GWT import - same folder const TouchButton = globalThis.org.allbinary.input.motion.button.TouchButton;
export class TouchButtonsPaintable extends Paintable {
    constructor(basicColor) {
        super();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.touchButtonFactory = TouchButtonFactory.getInstance();
        this.foregroundBasicColor = basicColor;
        this.foregroundColor = basicColor.intValue();
    }
    paint(graphics) {
        var list = this.touchButtonFactory.getList();
        ;
        this.basicSetColorUtil.setBasicColorP3(graphics, this.foregroundBasicColor, this.foregroundColor);
        var touchButton;
        ;
        for (var index = list.size(); --index >= 0;) {
            touchButton = list.objectArray[index];
            touchButton.paint(graphics);
        }
        for (var index = list.size(); --index >= 0;) {
            touchButton = list.objectArray[index];
            touchButton.paintHint(graphics);
        }
    }
}
