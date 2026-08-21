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
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
import { System } from '../../../../../java/lang/System.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class SystemProperties extends Object {
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SystemProperties.instance;
    }
    constructor() {
        super();
        this.OS_NAME = "os.name";
        this.OS_ARCH = "os.arch";
        this.OS_VERSION = "os.version";
    }
    /*actual*/ getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return System.getProperty(this.OS_NAME);
        ;
    }
    /*actual*/ getArch() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return System.getProperty(this.OS_ARCH);
        ;
    }
    /*actual*/ getVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return System.getProperty(this.OS_VERSION);
        ;
    }
    getUserHomePath() {
        throw new RuntimeException();
    }
}
SystemProperties.instance = new SystemProperties();
