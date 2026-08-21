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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameFeatureImageCacheFactory } from './GameFeatureImageCacheFactory.js';
export class AnimationFrameToImageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnimationFrameToImageUtil.instance;
    }
    //@Throws(Exception.constructor)
    getInstanceTranslate(width, height, animationInterface) {
        var image = GameFeatureImageCacheFactory.getInstance().get(AnimationFrameToImageUtil.instance.constructor.name.toString(), ((width * 3) >> 1), ((height * 3) >> 1));
        ;
        var graphics = image.getGraphics();
        ;
        var tranlateX = (width >> 2);
        ;
        var tranlateY = (height >> 2);
        ;
        graphics.translate(tranlateX, tranlateY);
        animationInterface.paintXY(graphics, 0, 0);
        graphics.translate(-tranlateX, -tranlateY);
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    getInstanceWH(width, height, animationInterface) {
        var image = GameFeatureImageCacheFactory.getInstance().get(AnimationFrameToImageUtil.instance.constructor.name.toString(), width, height);
        ;
        var graphics = image.getGraphics();
        ;
        animationInterface.paintXY(graphics, 0, 0);
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
}
AnimationFrameToImageUtil.instance = new AnimationFrameToImageUtil();
