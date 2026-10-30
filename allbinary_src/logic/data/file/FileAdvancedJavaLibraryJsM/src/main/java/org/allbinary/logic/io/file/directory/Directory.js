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
//not GWT import const FileFilter
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not GWT import const AbFile
import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
//not GWT import const FileFactory
import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
//not GWT import const AbPath
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
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
    create(...args) {
        if (args.length === 1)
            return this.create$overload1(args[0]);
        if (args.length === 1 && typeof args[0] === 'string')
            return this.create$overload2(args[0]);
        throw new TypeError('No matching overload: create');
    }
    create$overload1(directoryAbPath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.create(directoryAbPath.toFileSystemString());
        ;
    }
    remove(...args) {
        if (args.length === 1)
            return this.remove$overload1(args[0]);
        if (args.length === 1 && typeof args[0] === 'string')
            return this.remove$overload2(args[0]);
        throw new TypeError('No matching overload: remove');
    }
    //@Throws(Exception.constructor)
    remove$overload1(existingDirectoryAbPath) {
        this.remove(existingDirectoryAbPath.toFileSystemString());
    }
    create$overload2(directory) {
        try {
            let directoryFile = FileFactory.getInstance().getInstance(directory);
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
        }
        catch (caught) {
            {
                const e = caught;
                PreLogUtil.putOE("Error Creating Directories: " + directory, this, "create", e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
    }
    //@Throws(Exception.constructor)
    remove$overload2(existingDirectory) {
        let existingDirectoryFile = FileFactory.getInstance().getInstance(existingDirectory);
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
    search(...args) {
        if (args.length === 2)
            return this.search$overload1(args[0], args[1]);
        if (args.length === 3 && typeof args[2] === 'boolean')
            return this.search$overload2(args[0], args[1], args[2]);
        if (args.length === 1)
            return this.search$overload3(args[0]);
        if (args.length === 2 && typeof args[1] === 'boolean')
            return this.search$overload4(args[0], args[1]);
        if (args.length === 2 && typeof args[0] === 'string')
            return this.search$overload5(args[0], args[1]);
        if (args.length === 3 && typeof args[0] === 'string' && typeof args[2] === 'boolean')
            return this.search$overload6(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.search$overload7(args[0], args[1]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'boolean')
            return this.search$overload8(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: search');
    }
    search$overload1(fileFilter, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(fileFilter, file, false);
        ;
    }
    search$overload2(fileFilter, file, isRecursiveSearch) {
        let fileList = new BasicArrayListD();
        ;
        let recursiveFileList;
        ;
        if (file.isDirectory()) {
            let fileArray = file.listFilesFileFilter(fileFilter);
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            let files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            let size = files.length;
            ;
            for (let index = 0; index < size; index++) {
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
    search$overload3(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(file, false);
        ;
    }
    search$overload4(file, isRecursiveSearch) {
        let fileList = new BasicArrayListD();
        ;
        let recursiveFileList;
        ;
        if (file.isDirectory()) {
            let fileArray = file.listFiles();
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            let files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            for (let index = 0; index < files.length; index++) {
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
    search$overload5(searchValue, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(searchValue, file, false);
        ;
    }
    search$overload6(searchValue, file, isRecursiveSearch) {
        let fileList = new BasicArrayListD();
        ;
        let recursiveFileList;
        ;
        if (file.isDirectory()) {
            let fileArray = file.listFiles();
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            let files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            for (let index = 0; index < files.length; index++) {
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
    search$overload7(level, file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.search(level, file, false);
        ;
    }
    search$overload8(level, file, isRecursiveSearch) {
        let fileList = new BasicArrayListD();
        ;
        let recursiveFileList;
        ;
        if (file.isDirectory()) {
            let fileArray = file.listFiles();
            ;
            if (fileArray ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            let files = FileWrapperUtil.wrapFiles(fileArray);
            ;
            if (files ==
                null) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return fileList;
            }
            for (let index = 0; index < files.length; index++) {
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
