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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
import { Anchor } from '../../../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
import { PaintableToImageUtil } from '../../../../../../org/allbinary/image/PaintableToImageUtil.js';
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MiniMapLayer } from './MiniMapLayer.js';
//not GWT import - same folder const MiniMapLayer = globalThis.org.allbinary.game.layer.geographic.map.MiniMapLayer;
export class ImageMiniMapLayer extends MiniMapLayer {
    constructor(geographicMapInterface, viewPosition) {
        super(geographicMapInterface, viewPosition);
        this.image = NullImage.NULL_IMAGE;
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    init() {
        var aWidth = this.allBinaryTiledLayer.getWidth();
        ;
        var aHeight = this.allBinaryTiledLayer.getHeight();
        ;
        this.image = PaintableToImageUtil.getImage(this.allBinaryTiledLayer, aWidth, aHeight);
    }
    paint(graphics) {
        graphics.drawImage(this.image, this.x, this.y, this.anchor);
        this.paintDots(graphics);
    }
}
