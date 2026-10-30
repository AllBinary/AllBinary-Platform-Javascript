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
//not GWT import const URLGLOBALS
import { FileUploadData } from '../../../../org/allbinary/logic/communication/http/file/upload/FileUploadData.js';
//not GWT import const FileUploadData
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbIOSystem } from '../../../../org/allbinary/logic/io/AbIOSystem.js';
//not GWT import const AbIOSystem
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile
import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DeleteCloud extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    delete(prePath, current, total) {
        try {
            if (AbIOSystem.getInstance().isType("com.vobject.appengine.java.io")) {
                let stringBuffer = new StringMaker();
                ;
                stringBuffer.append(URLGLOBALS.getWebappPath());
                stringBuffer.append(prePath);
                let path = new AbPath(stringBuffer.toString(), StringUtil.getInstance().EMPTY_STRING);
                ;
                let file = AbFile.createAbFileFromAbPath(path);
                ;
                let fileBasicArrayList = Directory.getInstance().search(file, true);
                ;
                let size = fileBasicArrayList.size();
                ;
                stringBuffer.delete(0, stringBuffer.length());
                stringBuffer.append("Searched: ");
                stringBuffer.append(path.toFileSystemString());
                stringBuffer.append(" BasicArrayList: ");
                stringBuffer.appendint(size);
                let portion = globalThis.Math.trunc(size / total) + 1;
                ;
                let start = portion * current;
                ;
                let end = start + portion;
                ;
                if (end > size) {
                    end = size;
                }
                stringBuffer.append(" Section: ");
                stringBuffer.appendint(start);
                stringBuffer.append(" - ");
                stringBuffer.appendint(end);
                this.logUtil.putF(stringBuffer.toString(), this, "initialize()");
                let nextFile;
                ;
                for (let index = start; index < end; index++) {
                    nextFile = fileBasicArrayList.get(index);
                    try {
                        if (nextFile.getPath().indexOf(FileUploadData.getInstance().FILE) < 0) {
                            nextFile.delete();
                        }
                    }
                    catch (caught) {
                        {
                            const e = caught;
                        }
                    }
                }
                this.logUtil.putF("Deleted Files From Cloud", this, "initialize()");
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put("Unable to copy installer files into cloud", this, "initialize()", e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
}
