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
//not GWT import const DirectoryBooleanFileVisitor
import { DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor.js';
//not GWT import const DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor
import { DirectoryOrIncludeFileExtensionBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionBooleanFileVisitor.js';
//not GWT import const DirectoryOrIncludeFileExtensionBooleanFileVisitor
import { SubDirectory } from '../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory
import { VisitorFileFilter } from '../../../../../org/allbinary/logic/io/file/filter/VisitorFileFilter.js';
//not GWT import const VisitorFileFilter
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFile } from './AbFile.js';
//sameFolderImports - not GWT import - same folder const AbFile
export class FileListFetcher extends Object {
    constructor() {
        super(...arguments);
        this.subDirectory = SubDirectory.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileListFetcher.instance;
    }
    getFiles(...args) {
        if (args.length === 1 && typeof args[0] === 'string')
            return this.getFiles$overload1(args[0]);
        if (args.length === 2 && typeof args[0] === 'string')
            return this.getFiles$overload2(args[0], args[1]);
        if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string')
            return this.getFiles$overload3(args[0], args[1]);
        if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string')
            return this.getFiles$overload4(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: getFiles');
    }
    getFiles$overload1(path) {
        try {
            let files = this.subDirectory.search(AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getFiles$overload2(path, includeExtensions) {
        try {
            let includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            let size = includeExtensions.length;
            ;
            for (let index = 0; index < size; index++) {
                includeExtensionBasicArrayList.add(includeExtensions[index]);
            }
            let visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            let files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getFiles$overload3(path, includeExtension) {
        try {
            let includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            includeExtensionBasicArrayList.add(includeExtension);
            let visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            let files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getFiles$overload4(path, pathIncludes, includeExtension) {
        try {
            let includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            includeExtensionBasicArrayList.add(includeExtension);
            let visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList, pathIncludes));
            ;
            let files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getTrackedFiles(...args) {
        if (args.length === 2 && typeof args[0] === 'string')
            return this.getTrackedFiles$overload1(args[0], args[1]);
        if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string')
            return this.getTrackedFiles$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: getTrackedFiles');
    }
    getTrackedFiles$overload1(path, includeExtensions) {
        try {
            let includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            let size = includeExtensions.length;
            ;
            for (let index = 0; index < size; index++) {
                includeExtensionBasicArrayList.add(includeExtensions[index]);
            }
            let visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            let files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getTrackedFiles$overload2(path, includeExtension) {
        try {
            let includeExtensionBasicArrayList = new BasicArrayListD();
            ;
            includeExtensionBasicArrayList.add(includeExtension);
            let visitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(includeExtensionBasicArrayList));
            ;
            let files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    getDirectories(path) {
        try {
            let visitorFileFilter = new VisitorFileFilter(new DirectoryBooleanFileVisitor());
            ;
            let files = this.subDirectory.search(visitorFileFilter, AbFile.createAbFile(path));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return files;
        }
        catch (caught) {
            {
                const e = caught;
                e.printStackTrace();
                console.log("Error: " + e + "\nMsg: " + e.message);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
}
FileListFetcher.instance = new FileListFetcher();
