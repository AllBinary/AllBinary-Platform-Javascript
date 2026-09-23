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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const PaintableInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameFeatureImageCacheFactory } from './GameFeatureImageCacheFactory.js';
//not GWT import - same folder const GameFeatureImageCacheFactory
export class PaintableToImageUtil extends Object {
    //@Throws(Exception.constructor)
    static getImage(paintableInterface, width, height) {
        var image = GameFeatureImageCacheFactory.getInstance().get(PaintableToImageUtil.instance.constructor.name.toString(), width, height);
        ;
        var graphics = image.getGraphics();
        ;
        paintableInterface.paint(graphics);
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
}
PaintableToImageUtil.instance = new PaintableToImageUtil();
