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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { PositionStrings } from '../../../../org/allbinary/math/PositionStrings.js';
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AnimationFactoryInitializationVisitor extends Object {
    constructor() {
        super(...arguments);
        this.width = 0;
        this.height = 0;
        this.dx = 0;
        this.dy = 0;
        this.originalDx = 0;
        this.originalDy = 0;
    }
    visit() {
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        var commonLabels = CommonLabels.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(PositionStrings.getInstance().DX_LABEL).appendfloat(this.dx);
        stringBuffer.append(PositionStrings.getInstance().DY_LABEL).appendfloat(this.dy);
        stringBuffer.append(commonLabels.WIDTH_LABEL);
        stringBuffer.appendint(this.width);
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(this.height);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
