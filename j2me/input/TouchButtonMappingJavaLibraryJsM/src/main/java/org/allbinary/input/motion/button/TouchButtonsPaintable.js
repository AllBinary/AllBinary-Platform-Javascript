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
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonFactory } from './TouchButtonFactory.js';
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
