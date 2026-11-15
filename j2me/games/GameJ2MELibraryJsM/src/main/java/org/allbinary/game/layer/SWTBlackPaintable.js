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
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { BasicColorSetUtil } from '../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SWTBlackPaintable extends Paintable {
    constructor() {
        super(...arguments);
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.BLACK = BasicColorFactory.getInstance().BLACK;
    }
    paint(graphics) {
        this.basicSetColorUtil.setBasicColorP(graphics, this.BLACK);
    }
}
