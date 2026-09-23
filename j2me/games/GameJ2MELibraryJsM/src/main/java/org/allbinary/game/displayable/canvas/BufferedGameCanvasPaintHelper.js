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
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const Image
import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
//not GWT import const NullCanvas
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const MyCanvas
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
//not GWT import const ProcessPaintable
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import - same folder const AllBinaryGameCanvas
export class BufferedGameCanvasPaintHelper extends ProcessPaintable {
    constructor(gameCanvas) {
        super();
        this.gameCanvas = NullCanvas.NULL_CANVAS;
        this.offScreenImage = new Array(BufferedGameCanvasPaintHelper.MAX_IMAGES);
        this.previousImage = NullImage.NULL_IMAGE;
        this.circularIndexUtil = CircularIndexUtil.createInstance(BufferedGameCanvasPaintHelper.MAX_IMAGES);
        this.drawCircularIndexUtil = CircularIndexUtil.createInstanceAt(BufferedGameCanvasPaintHelper.MAX_IMAGES - 1, BufferedGameCanvasPaintHelper.MAX_IMAGES);
        this.anchor = Anchor.TOP_LEFT;
        throw new Exception("No Longer Used");
    }
    process() {
        var myCanvas = this.gameCanvas;
        ;
        myCanvas.draw(this.offScreenImage[this.circularIndexUtil.getIndex()].getGraphics());
        this.circularIndexUtil.next();
        this.drawCircularIndexUtil.next();
    }
    paint(graphics) {
        this.previousImage = this.offScreenImage[this.drawCircularIndexUtil.getIndex()];
        graphics.drawImage(this.previousImage, 0, 0, this.anchor);
    }
}
BufferedGameCanvasPaintHelper.MAX_IMAGES = 4;
