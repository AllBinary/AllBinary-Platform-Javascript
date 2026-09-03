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
import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbIOSystem } from '../../../../org/allbinary/logic/io/AbIOSystem.js';
//not GWT import const AbIOSystem = globalThis.org.allbinary.logic.io.AbIOSystem;
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { FileUtil } from '../../../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;
import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InitializeCloud extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    initialize(cloud, overwriteNewer, overwriteAll, current, total) {
        try {
            if (AbIOSystem.getInstance().isType("com.vobject.appengine.java.io")) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append(URLGLOBALS.getWebappPath());
                stringBuffer.append(cloud);
                stringBuffer.append(PATH_GLOBALS.getInstance().DATA_PATH);
                var path = new AbPath(stringBuffer.toString(), StringUtil.getInstance().EMPTY_STRING);
                ;
                stringBuffer.delete(0, stringBuffer.length());
                stringBuffer.append(URLGLOBALS.getWebappPath());
                var realPath = new AbPath(stringBuffer.toString(), StringUtil.getInstance().EMPTY_STRING);
                ;
                var file = AbFile.createAbFileFromAbPath(path);
                ;
                var fileBasicArrayList = Directory.getInstance().search(file, true);
                ;
                var size = fileBasicArrayList.size();
                ;
                stringBuffer.delete(0, stringBuffer.length());
                stringBuffer.append("Searched: ");
                stringBuffer.append(path.toFileSystemString());
                stringBuffer.append(" BasicArrayList: ");
                stringBuffer.appendint(size);
                var portion = size / total + 1;
                ;
                var start = portion * current;
                ;
                var end = start + portion;
                ;
                if (end > size) {
                    end = size;
                }
                stringBuffer.append(" Section: ");
                stringBuffer.appendint(start);
                stringBuffer.append(" - ");
                stringBuffer.appendint(end);
                this.logUtil.putF(stringBuffer.toString(), this, "initialize()");
                var nextFile;
                ;
                for (var index = start; index < end; index++) {
                    nextFile = fileBasicArrayList.get(index);
                    if (nextFile.isDirectory()) {
                    }
                    else {
                        FileUtil.getInstance().copyToCloud(nextFile, path, realPath, cloud, overwriteNewer, overwriteAll);
                    }
                }
                this.logUtil.putF("Copied Files To Cloud", this, "initialize()");
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            this.logUtil.put("Unable to copy installer files into cloud", this, "initialize()", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
InitializeCloud.CLOUD = "cloud/";
InitializeCloud.CLOUD_UPDATE = "cloudupdate/";
