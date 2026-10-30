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
import { Object } from '../../../../java/lang/Object.js';
import { Math } from '../../../../java/lang/Math.js';
//not GWT import const BufferedImage
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageUtil } from './ImageUtil.js';
//sameFolderImports - not GWT import - same folder const ImageUtil
import { ImageJ2SEUtil } from './ImageJ2SEUtil.js';
//sameFolderImports - not GWT import - same folder const ImageJ2SEUtil
export class ImageJ2SERotationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageJ2SERotationUtil.instance;
    }
    constructor() {
        super();
        this.imageUtil = ImageUtil.getInstance();
        this.imageJ2SEUtil = ImageJ2SEUtil.getInstance();
        this.TWO_PIE = 2 * Math.PI;
    }
    getRotatedImage(bufferedImage, totalAngle) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getRotatedImageRadians(bufferedImage, TWO_PIE * totalAngle / 360);
        ;
    }
    getRotatedImageRadians(bufferedImage, radians) {
        let newBufferedImage = this.imageUtil.create(bufferedImage.getWidth(null), bufferedImage.getHeight(null));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.drawRotatedImageRadians(bufferedImage, newBufferedImage, newBufferedImage.createGraphics(), radians);
        ;
    }
    drawRotatedImageRadians(bufferedImage, newBufferedImage, g, radians) {
        g.rotate(radians, newBufferedImage.getWidth(null) / 2, newBufferedImage.getHeight(null) / 2);
        g.drawImage(bufferedImage, 0, 0, bufferedImage.getWidth(null), bufferedImage.getHeight(null), null);
        g.dispose();
        //if statement needs to be on the same line and ternary does not work the same way.
        return newBufferedImage;
    }
    rotateImage(bufferedImage, newBufferedImage, totalAngle) {
        let g = newBufferedImage.createGraphics();
        ;
        g.setBackground(this.imageJ2SEUtil.TRANSPARENT_COLOR);
        g.clearRect(0, 0, newBufferedImage.getWidth(), newBufferedImage.getHeight());
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.drawRotatedImageRadians(bufferedImage, newBufferedImage, g, TWO_PIE * totalAngle / 360);
        ;
    }
    createRotatedImage(bufferedImage, newBufferedImage, totalAngle) {
        let g = newBufferedImage.createGraphics();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.drawRotatedImageRadians(bufferedImage, newBufferedImage, g, TWO_PIE * totalAngle / 360);
        ;
    }
    getRotatedImages(bufferedImage, numberOfFrames, totalAngle) {
        let bufferedImageArray = new Array(numberOfFrames);
        ;
        let arc = () * totalAngle / 360;
        ;
        let size = bufferedImageArray.length;
        ;
        for (let index = 0; index < size; index++) {
            let radians = (arc / size) * index;
            ;
            bufferedImageArray[index] = this.getRotatedImageRadians(bufferedImage, radians);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return bufferedImageArray;
    }
    createSpriteImage(bufferedImageArray) {
        let columns = 9;
        ;
        let rows = 0;
        ;
        let size = bufferedImageArray.length;
        ;
        if (size < columns) {
            columns = size;
        }
        rows = (globalThis.Math.trunc(size / columns));
        if (size % columns != 0) {
            rows++;
        }
        let firstBufferedImage = bufferedImageArray[0];
        ;
        let bufferedImage = this.imageUtil.create(firstBufferedImage.getWidth(null) * columns, firstBufferedImage.getHeight(null) * rows);
        ;
        let g = bufferedImage.createGraphics();
        ;
        let columnIndex = 0;
        ;
        let rowIndex = 0;
        ;
        let nextBufferedImage;
        ;
        for (let index = 0; index < size; index++) {
            if (globalThis.Math.trunc(index / 9) != 0 && index % 9 == 0) {
                rowIndex++;
                columnIndex = 0;
            }
            nextBufferedImage = bufferedImageArray[index];
            g.drawImage(nextBufferedImage, nextBufferedImage.getWidth(null) * columnIndex, nextBufferedImage.getHeight(null) * rowIndex, nextBufferedImage.getWidth(null), nextBufferedImage.getHeight(null), null);
            columnIndex++;
        }
        g.dispose();
        //if statement needs to be on the same line and ternary does not work the same way.
        return bufferedImage;
    }
}
ImageJ2SERotationUtil.instance = new ImageJ2SERotationUtil();
