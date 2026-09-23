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
//not GWT import - same folder const AbFile
//not plain js - same folder import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
import { FileWrapperUtil } from './FileWrapperUtil.js';
//not GWT import - same folder const FileWrapperUtil
import { FileUtil2 } from './FileUtil2.js';
//not GWT import - same folder const FileUtil2
//data/init/views/TestStore/template/type/genericTemplateObjectConfig.xml
export class FileUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileUtil.instance;
    }
    static getNewDirectory(fromFile) {
        var newDirectory = fromFile.getPath();
        ;
        var separatorChar = FilePathData.getInstance().PATH_START;
        ;
        if (AbIOSystem.getInstance().isType("com.vobject.appengine.java.io")) {
            separatorChar = AbPathData.getInstance().SEPARATOR;
        }
        var lastIndex = newDirectory.lastIndexOf(separatorChar);
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
    //@Throws(Exception.constructor)
    write(inputStream, file) {
        var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(file);
        ;
        this.write(inputStream, dataOutputStream);
    }
    //@Throws(Exception.constructor)
    write(inputStream, dataOutputStream) {
        try {
            dataOutputStream = StreamUtil.getInstance().get(inputStream, dataOutputStream, new Array(16384));
            dataOutputStream.flush();
            try {
            }
            finally {
                StreamUtil.getInstance().close(dataOutputStream);
            }
        }
        //@Throws(Exception.constructor)
        finally {
        }
        //@Throws(Exception.constructor)
    }
    //@Throws(Exception.constructor)
    write(inputStream, dataOutputStream, buffer) {
        try {
            dataOutputStream = StreamUtil.getInstance().get(inputStream, dataOutputStream, buffer);
            dataOutputStream.flush();
            try {
            }
            finally {
                StreamUtil.getInstance().close(dataOutputStream);
            }
        }
        //@Throws(Exception.constructor)
        finally {
        }
        //@Throws(Exception.constructor)
        copy(dataInputStream, AbFileInputStream, dataOutputStream, AbDataOutputStream);
        {
            try {
                dataOutputStream = StreamUtil.getInstance().get(dataInputStream, dataOutputStream, new Array(16384));
                dataOutputStream.flush();
                try {
                }
                finally {
                    StreamUtil.getInstance().close(dataOutputStream);
                    StreamUtil.getInstance().close(dataInputStream);
                }
            }
            //@Throws(Exception.constructor)
            finally {
            }
            //@Throws(Exception.constructor)
            fixPath(file, AbFile, path, AbPath, realPath, AbPath, cloud, string);
            AbPath;
            {
                var beginIndex = file.getPath().indexOf(cloud) + cloud.length;
                ;
                var endIndex = file.getPath().indexOf(file.getName());
                ;
                var fixedPathString = realPath.toFileSystemString() + file.getPath().substring(beginIndex, endIndex);
                ;
                var fixedPath = new AbPath(fixedPathString, StringUtil.getInstance().EMPTY_STRING);
                ;
                this.directory.create(fixedPath);
                var string = fixedPath.toFileSystemString();
                ;
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    this.logUtil.putF(string, this, "fixPath");
                }
                var outPath = new AbPath(string, file.getName());
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return outPath;
            }
            //@Throws(Exception.constructor)
        }
        //@Throws(Exception.constructor)
    }
    //@Throws(Exception.constructor)
    copyToCloud(file, path, realPath, cloud) {
        this.copyToCloud(file, path, realPath, cloud, false, false);
    }
    //@Throws(Exception.constructor)
    copyToCloud(file, path, realPath, cloud, overwriteNewer, overwriteAll) {
        try {
            var outPath = this.fixPath(file, path, realPath, cloud);
            ;
            var outFile = AbFile.createAbFileFromAbPath(outPath);
            ;
            if (!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            else {
                if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                    var stringBuffer = new StringMaker();
                    ;
                    stringBuffer.append("Out File: ");
                    stringBuffer.append(outFile.getPath());
                    stringBuffer.append(" In File: ");
                    stringBuffer.append(file.getPath());
                    stringBuffer.append(" to cloud.");
                    this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyToCloud");
                }
            }
            var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(outFile);
            ;
            var fileInputStream = new AbFileLocalInputStream(file);
            ;
            this.copy(fileInputStream, dataOutputStream);
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Error Copying File File: ");
                stringBuffer.append(file.toString());
                stringBuffer.append(" to cloud.");
                this.logUtil.put(stringBuffer.toString(), getInstance(), "copyToCloud", e);
            }
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    copyToCloud(file, outFile) {
        this.copyToCloud(file, outFile, false, false);
    }
    //@Throws(Exception.constructor)
    copyToCloud(file, outFile, overwriteNewer, overwriteAll) {
        try {
            var stringBuffer = new StringMaker();
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
            var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(outFile);
            ;
            var fileInputStream = new AbFileLocalInputStream(file);
            ;
            this.copy(fileInputStream, dataOutputStream);
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Error Copying File File: ");
                stringBuffer.append(file.toString());
                stringBuffer.append(" to cloud.");
                this.logUtil.put(stringBuffer.toString(), getInstance(), "copyToCloud", e);
            }
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll) {
        if (toFile.exists()) {
            var stringBuffer = new StringMaker();
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
    //@Throws(Exception.constructor)
    copyFile(fromFile, toFile) {
        this.copyFile(fromFile, toFile, false, false);
    }
    //@Throws(Exception.constructor)
    copyFile(fromFile, toFile, overwriteNewer, overwriteAll) {
        try {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                var stringBuffer = new StringMaker();
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
            var dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(toFile);
            ;
            var fileInputStream = new AbFileInputStream(fromFile);
            ;
            this.copy(fileInputStream, dataOutputStream);
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                var stringBuffer = new StringMaker();
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
    //@Throws(Exception.constructor)
    copyDirectoryPortion(fromDirectoryAbPath, toDirectoryAbPath, overwriteNewer, overwriteAll, current, total) {
        var file = AbFile.createAbFileFromAbPath(fromDirectoryAbPath);
        ;
        if (!file.isDirectory()) {
            throw new Exception("Not a directory: " + file.getPath());
        }
        var fileList = this.directory.search(file, true);
        ;
        var size = fileList.size();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Searched: ");
        stringBuffer.append(file.getPath());
        stringBuffer.append(" Total: ");
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
        if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
            this.logUtil.putF(stringBuffer.toString(), getInstance(), "copySomeFilesToDirectory()");
        }
        var nextFile;
        ;
        for (var index = start; index < end; index++) {
            nextFile = fileList.get(index);
            if (nextFile.isDirectory()) {
            }
            else {
                var path = new AbPath(nextFile.getPath(), StringUtil.getInstance().EMPTY_STRING).getPath();
                ;
                var beginIndex = fromDirectoryAbPath.getPath().length();
                ;
                if (path.indexOf(URLGLOBALS.getWebappPath()) < 0) {
                    beginIndex -= new AbPath(URLGLOBALS.getWebappPath(), StringUtil.getInstance().EMPTY_STRING).getPath().length();
                }
                var newPath = toDirectoryAbPath.toFileSystemString() + path.substring(beginIndex);
                ;
                var toFile = AbFile.createAbFileFromAbPath(new AbPath(newPath, StringUtil.getInstance().EMPTY_STRING));
                ;
                this.copyFile(nextFile, toFile, overwriteNewer, overwriteAll);
            }
        }
    }
    //@Throws(Exception.constructor)
    copyDirectory(fromFile, to) {
        try {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Copying Directory from: ");
                stringBuffer.append(fromFile.getPath());
                stringBuffer.append(" to: ");
                stringBuffer.append(to.getPath());
                this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyDirectory");
            }
            var newDirectory = FileUtil.getNewDirectory(fromFile);
            ;
            var newDirectoryAbPath = new AbPath(to.getPath() + AbPathData.getInstance().SEPARATOR + newDirectory, StringUtil.getInstance().EMPTY_STRING);
            ;
            if (!this.directory.create(newDirectoryAbPath)) {
                throw new Exception("Failed to create directory: " + newDirectoryAbPath);
            }
            var fileArray = FileWrapperUtil.wrapFiles(fromFile.listFiles());
            ;
            var size = fileArray.length;
            ;
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                var stringBuffer = new StringMaker();
                ;
                stringBuffer.append("Copying ");
                stringBuffer.appendint(size);
                stringBuffer.append(" files from: ");
                stringBuffer.append(fromFile.getPath());
                stringBuffer.append(" to: ");
                stringBuffer.append(to.getPath());
                this.logUtil.putF(stringBuffer.toString(), getInstance(), "copyDirectory");
            }
            var file;
            ;
            for (var index = 0; index < size; index++) {
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
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                var stringBuffer = new StringMaker();
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
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    copy(fromAbPath, to) {
        var COPY = "copy";
        ;
        try {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                var stringBuffer = new StringMaker();
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
            var fromLocationFile = AbFile.createAbFileFromAbPath(fromAbPath);
            ;
            var toLocationFile = AbFile.createAbFileFromAbPath(to);
            ;
            if (fromLocationFile.isFile()) {
                if (toLocationFile.isDirectory()) {
                    var file = AbFile.createAbFileWithChild(toLocationFile, fromLocationFile.getName());
                    ;
                    this.copyFile(fromLocationFile, file);
                    if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILE)) {
                        var stringBuffer = new StringMaker();
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
                        var stringBuffer = new StringMaker();
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
                    var fileArray = FileWrapperUtil.wrapFiles(fromLocationFile.listFiles());
                    ;
                    for (var index = 0; index < fileArray.length; index++) {
                        var file = fileArray[index];
                        ;
                        if (file.isFile()) {
                            var aFile = AbFile.createAbFileWithChild(toLocationFile, file.getName());
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
            //: 
        }
        catch (e) {
            if (org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(this.logConfigTypeFactory.FILEERROR)) {
                var stringBuffer = new StringMaker();
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
    shouldSkip(file, skipFiles) {
        var size = skipFiles.length;
        ;
        var skipFile;
        ;
        for (var index = 0; index < size; index++) {
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
    write(filePath, string) {
        var dataOutputStream = null;
        ;
        try {
            PreLogUtil.put(new StringMaker().append(this.WRITE_LABEL).append(filePath).append(this.DATA_LABEL).append(string).toString(), this, this.WRITE_METHOD);
            var fileInputStreamFactory = FileStreamFactory.getInstance();
            ;
            var fileOutputStream = fileInputStreamFactory.getFileOutputStreamInstance(StringUtil.getInstance().EMPTY_STRING, filePath);
            ;
            dataOutputStream = new AbDataOutputStream(fileOutputStream);
            dataOutputStream.write(string.getBytes(), 0, string.length);
            dataOutputStream.flush();
            try {
            }
            finally {
                StreamUtil.getInstance().close(dataOutputStream);
            }
        }
        finally {
        }
    }
    loadFileAsList(file, max, byteArray1) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileUtil2.getInstance().loadFileAsList(file, max, byteArray1);
        ;
    }
}
FileUtil.instance = new FileUtil();
