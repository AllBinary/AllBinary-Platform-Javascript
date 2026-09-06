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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicColorFactory } from './BasicColorFactory.js';
//not GWT import - same folder const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
export class ColorTemperatureUtil extends Object {
    constructor() {
        super(...arguments);
        this.basicColorFactory = BasicColorFactory.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ColorTemperatureUtil.instance;
    }
    getBasicColor(thirdTemp) {
        var basicColor = this.basicColorFactory.RED;
        ;
        if (thirdTemp > 3700) {
            basicColor = this.basicColorFactory.PURPLE;
        }
        else if (thirdTemp > 3200) {
            basicColor = this.basicColorFactory.BLUE;
        }
        else if (thirdTemp > 2700) {
            basicColor = this.basicColorFactory.PUCE;
        }
        else if (thirdTemp > 2200) {
            basicColor = this.basicColorFactory.WHITE;
        }
        else if (thirdTemp > 1700) {
            basicColor = this.basicColorFactory.GREEN;
        }
        else if (thirdTemp > 1200) {
            basicColor = this.basicColorFactory.YELLOW;
        }
        else if (thirdTemp > 700) {
            basicColor = this.basicColorFactory.ORANGE;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return basicColor;
    }
}
ColorTemperatureUtil.instance = new ColorTemperatureUtil();
