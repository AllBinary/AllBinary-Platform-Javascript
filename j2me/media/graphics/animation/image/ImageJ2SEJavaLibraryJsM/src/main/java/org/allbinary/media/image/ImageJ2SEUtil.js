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
import { Color } from '../../../../java/awt/Color.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageJ2SEUtil extends Object {
    constructor() {
        super(...arguments);
        this.TRANSPARENT_COLOR = new Color(0, 0, 0, 0);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageJ2SEUtil.instance;
    }
}
ImageJ2SEUtil.instance = new ImageJ2SEUtil();
