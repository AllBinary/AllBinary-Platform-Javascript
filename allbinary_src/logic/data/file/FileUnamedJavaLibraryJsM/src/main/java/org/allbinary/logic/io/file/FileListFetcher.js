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
import { DirectoryBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryBooleanFileVisitor.js';
//not GWT import const DirectoryBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.directory.DirectoryBooleanFileVisitor;
import { DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor.js';
//not GWT import const DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor;
import { DirectoryOrIncludeFileExtensionBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionBooleanFileVisitor.js';
//not GWT import const DirectoryOrIncludeFileExtensionBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionBooleanFileVisitor;
import { SubDirectory } from '../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory = globalThis.org.allbinary.logic.io.file.directory.SubDirectory;
import { VisitorFileFilter } from '../../../../../org/allbinary/logic/io/file/filter/VisitorFileFilter.js';
//not GWT import const VisitorFileFilter = globalThis.org.allbinary.logic.io.file.filter.VisitorFileFilter;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFile } from './AbFile.js';
//not GWT import - same folder const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
export class FileListFetcher extends Object {
    constructor() {
        super(...arguments);
        this.subDirectory = SubDirectory.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileListFetcher.instance;
    }
    getFiles(path) {
        try {
            var files = this.subDirectory.search(AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getFiles(path, includeExtensions) {
        try {
            var includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            var size = includeExtensions.length;
            ;
            for (var index = 0; index < size; index++) {
                includeExtensionBasicArrayList.add(includeExtensions[index]);
            }
            var visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            var files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getFiles(path, includeExtension) {
        try {
            var includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            includeExtensionBasicArrayList.add(includeExtension);
            var visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            var files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getFiles(path, pathIncludes, includeExtension) {
        try {
            var includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            includeExtensionBasicArrayList.add(includeExtension);
            var visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList, pathIncludes));
            ;
            var files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getTrackedFiles(path, includeExtensions) {
        try {
            var includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            var size = includeExtensions.length;
            ;
            for (var index = 0; index < size; index++) {
                includeExtensionBasicArrayList.add(includeExtensions[index]);
            }
            var visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            var files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getTrackedFiles(path, includeExtension) {
        try {
            var includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            includeExtensionBasicArrayList.add(includeExtension);
            var visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            var files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getDirectories(path) {
        try {
            var visitorFileFilter = new VisitorFileFilter(new DirectoryBooleanFileVisitor());
            ;
            var files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
            //: 
        }
        catch (e) {
            e.printStackTrace();
            console.log("Error: " + e + "\nMsg: " + e.message);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
}
FileListFetcher.instance = new FileListFetcher();
