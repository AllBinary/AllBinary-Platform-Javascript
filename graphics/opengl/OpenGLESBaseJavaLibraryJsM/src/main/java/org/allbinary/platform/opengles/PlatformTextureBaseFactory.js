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
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlatformTextureBaseFactory extends Object {
    constructor() {
        super(...arguments);
        this.commonStrings = CommonStrings.getInstance();
    }
    load(gl, target, level, image, border, flip) {
    }
}
PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY = new PlatformTextureBaseFactory();
