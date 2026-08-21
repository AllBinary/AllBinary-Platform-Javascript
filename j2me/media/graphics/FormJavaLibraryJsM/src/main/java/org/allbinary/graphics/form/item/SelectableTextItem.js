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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABTextItem } from './ABTextItem.js';
export class SelectableTextItem extends ABTextItem {
    constructor(label, layout, altText, backgroundBasicColor, foregroundBasicColor) {
        super(label, layout, altText, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
    }
    isFocusable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        var stringComponent = this.getLabelStringComponent();
        ;
        if (stringComponent !=
            null) {
            graphics.setColor(stringComponent.getForegroundBasicColor().intValue());
        }
        graphics.drawString(this.getLabel(), x + 2, y, 0);
    }
}
