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
import { ZipEntry } from '../../../../../../java/util/zip/ZipEntry.js';
//not GWT import const ZipEntry = globalThis.java.util.zip.ZipEntry;
import { ZipInputStream } from '../../../../../../java/util/zip/ZipInputStream.js';
//not GWT import const ZipInputStream = globalThis.java.util.zip.ZipInputStream;
import { ZipOutputStream } from '../../../../../../java/util/zip/ZipOutputStream.js';
//not GWT import const ZipOutputStream = globalThis.java.util.zip.ZipOutputStream;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;
import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;
import { AbFileOutputStream } from '../../../../../../org/allbinary/logic/io/AbFileOutputStream.js';
//not GWT import const AbFileOutputStream = globalThis.org.allbinary.logic.io.AbFileOutputStream;
import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;
import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { FileUtil } from '../../../../../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ZipFileUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ZipFileUtil.instance;
    }
    create(outFilename, fileBasicArrayList) {
        try {
            var zipFile = AbFile.createAbFile(outFilename);
            ;
            if (zipFile.exists()) {
                zipFile.delete();
            }
            zipFile.createNewFile();
            var outputStream = new ZipOutputStream(AbFileOutputStream.createFromAbFile(zipFile));
            ;
            var streamUtil = StreamUtil.getInstance();
            ;
            var stringBuffer = new StringMaker();
            ;
            var byteArray = new Array(16384);
            ;
            var fileInputStream;
            ;
            var size = fileBasicArrayList.size();
            ;
            var current = 0;
            ;
            for (var i = 0; i < size; i++) {
                var file = fileBasicArrayList.get(i);
                ;
                if (file.isDirectory()) {
                }
                else if (file.isFile()) {
                    stringBuffer.delete(0, stringBuffer.length());
                    stringBuffer.appendint(current);
                    stringBuffer.append(" Creating Zip File Entry: ");
                    stringBuffer.append(file.getPath());
                    this.logUtil.putF(stringBuffer.toString(), this, "create()");
                    try {
                        fileInputStream = new AbFileInputStream(file);
                        outputStream.putNextEntry(new ZipEntry(file.getPath()));
                        streamUtil.get(fileInputStream, outputStream, byteArray);
                        outputStream.closeEntry();
                        streamUtil.close(fileInputStream);
                        //: 
                    }
                    catch (e) {
                        this.logUtil.putF("Skipping File (Probably Local): " + file.getPath(), this, "create()");
                    }
                }
                current++;
            }
            streamUtil.close(outputStream);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "create", e);
        }
    }
    //@Throws(Exception.constructor)
    unzip(path, zipFile, fileName) {
        var buffer = new Array(16384);
        ;
        var inputStream = null;
        ;
        try {
            inputStream = new ZipInputStream(new AbFileInputStream(zipFile));
            var zipEntry;
            ;
            var stringBuffer = new StringMaker();
            ;
            var fileUtil = FileUtil.getInstance();
            ;
            while ((zipEntry = inputStream.getNextEntry()) !=
                null) {
                var entryName = zipEntry.getName();
                ;
                if (zipEntry.isDirectory()) {
                }
                else {
                    var entryFile = AbFile.createAbFile(path + entryName);
                    ;
                    stringBuffer.delete(0, stringBuffer.length());
                    stringBuffer.append("ZipEntry Name: ");
                    stringBuffer.append(entryName);
                    stringBuffer.append(" isFile: ");
                    stringBuffer.appendboolean(entryFile.isFile());
                    stringBuffer.append(" isDirectory: ");
                    stringBuffer.appendboolean(entryFile.isDirectory());
                    stringBuffer.append(" getParent: ");
                    stringBuffer.append(entryFile.getParent());
                    this.logUtil.putF(stringBuffer.toString(), this, "unzip");
                    var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(entryFile);
                    ;
                    fileUtil.write(inputStream, dataOutputStream, buffer);
                }
                inputStream.closeEntry();
            }
            try {
            }
            finally {
                StreamUtil.getInstance().close(inputStream);
            }
        }
        finally {
        }
    }
}
ZipFileUtil.instance = new ZipFileUtil();
