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
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
export class BasicArrayListCacheable extends BasicArrayListD {
    getKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
}
