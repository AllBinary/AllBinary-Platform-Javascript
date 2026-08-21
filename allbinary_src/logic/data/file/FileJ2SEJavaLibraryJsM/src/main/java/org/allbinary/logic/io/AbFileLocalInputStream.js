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
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileInputStream } from './AbFileInputStream.js';
export class AbFileLocalInputStream extends AbFileInputStream {
    constructor(file) {
        super(AbFileNativeUtil.get(file));
        //For kotlin this is before the body of the constructor.
    }
}
