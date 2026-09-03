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
import { Object } from '../../../../../../../java/lang/Object.js';
import { LogConfigTypes } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
import { LogConfigTypeFactory } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogConfigType } from './LogConfigType.js';
//not GWT import const LogConfigType = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigType;
export class LogConfigTypeFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LogConfigTypeFactory.instance;
    }
    constructor() {
        super();
        this.NO_DESCRIPTION = "No Description";
        this.INIT_SERVER = new LogConfigType("Init Server", this.NO_DESCRIPTION);
        this.LOBBY_SERVER = new LogConfigType("Lobby Server", this.NO_DESCRIPTION);
        this.GAME_SERVER = new LogConfigType("Game Server", this.NO_DESCRIPTION);
        this.GAME_SIMULATOR = new LogConfigType("Game Simulator", this.NO_DESCRIPTION);
        this.CUSTOM_TYPES = new LogConfigType("Custom Types", this.NO_DESCRIPTION);
        LogConfigTypes.LOGGING.add(this.INIT_SERVER);
    }
}
LogConfigTypeFactory.instance = new LogConfigTypeFactory();
