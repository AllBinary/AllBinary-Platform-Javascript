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
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Layer
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PaintableLayerComposite extends Paintable {
    constructor(paintableArray) {
        super();
        this.paintableArray = paintableArray;
    }
    paint(graphics) {
        for (var index = this.paintableArray.length; --index >= 0;) {
            this.paintableArray[index].paint(graphics);
        }
    }
    paintThreed(graphics) {
        var paintableInterface;
        ;
        for (var index = this.paintableArray.length; --index >= 0;) {
            paintableInterface = this.paintableArray[index];
            paintableInterface.paintThreed(graphics);
        }
    }
}
