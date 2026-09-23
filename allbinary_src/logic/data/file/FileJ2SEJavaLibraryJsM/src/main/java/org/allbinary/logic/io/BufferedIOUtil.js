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
import { BufferedReader } from '../../../../java/io/BufferedReader.js';
//not GWT import const BufferedReader
import { BufferedWriter } from '../../../../java/io/BufferedWriter.js';
//not GWT import const BufferedWriter
import { FileReader } from '../../../../java/io/FileReader.js';
//not GWT import const FileReader
import { FileWriter } from '../../../../java/io/FileWriter.js';
//not GWT import const AbFile
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BufferedIOUtil extends Object {
    //@Throws(Exception.constructor)
    static copy(backupFile, backupFileBak) {
        var line = StringUtil.getInstance().EMPTY_STRING;
        ;
        var tmpOut = new BufferedWriter(new FileWriter(AbFileNativeUtil.get(backupFileBak)));
        ;
        var tmpIn = new BufferedReader(new FileReader(AbFileNativeUtil.get(backupFile)));
        ;
        while (true) {
            line = tmpIn.readLine();
            if (line ==
                null) {
                break;
            }
            tmpOut.write(line, 0, line.length);
            tmpOut.newLine();
        }
        tmpOut.flush();
    }
}
