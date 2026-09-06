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
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileInputStream } from './AbFileInputStream.js';
//not GWT import - same folder const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;
export class AbFileLocalInputStream extends AbFileInputStream {
    constructor(file) {
        super(AbFileNativeUtil.get(file));
        //For kotlin this is before the body of the constructor.
    }
}
