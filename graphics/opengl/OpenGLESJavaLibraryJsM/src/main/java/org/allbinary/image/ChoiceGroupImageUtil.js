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
//not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;
import { ChoiceGroupImageFactory } from '../../../javax/microedition/lcdui/ChoiceGroupImageFactory.js';
//not GWT import const ChoiceGroupImageFactory = globalThis.javax.microedition.lcdui.ChoiceGroupImageFactory;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { OpenGLFeatureFactory } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PreResourceImageUtil } from './PreResourceImageUtil.js';
//not GWT import - same folder const PreResourceImageUtil = globalThis.org.allbinary.image.PreResourceImageUtil;
export class ChoiceGroupImageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ChoiceGroupImageUtil.instance;
    }
    init() {
        var features = Features.getInstance();
        ;
        var choiceGroupFactory = ChoiceGroupImageFactory.getInstance();
        ;
        var imageArray = choiceGroupFactory.getImageArray();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            var preResourceImageUtil = PreResourceImageUtil.getInstance();
            ;
            var size = imageArray.length;
            ;
            for (var index = 0; index < size; index++) {
                imageArray[index] = preResourceImageUtil.encapsulate(imageArray[index]);
            }
            choiceGroupFactory.init(imageArray);
        }
    }
    update(gl) {
        var features = Features.getInstance();
        ;
        var choiceGroupFactory = ChoiceGroupImageFactory.getInstance();
        ;
        var imageArray = choiceGroupFactory.getImageArray();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            var preResourceImageUtil = PreResourceImageUtil.getInstance();
            ;
            var size = imageArray.length;
            ;
            for (var index = 0; index < size; index++) {
                preResourceImageUtil.updateGL(gl, imageArray[index]);
            }
        }
        choiceGroupFactory.init(imageArray);
    }
    update(graphics) {
        var features = Features.getInstance();
        ;
        var choiceGroupFactory = ChoiceGroupImageFactory.getInstance();
        ;
        var imageArray = choiceGroupFactory.getImageArray();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            var preResourceImageUtil = PreResourceImageUtil.getInstance();
            ;
            var size = imageArray.length;
            ;
            for (var index = 0; index < size; index++) {
                preResourceImageUtil.update(graphics, imageArray[index]);
            }
        }
        choiceGroupFactory.init(imageArray);
    }
}
ChoiceGroupImageUtil.instance = new ChoiceGroupImageUtil();
