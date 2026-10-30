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
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const OutputStream
import { URLGLOBALS } from '../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory
import { AbDataOutputStream } from '../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream
import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream
import { AbFileLocalInputStream } from '../../../../../org/allbinary/logic/io/AbFileLocalInputStream.js';
//not GWT import const AbFileLocalInputStream
import { AbIOSystem } from '../../../../../org/allbinary/logic/io/AbIOSystem.js';
//not GWT import const AbIOSystem
import { DataOutputStreamFactory } from '../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory
import { FileStreamFactory } from '../../../../../org/allbinary/logic/io/FileStreamFactory.js';
//not GWT import const FileStreamFactory
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil
import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFile } from './AbFile.js';
//sameFolderImports - not GWT import - same folder const AbFile
//not plain js - same folder import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
import { FileWrapperUtil } from './FileWrapperUtil.js';
//sameFolderImports - not GWT import - same folder const FileWrapperUtil
import { FileUtil2 } from './FileUtil2.js';
//sameFolderImports - not GWT import - same folder const FileUtil2
//data/init/views/TestStore/template/type/genericTemplateObjectConfig.xml
export class FileUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileUtil.instance;
    }
    static getNewDirectory(fromFile) {
        let newDirectory = fromFile.getPath();
        ;
        let separatorChar = FilePathData.getInstance().PATH_START;
        ;
        if (AbIOSystem.getInstance().isType("com.vobject.appengine.java.io")) {
            separatorChar = AbPathData.getInstance().SEPARATOR;
        }
        let lastIndex = newDirectory.lastIndexOf(separatorChar);
        ;
        if (lastIndex >= newDirectory.length) {
            newDirectory = newDirectory.substring(0, newDirectory.length - 1);
            lastIndex = newDirectory.lastIndexOf(separatorChar);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newDirectory.substring(lastIndex, newDirectory.length);
        ;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.directory = Directory.getInstance();
        this.logConfigTypeFactory = LogConfigTypeFactory.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.streamUtil = StreamUtil.getInstance();
        this.WRITE_LABEL = "Write file: ";
        this.DATA_LABEL = " data: ";
        this.WRITE_METHOD = "write";
    }
    write(...args) {
        if (args.length === 2)
            return this.write$overload1(args[0], args[1]);
        if (args.length === 2)
            return this.write$overload2(args[0], args[1]);
        if (args.length === 3)
            return this.write$overload3(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string')
            return this.write$overload4(args[0], args[1]);
        throw new TypeError('No matching overload: write');
    }
    //@Throws(Exception.constructor)
    write$overload1(inputStream, file) {
        let dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(file);
        ;
        this.write(inputStream, dataOutputStream);
    }
    //@Throws(Exception.constructor)
    write$overload2(inputStream, dataOutputStream) {
        try {
            dataOutputStream = StreamUtil.getInstance().get(inputStream, dataOutputStream, new Array(16384));
            dataOutputStream.flush();
        }
        finally {
            StreamUtil.getInstance().close(dataOutputStream);
        }
    }
    //@Throws(Exception.constructor)
    write$overload3(inputStream, dataOutputStream, buffer) {
        try {
            dataOutputStream = StreamUtil.getInstance().get(inputStream, dataOutputStream, buffer);
            dataOutputStream.flush();
        }
        finally {
            StreamUtil.getInstance().close(dataOutputStream);
        }
    }
    copy(...args) {
        if (args.length === 2)
            return this.copy$overload1(args[0], args[1]);
        if (args.length === 2)
            return this.copy$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: copy');
    }
    //@Throws(Exception.constructor)
    copy$overload1(dataInputStream, dataOutputStream) {
        try {
            dataOutputStream = StreamUtil.getInstance().get(dataInputStream, dataOutputStream, new Array(16384));
            dataOutputStream.flush();
        }
        finally {
            StreamUtil.getInstance().close(dataOutputStream);
            StreamUtil.getInstance().close(dataInputStream);
        }
    }
    //@Throws(Exception.constructor)
    fixPath(file, path, realPath, cloud) {
        let beginIndex = file.getPath().indexOf(cloud) + cloud.length;
        ;
        let endIndex = file.getPath().indexOf(file.getName());
        ;
        let fixedPathString = realPath.toFileSystemString() + file.getPath().substring(beginIndex, endIndex);
        ;
        let fixedPath = new AbPath(fixedPathString, StringUtil.getInstance().EMPTY_STRING);
        ;
        this.directory.create(fixedPath);
        let string = fixedPath.toFileSystemString();
        ;
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
            this.logUtil.putF(string, this, "fixPath");
        }
        let outPath = new AbPath(string, file.getName());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return outPath;
    }
    copyToCloud(...args) {
        if (args.length === 4 && typeof args[3] === 'string')
            return this.copyToCloud$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 6 && typeof args[3] === 'string' && typeof args[4] === 'boolean' && typeof args[5] === 'boolean')
            return this.copyToCloud$overload2(args[0], args[1], args[2], args[3], args[4], args[5]);
        if (args.length === 2)
            return this.copyToCloud$overload3(args[0], args[1]);
        if (args.length === 4 && typeof args[2] === 'boolean' && typeof args[3] === 'boolean')
            return this.copyToCloud$overload4(args[0], args[1], args[2], args[3]);
        throw new TypeError('No matching overload: copyToCloud');
    }
    //@Throws(Exception.constructor)
    copyToCloud$overload1(file, path, realPath, cloud) {
        this.copyToCloud(file, path, realPath, cloud, false, false);
    }
    //@Throws(Exception.constructor)
    copyToCloud$overload2(file, path, realPath, cloud, overwriteNewer, overwriteAll) {
        try {
            let outPath = this.fixPath(file, path, realPath, cloud);
            ;
            let outFile = AbFile.createAbFileFromAbPath(outPath);
            ;
            if (!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            else {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Out File: ");
                    stringBuffer.append(outFile.getPath());
                    stringBuffer.append(" In File: ");
                    stringBuffer.append(file.getPath());
                    stringBuffer.append(" to cloud.");
                    this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyToCloud");
                }
            }
            let dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(outFile);
            ;
            let fileInputStream = new AbFileLocalInputStream(file);
            ;
            this.copy(fileInputStream, dataOutputStream);
        }
        catch (caught) {
            {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Error Copying File File: ");
                    stringBuffer.append(file.toString());
                    stringBuffer.append(" to cloud.");
                    this.logUtil.put(stringBuffer.toString(), getInstance(), "copyToCloud", e);
                }
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    copyToCloud$overload3(file, outFile) {
        this.copyToCloud(file, outFile, false, false);
    }
    //@Throws(Exception.constructor)
    copyToCloud$overload4(file, outFile, overwriteNewer, overwriteAll) {
        try {
            let stringBuffer = new StringMaker();
            ;
            if (!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            else {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    stringBuffer.delete(0, stringBuffer.length());
                    stringBuffer.append("Out File: ");
                    stringBuffer.append(outFile.getPath());
                    stringBuffer.append(" In File: ");
                    stringBuffer.append(file.getPath());
                    stringBuffer.append(" to cloud.");
                    this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyToCloud");
                }
            }
            let dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(outFile);
            ;
            let fileInputStream = new AbFileLocalInputStream(file);
            ;
            this.copy(fileInputStream, dataOutputStream);
        }
        catch (caught) {
            {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Error Copying File File: ");
                    stringBuffer.append(file.toString());
                    stringBuffer.append(" to cloud.");
                    this.logUtil.put(stringBuffer.toString(), getInstance(), "copyToCloud", e);
                }
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll) {
        if (toFile.exists()) {
            let stringBuffer = new StringMaker();
            ;
            if (overwriteAll) {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    stringBuffer.delete(0, stringBuffer.length());
                    stringBuffer.append("Overwriting File: ");
                    stringBuffer.append(toFile.getPath());
                    this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyFile");
                }
                toFile.delete();
                toFile.createNewFile();
            }
            else if (toFile.lastModified() < fromFile.lastModified() && overwriteNewer) {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    stringBuffer.delete(0, stringBuffer.length());
                    stringBuffer.append("Newer by: ");
                    stringBuffer.appendlong(fromFile.lastModified() - toFile.lastModified());
                    stringBuffer.append("ms ");
                    stringBuffer.append("Copying File: ");
                    stringBuffer.append(toFile.getPath());
                    this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyFile");
                }
                toFile.delete();
                toFile.createNewFile();
            }
            else {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    stringBuffer.delete(0, stringBuffer.length());
                    stringBuffer.append("File Already Exists");
                    if (overwriteNewer) {
                        stringBuffer.append(" And Is Not Older");
                    }
                    else {
                        stringBuffer.append(" And Not A In Overwrite Mode");
                    }
                    stringBuffer.append(CommonLabels.getInstance().COLON_SEP);
                    stringBuffer.append(toFile.getPath());
                    this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyFile");
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        else {
            toFile.createNewFile();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    copyFile(...args) {
        if (args.length === 2)
            return this.copyFile$overload1(args[0], args[1]);
        if (args.length === 4 && typeof args[2] === 'boolean' && typeof args[3] === 'boolean')
            return this.copyFile$overload2(args[0], args[1], args[2], args[3]);
        throw new TypeError('No matching overload: copyFile');
    }
    //@Throws(Exception.constructor)
    copyFile$overload1(fromFile, toFile) {
        this.copyFile(fromFile, toFile, false, false);
    }
    //@Throws(Exception.constructor)
    copyFile$overload2(fromFile, toFile, overwriteNewer, overwriteAll) {
        try {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                let stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Copying ");
                stringBuffer.appendlong(fromFile.length());
                stringBuffer.append(" bytes from File: ");
                stringBuffer.append(fromFile.getPath());
                stringBuffer.append(" to: ");
                stringBuffer.append(toFile.getPath());
                this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyFile");
            }
            if (!this.copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            let dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(toFile);
            ;
            let fileInputStream = new AbFileInputStream(fromFile);
            ;
            this.copy(fileInputStream, dataOutputStream);
        }
        catch (caught) {
            {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Error Copying File fromFile: ");
                    stringBuffer.append(fromFile.toString());
                    stringBuffer.append(" to: ");
                    stringBuffer.append(toFile.toString());
                    this.logUtil.put(stringBuffer.toString(), getInstance(), "copyFile", e);
                }
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    copyDirectoryPortion(fromDirectoryAbPath, toDirectoryAbPath, overwriteNewer, overwriteAll, current, total) {
        let file = AbFile.createAbFileFromAbPath(fromDirectoryAbPath);
        ;
        if (!file.isDirectory()) {
            throw new Exception("Not a directory: " + file.getPath());
        }
        let fileList = this.directory.search(file, true);
        ;
        let size = fileList.size();
        ;
        let stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Searched: ");
        stringBuffer.append(file.getPath());
        stringBuffer.append(" Total: ");
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
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
            this.logUtil.putF(stringBuffer.toString(), getInstance(), "copySomeFilesToDirectory()");
        }
        let nextFile;
        ;
        for (let index = start; index < end; index++) {
            nextFile = fileList.get(index);
            if (nextFile.isDirectory()) {
            }
            else {
                let path = new AbPath(nextFile.getPath(), StringUtil.getInstance().EMPTY_STRING).getPath();
                ;
                let beginIndex = fromDirectoryAbPath.getPath().length();
                ;
                if (path.indexOf(URLGLOBALS.getWebappPath()) < 0) {
                    beginIndex -= new AbPath(URLGLOBALS.getWebappPath(), StringUtil.getInstance().EMPTY_STRING).getPath().length();
                }
                let newPath = toDirectoryAbPath.toFileSystemString() + path.substring(beginIndex);
                ;
                let toFile = AbFile.createAbFileFromAbPath(new AbPath(newPath, StringUtil.getInstance().EMPTY_STRING));
                ;
                this.copyFile(nextFile, toFile, overwriteNewer, overwriteAll);
            }
        }
    }
    //@Throws(Exception.constructor)
    copyDirectory(fromFile, to) {
        try {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                let stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Copying Directory from: ");
                stringBuffer.append(fromFile.getPath());
                stringBuffer.append(" to: ");
                stringBuffer.append(to.getPath());
                this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyDirectory");
            }
            let newDirectory = FileUtil.getNewDirectory(fromFile);
            ;
            let newDirectoryAbPath = new AbPath(to.getPath() + AbPathData.getInstance().SEPARATOR + newDirectory, StringUtil.getInstance().EMPTY_STRING);
            ;
            if (!this.directory.create(newDirectoryAbPath)) {
                throw new Exception("Failed to create directory: " + newDirectoryAbPath);
            }
            let fileArray = FileWrapperUtil.wrapFiles(fromFile.listFiles());
            ;
            let size = fileArray.length;
            ;
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                let stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Copying ");
                stringBuffer.appendint(size);
                stringBuffer.append(" files from: ");
                stringBuffer.append(fromFile.getPath());
                stringBuffer.append(" to: ");
                stringBuffer.append(to.getPath());
                this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyDirectory");
            }
            let file;
            ;
            for (let index = 0; index < size; index++) {
                file = fileArray[index];
                if (file.isFile()) {
                    this.copyFile(file, AbFile.createAbFilePathAndName(newDirectoryAbPath.toString(), file.getName()));
                }
                else if (file.isDirectory()) {
                    this.copyDirectory(file, AbFile.createAbFileFromAbPath(newDirectoryAbPath));
                }
                else {
                    throw new Exception("File Copy Error");
                }
            }
        }
        catch (caught) {
            {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Error Copying Directory fromFile: ");
                    stringBuffer.append(fromFile.toString());
                    stringBuffer.append(" to: ");
                    stringBuffer.append(to.toString());
                    this.logUtil.put(stringBuffer.toString(), getInstance(), "copyDirectory", e);
                }
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    copy$overload2(fromAbPath, to) {
        let COPY = "copy";
        ;
        try {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                let stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Copying AbPaths from: ");
                stringBuffer.append(fromAbPath.toString());
                stringBuffer.append(" to: ");
                stringBuffer.append(to.toString());
                this.logUtil.putF(stringBuffer.toString(), getInstance(), COPY);
            }
            if (fromAbPath ==
                null) {
                throw new Exception("Cannot Copy From A Null Location");
            }
            if (to ==
                null) {
                throw new Exception("Cannot Copy To A Null Location");
            }
            let fromLocationFile = AbFile.createAbFileFromAbPath(fromAbPath);
            ;
            let toLocationFile = AbFile.createAbFileFromAbPath(to);
            ;
            if (fromLocationFile.isFile()) {
                if (toLocationFile.isDirectory()) {
                    let file = AbFile.createAbFileWithChild(toLocationFile, fromLocationFile.getName());
                    ;
                    this.copyFile(fromLocationFile, file);
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        let stringBuffer = new StringMaker();
                        ;
                        stringBuffer.append("Copied file=");
                        stringBuffer.append(fromLocationFile.getName());
                        stringBuffer.append(" from: ");
                        stringBuffer.append(fromLocationFile.getPath());
                        stringBuffer.append(" to: ");
                        stringBuffer.append(toLocationFile.getPath());
                        this.logUtil.putF(stringBuffer.toString(), getInstance(), COPY);
                    }
                }
                else {
                    this.copyFile(fromLocationFile, toLocationFile);
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        let stringBuffer = new StringMaker();
                        ;
                        stringBuffer.append("Copied file with new name ");
                        stringBuffer.append(" from: ");
                        stringBuffer.append(fromLocationFile.getPath());
                        stringBuffer.append(" to: ");
                        stringBuffer.append(toLocationFile.getPath());
                        this.logUtil.putF(stringBuffer.toString(), getInstance(), COPY);
                    }
                }
            }
            else if (fromLocationFile.isDirectory() && toLocationFile.isDirectory()) {
                if (fromAbPath.toFileSystemString()[fromAbPath.toFileSystemString().length() - 1] == java.io.File.separatorChar) {
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        this.logUtil.putF("Copying subdirectories", getInstance(), COPY);
                    }
                    let fileArray = FileWrapperUtil.wrapFiles(fromLocationFile.listFiles());
                    ;
                    for (let index = 0; index < fileArray.length; index++) {
                        let file = fileArray[index];
                        ;
                        if (file.isFile()) {
                            let aFile = AbFile.createAbFileWithChild(toLocationFile, file.getName());
                            ;
                            this.copyFile(file, aFile);
                        }
                        else if (file.isDirectory()) {
                            this.copyDirectory(file, toLocationFile);
                        }
                        else {
                            throw new Exception("File Copy Error");
                        }
                    }
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        this.logUtil.putF("Copied subdirectories", getInstance(), COPY);
                    }
                }
                else {
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        this.logUtil.putF("Copyinhg directory", getInstance(), COPY);
                    }
                    this.copyDirectory(fromLocationFile, toLocationFile);
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        this.logUtil.putF("Copied directory", getInstance(), COPY);
                    }
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        catch (caught) {
            {
                const e = caught;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                    let stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Error Copying fromAbPath: ");
                    stringBuffer.append(fromAbPath.toString());
                    stringBuffer.append(" to: ");
                    stringBuffer.append(to.toString());
                    this.logUtil.put(stringBuffer.toString(), getInstance(), COPY, e);
                }
                throw e;
            }
        }
    }
    shouldSkip(file, skipFiles) {
        let size = skipFiles.length;
        ;
        let skipFile;
        ;
        for (let index = 0; index < size; index++) {
            skipFile = skipFiles[index];
            if (file.getPath().compareTo(skipFile) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    write$overload4(filePath, string) {
        let dataOutputStream = null;
        ;
        try {
            PreLogUtil.put(new StringMaker().append(this.WRITE_LABEL).append(filePath).append(this.DATA_LABEL).append(string).toString(), this, this.WRITE_METHOD);
            let fileInputStreamFactory = FileStreamFactory.getInstance();
            ;
            let fileOutputStream = fileInputStreamFactory.getFileOutputStreamInstance(StringUtil.getInstance().EMPTY_STRING, filePath);
            ;
            dataOutputStream = new AbDataOutputStream(fileOutputStream);
            dataOutputStream.write(Array.from(new TextEncoder().encode(string), byte => (byte << 24) >> 24), 0, string.length);
            dataOutputStream.flush();
        }
        finally {
            StreamUtil.getInstance().close(dataOutputStream);
        }
    }
    loadFileAsList(file, max, byteArray1) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileUtil2.getInstance().loadFileAsList(file, max, byteArray1);
        ;
    }
}
FileUtil.instance = new FileUtil();
