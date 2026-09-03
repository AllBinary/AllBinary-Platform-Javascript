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
import { Object } from '../../java/lang/Object.js';
import { GameCommandsFactory } from '../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;
import { MultiPlayerGameFeatureFactory } from '../../org/allbinary/game/configuration/feature/MultiPlayerGameFeatureFactory.js';
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;
import { OperatingSystemFactory } from '../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PostGameCommandFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PostGameCommandFactory.instance;
    }
    addCommands(canvas) {
        var operatingSystemInterface = OperatingSystemFactory.getInstance().getOperatingSystemInstance();
        ;
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        if (!operatingSystemInterface.isOverScan()) {
            canvas.addCommand(gameCommandsFactory.TOGGLE_KEYBOARD);
        }
        MultiPlayerGameFeatureFactory.getInstance().addCommands(canvas);
    }
}
PostGameCommandFactory.instance = new PostGameCommandFactory();
