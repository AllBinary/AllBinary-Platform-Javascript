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
//not GWT import const DatabaseConnectionInfoInterface
import { InitDbHelperFactory } from '../../../../org/allbinary/business/init/db/InitDbHelperFactory.js';
//not GWT import const LicensingException
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InitDb } from './InitDb.js';
//sameFolderImports - not GWT import - same folder const InitDb
//Warning you must have sql root access
export class DynamicInitDb extends InitDb {
    constructor(...args) {
        super();
        if (args.length === 1) {
            this.constructor$0(args[0]);
        }
        else if (args.length === 2) {
            this.constructor$1(args[0], args[1]);
        }
    }
    constructor$0(abeClientInformation) {
        this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation));
    }
    constructor$1(abeClientInformation, databaseConnectionInfoInterface) {
        this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation, databaseConnectionInfoInterface));
    }
}
