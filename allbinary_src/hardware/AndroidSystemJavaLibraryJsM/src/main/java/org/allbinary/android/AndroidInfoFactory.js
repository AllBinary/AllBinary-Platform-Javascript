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
import { Object } from '../../../java/lang/Object.js';
import { Integer } from '../../../java/lang/Integer.js';
import { Build } from '../../../android/os/Build.js';
//not GWT import const Build = globalThis.android.os.Build;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidInfoFactory extends Object {
    constructor() {
        super(...arguments);
        this.version = Integer.parseInt(Build.VERSION.SDK);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidInfoFactory.instance;
    }
    getVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.version;
    }
}
AndroidInfoFactory.instance = new AndroidInfoFactory();
