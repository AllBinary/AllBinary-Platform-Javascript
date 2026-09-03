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
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { ViewPosition } from '../../../org/allbinary/view/ViewPosition.js';
//not GWT import const AllBinaryLayerFactoryInterface = globalThis.org.allbinary.layer.AllBinaryLayerFactoryInterface;
import { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
export class AllBinaryLayerFactory extends Object {
    constructor(rectangle) {
        super();
        this.rectangle = rectangle;
    }
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinaryLayer(StringUtil.getInstance().EMPTY_STRING, this.rectangle, ViewPosition.getInstanceD());
    }
}
