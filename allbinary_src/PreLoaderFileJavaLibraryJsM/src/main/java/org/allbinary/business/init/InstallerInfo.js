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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AbDataInputStream } from '../../../../org/allbinary/logic/io/AbDataInputStream.js';
//not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;
import { AbFileLocalInputStream } from '../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
//not GWT import const AbFileLocalInputStream = globalThis.org.allbinary.logic.io.AbFileLocalInputStream;
import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { DatabaseEncoder } from '../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
//not GWT import const DatabaseEncoder = globalThis.org.allbinary.logic.system.security.crypt.DatabaseEncoder;
import { WeakCrypt } from '../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
//not GWT import const WeakCrypt = globalThis.org.allbinary.logic.system.security.crypt.WeakCrypt;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InstallerInfo extends Object {
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static setHasRead(value) {
        InstallerInfo.hasRead = value;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    write() {
        var FILEABPATH = new AbPath(URLGLOBALS.getMainPath() + InstallerInfo.PACKAGE, InstallerInfo.INITFILENAME);
        ;
        try {
            var newFile = AbFile.createAbFileFromAbPath(FILEABPATH);
            ;
            newFile.createNewFile();
            var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(newFile);
            ;
            var cryptedUserName = new WeakCrypt(1).encrypt(this.getUserName()).getBytes();
            ;
            var cryptedPassword = new WeakCrypt(2).encrypt(this.getPassword()).getBytes();
            ;
            dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedUserName));
            dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedPassword));
            InstallerInfo.hasRead = false;
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                this.logUtil.putF("Failed", this, "write");
            }
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    read() {
        var FILEABPATH = new AbPath(URLGLOBALS.getMainPath() + InstallerInfo.PACKAGE, InstallerInfo.INITFILENAME);
        ;
        try {
            var file = AbFile.createAbFileFromAbPath(FILEABPATH);
            ;
            if (file.isFile()) {
                var iFile = new AbFileLocalInputStream(file);
                ;
                var iData = new AbDataInputStream(iFile);
                ;
                var decryptedUserName = decode.toCharArray();
                ;
                var decryptedPassword = decode.toCharArray();
                ;
                this.setUserName(new WeakCrypt(1).decrypt(decryptedUserName));
                this.setPassword(new WeakCrypt(2).decrypt(decryptedPassword));
            }
            else {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().PRELOADER)) {
                    this.logUtil.putF("Not a File - Failed Loading: " + FILEABPATH.toString(), this, "read");
                }
            }
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                this.logUtil.putF("Failed", this, "read");
            }
        }
    }
    setUserName(userName) {
        InstallerInfo.userName = userName;
    }
    setPassword(password) {
        InstallerInfo.password = password;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    updateIfNeeded() {
        if (!InstallerInfo.hasRead) {
            InstallerInfo.hasRead = true;
            this.read();
            if (InstallerInfo.userName ==
                null
                || InstallerInfo.password ==
                    null) {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().PRELOADER)) {
                    this.logUtil.putF("Failed", this, "updateIfNeeded");
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    getUserName() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return InstallerInfo.userName;
    }
    //@Throws(Exception.constructor)
    getPassword() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return InstallerInfo.password;
    }
    //@Throws(Exception.constructor)
    isValid(userName, password) {
        this.updateIfNeeded();
        if (this.userName !=
            null
            && this.userName.compareTo(userName) == 0 && this.password !=
            null
            && this.password.compareTo(password) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
InstallerInfo.instance = new InstallerInfo();
InstallerInfo.INITFILENAME = "installerdata.dat";
InstallerInfo.PACKAGE = PATH_GLOBALS.getInstance().INIT_PATH;
InstallerInfo.userName = StringUtil.getInstance().EMPTY_STRING;
InstallerInfo.password = StringUtil.getInstance().EMPTY_STRING;
InstallerInfo.hasRead = false;
