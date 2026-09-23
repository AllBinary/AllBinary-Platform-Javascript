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
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
//not GWT import - same folder const AllBinaryGameCanvas
export class GameCanvasPaintHelper extends ProcessPaintable {
    constructor(gameCanvas) {
        super();
        this.gameCanvas = gameCanvas;
    }
    process() {
    }
    paint(graphics) {
        this.gameCanvas.draw(graphics);
    }
}
