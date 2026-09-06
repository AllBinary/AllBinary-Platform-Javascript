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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const OutputStream = globalThis.java.io.OutputStream;
import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil = globalThis.org.allbinary.business.init.LicenseInitInfoUtil;
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { FileStreamFactory } from '../../../../../../org/allbinary/logic/io/FileStreamFactory.js';
//not GWT import const FileStreamFactory = globalThis.org.allbinary.logic.io.FileStreamFactory;
import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;
import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
//not GWT import const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;
import { SimpleFileUtil } from '../../../../../../org/allbinary/logic/io/file/SimpleFileUtil.js';
//not GWT import const SimpleFileUtil = globalThis.org.allbinary.logic.io.file.SimpleFileUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LicenseServerInitFileUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.NULL_OUTPUT_STREAM = SimpleFileUtil.nullOutputStream();
    }
    init() {
        try {
            var filePath = LicenseInitInfoUtil.getInstance().INITFILENAME;
            ;
            LicenseInitInfoUtil.getInstance().setFilePath(StringUtil.getInstance().EMPTY_STRING);
            if (FileFactory.getInstance().isFile(filePath)) {
                this.logUtil.putF("Using Existing License File", this, this.commonStrings.INIT);
            }
            else {
                this.write();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
        }
    }
    write() {
        var fileOutputStream = this.NULL_OUTPUT_STREAM;
        ;
        try {
            var resourceUtil = ResourceUtil.getInstance();
            ;
            var filePath = LicenseInitInfoUtil.getInstance().INITFILENAME;
            ;
            var inputStream = resourceUtil.getResourceAsStream(filePath);
            ;
            this.logUtil.putF("Writing Default License File", this, this.commonStrings.INIT);
            var fileStreamFactory = FileStreamFactory.getInstance();
            ;
            fileOutputStream = fileStreamFactory.getFileOutputStreamInstance(StringUtil.getInstance().EMPTY_STRING, filePath);
            var b = 0;
            ;
            var index = 0;
            ;
            while (true) {
                b = inputStream.read();
                if (b == -1) {
                    break;
                }
                fileOutputStream.write(b);
                index++;
            }
            this.logUtil.putF("Wrote Bytes: " + index, this, this.commonStrings.INIT);
            fileOutputStream.flush();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
        }
        finally {
            StreamUtil.getInstance().close(fileOutputStream);
        }
    }
}
