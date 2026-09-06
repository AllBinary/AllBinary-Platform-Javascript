/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { ABCustomImageItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomImageItem.js';
//not GWT import const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LayerInterfaceFactoryImageItem extends ABCustomImageItem {
    constructor(label, img, layout, altText, basicColor, animationArray, layerInterfaceFactoryInterface) {
        super(label, img, layout, altText, basicColor, 0);
        //For kotlin this is before the body of the constructor.
        this.animationArray = animationArray;
        this.layerInterfaceFactoryInterface = layerInterfaceFactoryInterface;
    }
    getLayerInterfaceFactoryInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerInterfaceFactoryInterface;
    }
    paintXY(graphics, x, y) {
        super.paintXY(graphics, x, y);
        for (var index = this.animationArray.length; --index >= 0;) {
            this.animationArray[index].paintXY(graphics, x, y);
        }
    }
}
