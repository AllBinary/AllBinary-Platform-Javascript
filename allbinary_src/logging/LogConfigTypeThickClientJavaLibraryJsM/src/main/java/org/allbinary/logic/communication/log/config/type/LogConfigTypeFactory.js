/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { Object } from '../../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigType } from './LogConfigType.js';
//not GWT import - same folder const LogConfigType = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigType;
import { LogConfigTypes } from './LogConfigTypes.js';
//not GWT import - same folder const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
export class LogConfigTypeFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LogConfigTypeFactory.instance;
    }
    constructor() {
        super();
        this.NO_DESCRIPTION = "No Description";
        this.OS = new LogConfigType("Operating System", this.NO_DESCRIPTION);
        this.FACTORYERROR = new LogConfigType("Factory Error", this.NO_DESCRIPTION);
        this.FILE = new LogConfigType("File", this.NO_DESCRIPTION);
        this.FILEERROR = new LogConfigType("File Error", this.NO_DESCRIPTION);
        this.IDLOGGING = new LogConfigType("ID Logging", this.NO_DESCRIPTION);
        this.REPLACE = new LogConfigType("Replace", this.NO_DESCRIPTION);
        this.REPLACE_INFO = new LogConfigType("Replace Info", this.NO_DESCRIPTION);
        this.REPLACEERROR = new LogConfigType("Replace Error", this.NO_DESCRIPTION);
        LogConfigTypes.LOGGING.add(OS);
        LogConfigTypes.LOGGING.add(this.FACTORYERROR);
    }
}
LogConfigTypeFactory.instance = new LogConfigTypeFactory();
