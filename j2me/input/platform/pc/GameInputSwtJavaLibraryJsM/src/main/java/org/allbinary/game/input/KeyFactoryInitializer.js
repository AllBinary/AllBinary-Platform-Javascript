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
import { Init } from '../../../../org/allbinary/init/Init.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class KeyFactoryInitializer extends Init {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    init() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.INIT);
        SmallIntegerSingletonFactory.getInstance().initWithRange(0x2D0, 6);
    }
}
