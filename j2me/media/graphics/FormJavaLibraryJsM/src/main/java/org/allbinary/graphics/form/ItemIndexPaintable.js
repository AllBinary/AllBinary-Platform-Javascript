/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ItemIndexPaintable extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ItemIndexPaintable.instance;
    }
    //@Throws(Exception.constructor)
    paint(graphics, index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
ItemIndexPaintable.instance = new ItemIndexPaintable();
