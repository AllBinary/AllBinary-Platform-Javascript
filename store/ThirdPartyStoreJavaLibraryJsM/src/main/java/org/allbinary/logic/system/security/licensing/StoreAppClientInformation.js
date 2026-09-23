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
//not GWT import const LongArrayIdentifierInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbeClientInformation } from './AbeClientInformation.js';
//not GWT import - same folder const AbeClientInformation
export class StoreAppClientInformation extends AbeClientInformation {
    constructor(name, version, specialName, shortName, longArrayIdentifier) {
        super(name, version, specialName, shortName);
        //For kotlin this is before the body of the constructor.
        this.longArrayIdentifier = longArrayIdentifier;
    }
    getLongArrayIdentifier() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.longArrayIdentifier;
    }
}
