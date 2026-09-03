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
//not GWT import const DatabaseConnectionInfoInterface = globalThis.org.allbinary.business.init.db.DatabaseConnectionInfoInterface;
import { InitDbHelperFactory } from '../../../../org/allbinary/business/init/db/InitDbHelperFactory.js';
//not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitDb } from './InitDb.js';
//not GWT import const InitDb = globalThis.org.allbinary.business.installer.InitDb;
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
