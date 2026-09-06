/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Screen } 
const Screen = globalThis.javax.microedition.lcdui.Screen;
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import - same folder const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
export class TileLayerItem extends ABCustomItem {
    constructor(label, tiledLayer, layout, altText, backgroundBasicColor, foregroundBasicColor) {
        super(label, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.tiledLayer = tiledLayer;
    }
    setOwner(owner) {
    }
    getMinimumWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer.getWidth();
        ;
    }
    getMinimumHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer.getHeight();
        ;
    }
    getMinContentHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer.getHeight();
        ;
    }
    getMinContentWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer.getWidth();
        ;
    }
    getPrefContentHeight(width) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer.getHeight();
        ;
    }
    getPrefContentWidth(height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer.getWidth();
        ;
    }
    paintXY(graphics, x, y) {
        this.tiledLayer.setPosition(x, y, this.tiledLayer.getZP());
        this.tiledLayer.paint(graphics);
    }
    paintUnselected(graphics, x, y) {
    }
}
