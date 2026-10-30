/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not GWT import const Image
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageUtil } from './ImageUtil.js';
//sameFolderImports - not GWT import - same folder const ImageUtil
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil
export class ImageModifierUtil extends Object {
    constructor() {
        super(...arguments);
        this.imageUtil = ImageUtil.getInstance();
        this.colorArray = new Array(1);
    }
    static getInstanceOrCreate() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageModifierUtil.instance;
    }
    setBasicColorP(basicColor) {
    }
    setColor(unusedOriginalImage, image, imageIndex, basicColor) {
        let newBufferedImage = this.imageUtil.getBufferedImage(image);
        ;
        let r = basicColor.red;
        ;
        let g = basicColor.green;
        ;
        let b = basicColor.blue;
        ;
        let width = image.getWidth();
        ;
        let height = image.getHeight();
        ;
        let colorModel;
        ;
        let dataElements;
        ;
        let ax = 0;
        ;
        let rx = 0;
        ;
        let gx = 0;
        ;
        let bx = 0;
        ;
        for (let index = 0; index < width; index++) {
            for (let index2 = 0; index2 < height; index2++) {
                colorModel = newBufferedImage.getColorModel();
                dataElements = newBufferedImage.getRaster().getDataElements(index, index2, null);
                ax = colorModel.getAlpha(dataElements);
                rx = colorModel.getRed(dataElements);
                gx = colorModel.getGreen(dataElements);
                bx = colorModel.getBlue(dataElements);
                if (rx != 0 || gx != 0 || bx != 0) {
                    newBufferedImage.setRGB(index, index2, (ax << 24) | (r << 16) | (g << 8) | (b));
                }
            }
        }
    }
    changeColor(unusedOriginalImage, image, imageIndex, basicColor) {
        let newBufferedImage = this.imageUtil.getBufferedImage(image);
        ;
        let MAX = 255;
        ;
        let r = (basicColor.red) / MAX;
        ;
        let g = (basicColor.green) / MAX;
        ;
        let b = (basicColor.blue) / MAX;
        ;
        let width = image.getWidth();
        ;
        let height = image.getHeight();
        ;
        let colorModel;
        ;
        let dataElements;
        ;
        let ax = 0;
        ;
        let rx = 0;
        ;
        let gx = 0;
        ;
        let bx = 0;
        ;
        for (let index = 0; index < width; index++) {
            for (let index2 = 0; index2 < height; index2++) {
                colorModel = newBufferedImage.getColorModel();
                dataElements = newBufferedImage.getRaster().getDataElements(index, index2, null);
                ax = colorModel.getAlpha(dataElements);
                rx = colorModel.getRed(dataElements);
                gx = colorModel.getGreen(dataElements);
                bx = colorModel.getBlue(dataElements);
                rx *= r;
                gx *= g;
                bx *= b;
                newBufferedImage.setRGB(index, index2, (ax << 24) | (rx << 16) | (gx << 8) | (bx));
            }
        }
    }
    setAlpha(unusedOriginalImage, image, imageIndex, alphaInt) {
        let alpha = ((alphaInt) << 24 >> 24);
        ;
        let newBufferedImage = this.imageUtil.getBufferedImage(image);
        ;
        let width = image.getWidth();
        ;
        let height = image.getHeight();
        ;
        let raster = newBufferedImage.getAlphaRaster();
        ;
        for (let index = 0; index < width; index++) {
            for (let index2 = 0; index2 < height; index2++) {
                raster.getPixel(index, index2, this.colorArray);
                this.colorArray[0] = alpha & this.colorArray[0];
                raster.setPixel(index, index2, this.colorArray);
            }
        }
    }
    getImageArray(originalImageArray) {
        try {
            let newImageArray = new Array(originalImageArray.length);
            ;
            let size = newImageArray.length;
            ;
            let originalImage;
            ;
            for (let index = 0; index < size; index++) {
                originalImage = originalImageArray[index];
                let image = ImageCreationUtil.getInstance().createImageWH(originalImage.getWidth(), originalImage.getHeight());
                ;
                image.getGraphics().drawImage(originalImage, 0, 0, Anchor.TOP_LEFT);
                newImageArray[index] = image;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return newImageArray;
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                PreLogUtil.putOE(commonStrings.EXCEPTION, this, "getImageArray", e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return originalImageArray;
            }
        }
    }
    handleImage(imageArray, index, image) {
    }
    reset() {
    }
}
ImageModifierUtil.instance = new ImageModifierUtil();
