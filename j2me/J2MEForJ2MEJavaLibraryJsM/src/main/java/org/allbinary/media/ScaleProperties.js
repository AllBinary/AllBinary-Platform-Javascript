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
import { Object } from '../../../java/lang/Object.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScaleProperties extends Object {
    constructor() {
        super(...arguments);
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.scaleWidth = 0;
        this.scaleHeight = 0;
        this.shouldScale = false;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(CommonLabels.getInstance().COLON_SEP).appendboolean(this.shouldScale).append("scaleX: ").appendfloat(this.scaleX).append("scaleY: ").appendfloat(this.scaleY).append("scaleWidth: ").appendint(this.scaleWidth).append("scaleHeight: ").appendint(this.scaleHeight).toString();
        ;
    }
}
ScaleProperties.instance = new ScaleProperties();
