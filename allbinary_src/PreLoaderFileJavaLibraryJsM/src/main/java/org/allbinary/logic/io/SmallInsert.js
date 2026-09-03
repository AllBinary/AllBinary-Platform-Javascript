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
import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
//not GWT import const DataOutputStream = globalThis.java.io.DataOutputStream;
import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
//not GWT import const FileOutputStream = globalThis.java.io.FileOutputStream;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbFileSystem } from '../../../../org/allbinary/logic/io/file/AbFileSystem.js';
//not GWT import const AbFileSystem = globalThis.org.allbinary.logic.io.file.AbFileSystem;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SmallInsert extends Object {
    constructor(fileName) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.fileName = fileName;
        this.string = AbFileSystem.getInstance().readAsString(fileName);
    }
    atBeginning(text) {
        try {
            var idFile = new FileOutputStream(this.fileName);
            ;
            var idOutData = new DataOutputStream(idFile);
            ;
            idOutData.writeBytes(text + this.string);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().IDLOGGING)) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "insertAtBeginning", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    after(text, after) {
        try {
            var index = this.string.indexOf(after);
            ;
            if (index < 0) {
                console.log("No such start: " + after + " in: " + this.string);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            index = index + after.length;
            var start = this.string.substring(0, index);
            ;
            var end = this.string.substring(index + 1, this.string.length);
            ;
            var idFile = new FileOutputStream(this.fileName);
            ;
            var idOutData = new DataOutputStream(idFile);
            ;
            idOutData.writeBytes(start + text + end);
            idOutData.close();
            idFile.close();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().IDLOGGING)) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "after", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    atEnd(text) {
        try {
            var idFile = new FileOutputStream(this.fileName);
            ;
            var idOutData = new DataOutputStream(idFile);
            ;
            idOutData.writeBytes(this.string + text);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().IDLOGGING)) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, "insertAtEnd", e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
