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
import { Object } from '../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MediaData } from './MediaData.js';
//not GWT import - same folder const MediaData = globalThis.org.allbinary.logic.visual.media.MediaData;
export class MediaDataFactory extends Object {
    constructor() {
        super(...arguments);
        this.AVI = new MediaData("avi");
        this.BMP = new MediaData("bmp");
        this.CEL = new MediaData("cel");
        this.FITS = new MediaData("fits");
        this.FLI = new MediaData("fli");
        this.GBR = new MediaData("gbr");
        this.GIF = new MediaData("gif");
        this.GIH = new MediaData("gih");
        this.JPG = new MediaData("jpg");
        this.PIX = new MediaData("pix");
        this.PNG = new MediaData("png");
        this.PNM = new MediaData("pnm");
        this.PSD = new MediaData("psd");
        this.PSP = new MediaData("psp");
        this.PS = new MediaData("ps");
        this.SGI = new MediaData("SGI");
        this.SWF = new MediaData("swf");
        this.TGA = new MediaData("tga");
        this.TIFF = new MediaData("tiff");
        this.WMF = new MediaData("wmf");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MediaDataFactory.instance;
    }
}
MediaDataFactory.instance = new MediaDataFactory();
