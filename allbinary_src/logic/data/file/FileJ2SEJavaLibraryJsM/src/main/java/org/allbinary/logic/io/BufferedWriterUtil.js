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
import { BufferedWriter } from '../../../../java/io/BufferedWriter.js';
//not GWT import const BufferedWriter
import { FileWriter } from '../../../../java/io/FileWriter.js';
//not GWT import const FileWriter
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BufferedWriterUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.commonLabels = CommonLabels.getInstance();
        this.REMOVING_OLD = "Remove old for overwriting: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BufferedWriterUtil.instance;
    }
    //@Throws(Exception.constructor)
    overwrite(path, data) {
        var abFile = AbFile.createAbFile(path);
        ;
        if (abFile.exists()) {
            this.logUtil.putF(this.REMOVING_OLD + path, this, this.commonStrings.CREATE);
            abFile.delete();
        }
        else {
            var name = AbPathData.getInstance().removeNameFromPath(path);
            ;
            var abFileDirectory = AbFile.createAbFile(name);
            ;
            if (abFileDirectory.exists()) {
            }
            else {
                var stringBuilder = new StringMaker();
                ;
                this.logUtil.putF(stringBuilder.append(this.commonStrings.CREATE).append(this.commonLabels.COLON_SEP).append(name).toString(), this, this.commonStrings.CREATE);
                var result = abFileDirectory.mkdirs();
                ;
                stringBuilder.delete(0, stringBuilder.length());
                this.logUtil.putF(stringBuilder.append(this.commonLabels.RESULT_).appendboolean(result).toString(), this, this.commonStrings.CREATE);
            }
        }
        this.write(abFile, data);
    }
    //@Throws(Exception.constructor)
    overwrite(abFile, data) {
        if (abFile.exists()) {
            this.logUtil.putF(this.REMOVING_OLD + abFile.getPath(), this, this.commonStrings.CREATE);
            abFile.delete();
        }
        else {
            var name = AbPathData.getInstance().removeNameFromPath(abFile.getAbsolutePath());
            ;
            var abFileDirectory = AbFile.createAbFile(name);
            ;
            if (abFileDirectory.exists()) {
            }
            else {
                var stringBuilder = new StringMaker();
                ;
                this.logUtil.putF(stringBuilder.append(this.commonStrings.CREATE).append(this.commonLabels.COLON_SEP).append(name).toString(), this, this.commonStrings.CREATE);
                var result = abFileDirectory.mkdirs();
                ;
                stringBuilder.delete(0, stringBuilder.length());
                this.logUtil.putF(stringBuilder.append(this.commonLabels.RESULT_).appendboolean(result).toString(), this, this.commonStrings.CREATE);
            }
        }
        this.write(abFile, data);
    }
    //@Throws(Exception.constructor)
    write(abFile, data) {
        var fileOut = new BufferedWriter(new FileWriter(AbFileNativeUtil.get(abFile)));
        ;
        fileOut.write(data, 0, data.length);
        fileOut.newLine();
        fileOut.flush();
    }
}
BufferedWriterUtil.instance = new BufferedWriterUtil();
