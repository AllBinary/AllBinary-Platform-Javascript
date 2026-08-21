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
import { Object } from '../../../../../java/lang/Object.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimpleFileUtil } from './SimpleFileUtil.js';
export class FileUtil2 extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileUtil2.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.streamUtil = StreamUtil.getInstance();
    }
    loadFileAsList(file, max, byteArray1) {
        var inputStream = null;
        ;
        try {
            inputStream = new AbFileInputStream(file);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return SimpleFileUtil.getInstance().loadFileAsList(inputStream, max, byteArray1);
        ;
    }
}
FileUtil2.instance = new FileUtil2();
