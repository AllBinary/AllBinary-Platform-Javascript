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
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
import { FileUploadData } from '../../../../org/allbinary/logic/communication/http/file/upload/FileUploadData.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbIOSystem } from '../../../../org/allbinary/logic/io/AbIOSystem.js';
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DeleteCloud extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    delete(prePath, current, total) {
        try {
            if (AbIOSystem.getInstance().isType("com.vobject.appengine.java.io")) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append(URLGLOBALS.getWebappPath());
                stringBuffer.append(prePath);
                var path = new AbPath(stringBuffer.toString(), StringUtil.getInstance().EMPTY_STRING);
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
                    try {
                        if (nextFile.getPath().indexOf(FileUploadData.getInstance().FILE) < 0) {
                            nextFile.delete();
                        }
                        //: 
                    }
                    catch (e) {
                    }
                }
                this.logUtil.putF("Deleted Files From Cloud", this, "initialize()");
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
