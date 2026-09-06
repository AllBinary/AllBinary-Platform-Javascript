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
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;
import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;
//not plain js import { HttpData } 
const HttpData = globalThis.org.allbinary.logic.communication.http.HttpData;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;
import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
import { AbDataInputStream } from '../../../../../org/allbinary/logic/io/AbDataInputStream.js';
//not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;
import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;
import { DataOutputStreamFactory } from '../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { DatabaseEncoder } from '../../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
//not GWT import const DatabaseEncoder = globalThis.org.allbinary.logic.system.security.crypt.DatabaseEncoder;
import { WeakCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
//not GWT import const WeakCrypt = globalThis.org.allbinary.logic.system.security.crypt.WeakCrypt;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DbConnectionInfo } from './DbConnectionInfo.js';
//not GWT import - same folder const DbConnectionInfo = globalThis.org.allbinary.business.init.db.DbConnectionInfo;
export class DbInitInfo extends DbConnectionInfo {
    constructor(initFileName, read) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.directory = Directory.getInstance();
        this.httpData = HttpData.getInstance();
        this.GET_URL = "getUrl";
        this.PACKAGE = FREEBLISKET_PATH_GLOBALS.getInstance().DBINITPATH;
        this.hasRead = false;
        //For kotlin this is before the body of the constructor.
        this.initFileName = initFileName;
        if (read) {
            this.updateIfNeeded();
        }
        else {
            this.setHasRead(true);
        }
    }
    getUrl() {
        var url = super.getUrl();
        ;
        if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
            PreLogUtil.put(this.httpData.URL_LABEL + url, this, GET_URL);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return url;
    }
    //@Throws(Exception.constructor)
    write() {
        var PATH = new AbPath(URLGLOBALS.getWebappPath() + this.PACKAGE, StringUtil.getInstance().EMPTY_STRING);
        ;
        this.directory.create(PATH);
        var FILEABPATH = new AbPath(URLGLOBALS.getWebappPath() + this.PACKAGE, this.initFileName);
        ;
        try {
            var newFile = AbFile.createAbFileFromAbPath(FILEABPATH);
            ;
            newFile.createNewFile();
            var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(newFile);
            ;
            try {
                var cryptedJdbcDriver = new WeakCrypt(1).encrypt(this.getJdbcDriver()).getBytes();
                ;
                var cryptedName = new WeakCrypt(2).encrypt(this.getName()).getBytes();
                ;
                var cryptedUserName = new WeakCrypt(3).encrypt(this.getUserName()).getBytes();
                ;
                var cryptedPassword = new WeakCrypt(4).encrypt(this.getPassword()).getBytes();
                ;
                var cryptedSchema = new WeakCrypt(5).encrypt(this.getSchema()).getBytes();
                ;
                var cryptedServer = new WeakCrypt(6).encrypt(this.getServer()).getBytes();
                ;
                var cryptedPort = new WeakCrypt(7).encrypt(this.getPort()).getBytes();
                ;
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedJdbcDriver));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedName));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedUserName));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedPassword));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedSchema));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedServer));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(cryptedPort));
                this.hasRead = false;
                try {
                }
                finally {
                    StreamUtil.getInstance().close(dataOutputStream);
                }
                //: 
            }
            catch (e) {
                if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                    PreLogUtil.putOE("Failed Write: " + FILEABPATH.toString(), this, "write", e);
                }
            }
        }
        //@Throws(Exception.constructor)
        finally {
        }
        //@Throws(Exception.constructor)
        load();
        {
            var FILEABPATH = new AbPath(URLGLOBALS.getWebappPath() + this.PACKAGE, this.initFileName);
            ;
            try {
                var file = AbFile.createAbFileFromAbPath(FILEABPATH);
                ;
                if (file.isFile()) {
                    var iFile = new AbFileInputStream(file);
                    ;
                    var iData = new AbDataInputStream(iFile);
                    ;
                    try {
                        var decryptedJdbcDriver = decode.toCharArray();
                        ;
                        var decryptedName = decode.toCharArray();
                        ;
                        var decryptedUserName = decode.toCharArray();
                        ;
                        var decryptedPassword = decode.toCharArray();
                        ;
                        var decryptedSchema = decode.toCharArray();
                        ;
                        var decryptedServer = decode.toCharArray();
                        ;
                        var decryptedPort = decode.toCharArray();
                        ;
                        this.setJdbcDriver(new WeakCrypt(1).decrypt(decryptedJdbcDriver));
                        this.setName(new WeakCrypt(2).decrypt(decryptedName));
                        this.setUserName(new WeakCrypt(3).decrypt(decryptedUserName));
                        this.setPassword(new WeakCrypt(4).decrypt(decryptedPassword));
                        this.setSchema(new WeakCrypt(5).decrypt(decryptedSchema));
                        this.setServer(new WeakCrypt(6).decrypt(decryptedServer));
                        this.setPort(new WeakCrypt(7).decrypt(decryptedPort));
                        var stringUtil = StringUtil.getInstance();
                        ;
                        try {
                        }
                        finally {
                            StreamUtil.getInstance().close(iData);
                        }
                    }
                    finally {
                    }
                    {
                        this.hasRead = false;
                        if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
                            PreLogUtil.put("Not a File - Failed Loading: " + FILEABPATH.toString(), this, this.commonStrings.LOAD);
                        }
                    }
                    //: 
                }
                try { }
                catch (e) {
                    if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                        PreLogUtil.putOE("Failed Loading: " + FILEABPATH.toString(), this, this.commonStrings.LOAD, e);
                    }
                }
            }
            finally {
            }
        }
    }
    setHasRead(value) {
        this.hasRead = value;
    }
    updateIfNeeded() {
        try {
            if (!this.hasRead) {
                this.hasRead = true;
                this.load();
            }
            //: 
        }
        catch (e) {
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings.EXCEPTION, this, "updateIfNeeded", e);
            }
        }
    }
    getName() {
        this.updateIfNeeded();
        if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
            PreLogUtil.put("Name: " + super.getName(), this, "getName");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getName();
        ;
    }
    getUserName() {
        this.updateIfNeeded();
        if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().PRELOADER)) {
            PreLogUtil.put("Name: " + super.getUserName(), this, "getUserName");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getUserName();
        ;
    }
    getPassword() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getPassword();
        ;
    }
    getSchema() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getSchema();
        ;
    }
    getServer() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getServer();
        ;
    }
    getPort() {
        this.updateIfNeeded();
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getPort();
        ;
    }
}
