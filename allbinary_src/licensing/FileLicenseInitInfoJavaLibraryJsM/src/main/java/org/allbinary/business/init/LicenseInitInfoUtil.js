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
import { Exception } from '../../../../java/lang/Exception.js';
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbDataInputStream } from '../../../../org/allbinary/logic/io/AbDataInputStream.js';
import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
import { FileStreamFactory } from '../../../../org/allbinary/logic/io/FileStreamFactory.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { DatabaseEncoder } from '../../../../org/allbinary/logic/system/security/crypt/DatabaseEncoder.js';
import { WeakCrypt } from '../../../../org/allbinary/logic/system/security/crypt/WeakCrypt.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LicenseInitInfo } from './LicenseInitInfo.js';
export class LicenseInitInfoUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.stringUtil = StringUtil.getInstance();
        this.INITFILENAME = "licenseinitdata.dat";
        this.ABOUT = "about";
        this.PRIVACY_POLICY = "privacy_policy";
        this.filePath = this.stringUtil.EMPTY_STRING;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LicenseInitInfoUtil.instance;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setFilePath(filePath) {
        this.filePath = filePath;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    write(initData) {
        if (this.filePath == this.stringUtil.EMPTY_STRING) {
            this.filePath = URLGLOBALS.getMainPath() + PATH_GLOBALS.getInstance().INIT_PATH;
        }
        try {
            var tsUtil = TsUtil.getInstance();
            ;
            var dataOutputStream = DataOutputStreamFactory.getInstance().getInstance(this.filePath, this.INITFILENAME);
            ;
            var licenseIdCrypted = tsUtil.getByteArray(new WeakCrypt(1).encrypt(initData.getLicenseId()));
            ;
            dataOutputStream.writeUTF(DatabaseEncoder.encode(licenseIdCrypted));
            var numberOfLicenseServers = initData.getNumberOfServers();
            ;
            dataOutputStream.writeInt(numberOfLicenseServers);
            var licenseServerCrypted;
            ;
            for (var index = 0; index < numberOfLicenseServers; index++) {
                licenseServerCrypted = tsUtil.getByteArray(new WeakCrypt(3).encrypt(initData.getServer(index)));
                dataOutputStream.writeUTF(DatabaseEncoder.encode(licenseServerCrypted));
            }
            //: 
        }
        catch (e) {
            this.logUtil.put("Command Failed: " + this.INITFILENAME, this, "write", e);
            FileStreamFactory.getInstance().delete(this.filePath, this.INITFILENAME);
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    read() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.readAgain(0);
        ;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    readAgain(initializeCounter) {
        var METHOD_NAME = "readAgain";
        ;
        if (this.filePath == this.stringUtil.EMPTY_STRING) {
            this.filePath = URLGLOBALS.getMainPath() + PATH_GLOBALS.getInstance().INIT_PATH;
        }
        try {
            this.logUtil.putF("LicenseInitInfo File: " + this.INITFILENAME, this, METHOD_NAME);
            var fileStreamFactory = FileStreamFactory.getInstance();
            ;
            var iFile = fileStreamFactory.getFileInputStreamInstance(this.filePath, this.INITFILENAME);
            ;
            if (iFile !=
                null) {
                var iData = new AbDataInputStream(iFile);
                ;
                var initInfo = new LicenseInitInfo();
                ;
                var decodedByteArray = DatabaseEncoder.decode(iData.readUTF());
                ;
                var licenseIdDecoded = String.fromCharCode(...decodedByteArray);
                ;
                initInfo.setLicenseId(new WeakCrypt(1).decrypt(licenseIdDecoded));
                var numberOfLicenseServers = iData.readInt();
                ;
                var NEXT_FILE = "Next License Server From File: ";
                ;
                var licenseServerDecoded;
                ;
                for (var index = 0; index < numberOfLicenseServers; index++) {
                    decodedByteArray = DatabaseEncoder.decode(iData.readUTF());
                    licenseServerDecoded = String.fromCharCode(...decodedByteArray);
                    initInfo.setServer(new WeakCrypt(3).decrypt(licenseServerDecoded), index);
                    this.logUtil.putF(NEXT_FILE + initInfo.getServer(index), this, METHOD_NAME);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return initInfo;
            }
            else {
                throw new Exception("Could Not Load License InitInfo: " + this.INITFILENAME);
            }
            //: 
        }
        catch (e) {
            try {
                this.logUtil.put("Command Failed: " + this.INITFILENAME, this, METHOD_NAME, e);
                //: 
            }
            catch (e2) {
                this.logUtil.put("LicenseInitInfo Read Retry: " + this.INITFILENAME, this, "readAgain()", e2);
            }
            throw new Exception("LicenseInitInfo Read Error: " + this.INITFILENAME);
        }
    }
    getFilePath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.filePath;
    }
}
LicenseInitInfoUtil.instance = new LicenseInitInfoUtil();
