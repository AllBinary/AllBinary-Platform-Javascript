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
import { BufferedWriter } from '../../../../java/io/BufferedWriter.js';
import { FileReader } from '../../../../java/io/FileReader.js';
import { FileWriter } from '../../../../java/io/FileWriter.js';
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
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
