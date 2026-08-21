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
import { FileWriter } from '../../../../java/io/FileWriter.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BufferedWriterUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.commonLabels = CommonLabels.getInstance();
        this.REMOVING_OLD = "Remove old for overwritting: ";
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
