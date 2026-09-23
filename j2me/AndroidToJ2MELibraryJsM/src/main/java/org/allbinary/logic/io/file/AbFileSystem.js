/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
import { File } from '../../../../../java/io/File.js';
//not GWT import const File
import { FileInputStream } from '../../../../../java/io/FileInputStream.js';
//not GWT import const InputStream
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
//AndroidToJ2ME
export class AbFileSystem extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbFileSystem.instance;
    }
    isDirectoryOrFile(path) {
        var file = new File(path);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return file.isDirectory() || file.isFile();
    }
    isDirectory(path) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new File(path).isDirectory();
        ;
    }
    getFilesAsStringArrayForPath(currentDirPath) {
        var file = new File(currentDirPath);
        ;
        if (file.exists()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return file.list();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().getArrayInstance();
            ;
        }
    }
    readAsString(fileName) {
        var bytes = new Array(1000000);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.readAsString(fileName, bytes);
        ;
    }
    readAsString(fileName, bytes) {
        var closeable = NullUtil.getInstance().NULL_OBJECT;
        ;
        try {
            var idFile = new FileInputStream(fileName);
            ;
            closeable = idFile;
            var size = idFile.read(bytes);
            ;
            if (size > 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return String.fromCharCode(...bytes);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "readAsString", e);
        }
        finally {
            this.close(closeable);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    close(closeable = {}) {
        try {
            if (closeable !=
                null) {
                var inputStream = closeable;
                ;
                inputStream.close();
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CLOSE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
AbFileSystem.instance = new AbFileSystem();
