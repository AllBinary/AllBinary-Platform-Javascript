/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { Object } from '../../../../../java/lang/Object.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Shader extends Object {
    constructor() {
        super(...arguments);
        this.shaderName = StringUtil.getInstance().EMPTY_STRING;
        this.shaderStringList = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.shaderAsString = StringUtil.getInstance().EMPTY_STRING;
        this.shaderHandle = 0;
    }
}
