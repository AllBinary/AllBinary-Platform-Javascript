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
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import const InitUpdatePaintable
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GamePerformanceInitUpdatePaintable extends InitUpdatePaintable {
    constructor() {
        super(...arguments);
        this.halfHeight = DisplayInfoSingleton.getInstance().getLastHalfHeight();
        this.yArray = [this.halfHeight + 30, this.halfHeight + 30, this.halfHeight + 30 + 15, this.halfHeight + 30 + 15, this.halfHeight + 30 + 30, this.halfHeight + 30 + 30, this.halfHeight + 30 + 45, this.halfHeight + 30 + 45];
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.baseRefreshHelperCharArray = new Array(0).fill(null).map(() => new Array(0).fill(null));
        this.defaultStringWidth = 0;
        this.RED = BasicColorFactory.getInstance().RED.intValue();
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.defaultStringWidth = MyFontProcessor.defaultStringWidth(font, 2);
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    init() {
    }
    update() {
        this.baseRefreshHelperCharArray = GameStatisticsFactory.getInstance().to2DCharArray();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        graphics.setColor(this.RED);
        var charArray;
        ;
        var charArray2;
        ;
        var size2 = 0;
        ;
        var size3 = 0;
        ;
        var size = this.baseRefreshHelperCharArray.length - 2;
        ;
        for (var index = size; index >= 0;) {
            charArray = this.baseRefreshHelperCharArray[index];
            charArray2 = this.baseRefreshHelperCharArray[index + 1];
            size2 = charArray.length;
            size3 = charArray2.length;
            graphics.drawChars(charArray, 0, size2, 0, this.yArray[index], 0);
            graphics.drawChars(charArray2, 0, size3, size2 * this.defaultStringWidth, this.yArray[index + 1], 0);
        }
    }
}
