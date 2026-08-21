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
import { Object } from '../../../../../java/lang/Object.js';
import { CommandTextItemArrayFactory } from '../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js';
import { LimitCommandsVisitor } from '../../../../../org/allbinary/graphics/form/item/LimitCommandsVisitor.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameLimitedCommandTextItemArrayFactory extends Object {
    constructor() {
        super(...arguments);
        this.commandTextItemArrayFactory = new CommandTextItemArrayFactory(new LimitCommandsVisitor());
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameLimitedCommandTextItemArrayFactory.instance;
    }
    getCommandTextItemArrayFactory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commandTextItemArrayFactory;
    }
}
GameLimitedCommandTextItemArrayFactory.instance = new GameLimitedCommandTextItemArrayFactory();
