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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
export class ColorFromEventUtil extends Object {
    constructor() {
        super(...arguments);
        this.YELLOW = BasicColorFactory.getInstance().YELLOW;
        this.COLOR_INT = this.YELLOW.intValue();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ColorFromEventUtil.instance;
    }
    getForegroundColor(gameCanvasInterface) {
        var color = this.YELLOW;
        ;
        var geographicMapCompositeInterface = gameCanvasInterface.getLayerManager();
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        if (geographicMapInterface !=
            null) {
            var foregroundBasicColor = geographicMapInterface.getForegroundBasicColor();
            ;
            color = foregroundBasicColor;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return color;
    }
}
ColorFromEventUtil.instance = new ColorFromEventUtil();
