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
import { GenericOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WindowsOS extends GenericOperatingSystem {
    constructor() {
        super();
        this.scalable = true;
    }
    isAutoHide() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
