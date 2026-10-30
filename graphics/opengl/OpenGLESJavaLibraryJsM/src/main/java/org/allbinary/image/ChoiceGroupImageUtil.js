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
//not GWT import const GL
import { ChoiceGroupImageFactory } from '../../../javax/microedition/lcdui/ChoiceGroupImageFactory.js';
//not GWT import const Image
import { OpenGLFeatureFactory } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PreResourceImageUtil } from './PreResourceImageUtil.js';
//sameFolderImports - not GWT import - same folder const PreResourceImageUtil
export class ChoiceGroupImageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ChoiceGroupImageUtil.instance;
    }
    init() {
        let features = Features.getInstance();
        ;
        let choiceGroupFactory = ChoiceGroupImageFactory.getInstance();
        ;
        let imageArray = choiceGroupFactory.getImageArray();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            let preResourceImageUtil = PreResourceImageUtil.getInstance();
            ;
            let size = imageArray.length;
            ;
            for (let index = 0; index < size; index++) {
                imageArray[index] = preResourceImageUtil.encapsulate(imageArray[index]);
            }
            choiceGroupFactory.init(imageArray);
        }
    }
    update(...args) {
        if (args.length === 1)
            return this.update$overload1(args[0]);
        if (args.length === 1)
            return this.update$overload2(args[0]);
        throw new TypeError('No matching overload: update');
    }
    update$overload1(gl) {
        let features = Features.getInstance();
        ;
        let choiceGroupFactory = ChoiceGroupImageFactory.getInstance();
        ;
        let imageArray = choiceGroupFactory.getImageArray();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            let preResourceImageUtil = PreResourceImageUtil.getInstance();
            ;
            let size = imageArray.length;
            ;
            for (let index = 0; index < size; index++) {
                preResourceImageUtil.updateGL(gl, imageArray[index]);
            }
        }
        choiceGroupFactory.init(imageArray);
    }
    update$overload2(graphics) {
        let features = Features.getInstance();
        ;
        let choiceGroupFactory = ChoiceGroupImageFactory.getInstance();
        ;
        let imageArray = choiceGroupFactory.getImageArray();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            let preResourceImageUtil = PreResourceImageUtil.getInstance();
            ;
            let size = imageArray.length;
            ;
            for (let index = 0; index < size; index++) {
                preResourceImageUtil.update(graphics, imageArray[index]);
            }
        }
        choiceGroupFactory.init(imageArray);
    }
}
ChoiceGroupImageUtil.instance = new ChoiceGroupImageUtil();
