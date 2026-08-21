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
import { Object } from '../../../java/lang/Object.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameMode extends Object {
    constructor(name) {
        super();
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.setName(name);
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getName();
        ;
    }
}
GameMode.NONE = new GameMode(StringUtil.getInstance().NULL_STRING);
GameMode.SERVER = new GameMode("Server");
GameMode.CLIENT = new GameMode("Client");
