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
import { ClassLoader } from '../../../../../java/lang/ClassLoader.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NativeLibraryClassLoader extends ClassLoader {
    constructor(parent) {
        super(parent);
        this.message = "This Class Loader Does Not Load Classes - Only For Loading and Unloading of Native Libraries";
        //For kotlin this is before the body of the constructor.
    }
}
