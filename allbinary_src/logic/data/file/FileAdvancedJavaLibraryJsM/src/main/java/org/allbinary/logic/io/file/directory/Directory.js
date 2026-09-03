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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not GWT import const FileFilter = globalThis.java.io.FileFilter;
//not plain js import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
//not GWT import const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;
import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Directory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Directory.instance;
    }
    constructor() {
        super();
    }
    create(directoryAbPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.create(directoryAbPath.toFileSystemString());
        ;
    }
    //@Throws(Exception.constructor)
    remove(existingDirectoryAbPath) {
        this.remove(existingDirectoryAbPath.toFileSystemString());
    }
    create(directory) {
        try {
            var directoryFile = FileFactory.getInstance().getInstance(directory);
            ;
            if (!directoryFile.isDirectory()) {
                PreLogUtil.put("Creating Directories: " + directory, this, "create");
                if (!directoryFile.mkdirs()) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return false;
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
            //: 
        }
        catch (e) {
            PreLogUtil.putOE("Error Creating Directories: " + directory, this, "create", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    remove(existingDirectory) {
        var existingDirectoryFile = FileFactory.getInstance().getInstance(existingDirectory);
        ;
        if (existingDirectoryFile.isDirectory()) {
            if (existingDirectoryFile.list().length > 0) {
                throw new Exception("Did not remove category: " + existingDirectory + " because files exist");
            }
            else if (existingDirectoryFile.delete()) {
                PreLogUtil.put("Successfully Removed: " + existingDirectory, "Directory", "remove");
            }
        }
        else {
            throw new Exception("Category Directory Is Missing:" + existingDirectory);
        }
    }
    search(fileFilter, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(fileFilter, file, false);
        ;
    }
    search(fileFilter, file, isRecursiveSearch) {
        var fileList = new BasicArrayListD();
        ;
        var recursiveFileList;
        ;
        if (file.isDirectory()) {
            var fileArray = file.listFilesFileFilter(fileFilter);
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            var files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            var size = files.length;
            ;
            for (var index = 0; index < size; index++) {
                fileList.add(files[index]);
                if (isRecursiveSearch) {
                    recursiveFileList = this.search(fileFilter, files[index], isRecursiveSearch);
                    fileList.addAllList(recursiveFileList);
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return fileList;
    }
    search(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(file, false);
        ;
    }
    search(file, isRecursiveSearch) {
        var fileList = new BasicArrayListD();
        ;
        var recursiveFileList;
        ;
        if (file.isDirectory()) {
            var fileArray = file.listFiles();
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            var files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            for (var index = 0; index < files.length; index++) {
                fileList.add(files[index]);
                if (isRecursiveSearch) {
                    recursiveFileList = this.search(files[index], isRecursiveSearch);
                    fileList.addAllList(recursiveFileList);
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return fileList;
    }
    search(searchValue, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(searchValue, file, false);
        ;
    }
    search(searchValue, file, isRecursiveSearch) {
        var fileList = new BasicArrayListD();
        ;
        var recursiveFileList;
        ;
        if (file.isDirectory()) {
            var fileArray = file.listFiles();
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            var files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            for (var index = 0; index < files.length; index++) {
                if (files[index].getPath().indexOf(searchValue) >= 0) {
                    fileList.add(files[index]);
                }
                if (isRecursiveSearch) {
                    recursiveFileList = this.search(searchValue, files[index], isRecursiveSearch);
                    fileList.addAllList(recursiveFileList);
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return fileList;
    }
    search(level, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(level, file, false);
        ;
    }
    search(level, file, isRecursiveSearch) {
        var fileList = new BasicArrayListD();
        ;
        var recursiveFileList;
        ;
        if (file.isDirectory()) {
            var fileArray = file.listFiles();
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            var files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            for (var index = 0; index < files.length; index++) {
                fileList.add(files[index]);
                if (level <= 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return fileList;
                }
                recursiveFileList = this.search(level - 1, files[index], isRecursiveSearch);
                fileList.addAllList(recursiveFileList);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return fileList;
    }
}
Directory.instance = new Directory();
