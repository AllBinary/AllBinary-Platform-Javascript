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
import { InitDbHelperFactory } from '../../../../org/allbinary/business/init/db/InitDbHelperFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitDb } from './InitDb.js';
//Warning you must have sql root access
export class DynamicInitDb extends InitDb {
    constructor(abeClientInformation) {
        super();
        this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation));
    }
    constructor(abeClientInformation, databaseConnectionInfoInterface) {
        super();
        this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation, databaseConnectionInfoInterface));
    }
}
