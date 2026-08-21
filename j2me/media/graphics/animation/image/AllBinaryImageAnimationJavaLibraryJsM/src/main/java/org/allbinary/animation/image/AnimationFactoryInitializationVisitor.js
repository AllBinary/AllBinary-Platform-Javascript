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
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { PositionStrings } from '../../../../org/allbinary/math/PositionStrings.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
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
