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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { Exception } from '../../../../java/lang/Exception.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileInputStream } from './AbFileInputStream.js';
export class LineReader extends Object {
    constructor(fileName) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.index = 0;
        try {
            var bytes = new Array(100000);
            ;
            this.fileName = fileName;
            this.idFile = new AbFileInputStream(fileName);
            this.idFile.read(bytes);
            this.string = String.fromCharCode(...bytes);
            //: 
        }
        catch (e) {
            this.logUtil.put("File: " + fileName, this, "LineReader", e);
            {
            }
        }
    }
    hasNext() {
        try {
            var nextIndex = this.string.indexOf(CommonSeps.getInstance().NEW_LINE, index);
            ;
            if (nextIndex == -1) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, "hasNext", e);
            {
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    next() {
        try {
            var nextIndex = this.string.indexOf(CommonSeps.getInstance().NEW_LINE, index);
            ;
            if (nextIndex == -1) {
                throw new Exception("next() should have been called first");
            }
            var temp = this.string.substring(index, nextIndex);
            ;
            index = nextIndex + 1;
            //if statement needs to be on the same line and ternary does not work the same way.
            return temp;
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, "next", e);
            {
            }
            throw e;
        }
    }
}
