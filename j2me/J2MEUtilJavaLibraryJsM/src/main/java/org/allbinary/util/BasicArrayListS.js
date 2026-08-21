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
import { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicArrayList } from './BasicArrayList.js';
export class BasicArrayListS extends BasicArrayList {
    constructor(size) {
        super(NullUtil.getInstance().NULL_OBJECT_ARRAY);
        //For kotlin this is before the body of the constructor.
        if (size < 0) {
            throw new IllegalArgumentException(new StringMaker().append("Init Size Exception: ").appendint(size).toString());
        }
        this.objectArray = new Array(size);
    }
}
