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
import { MultiPlayerGameFeatureFactory } from '../../org/allbinary/game/configuration/feature/MultiPlayerGameFeatureFactory.js';
//not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PostGameCommandFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PostGameCommandFactory.instance;
    }
    addCommands(canvas) {
        MultiPlayerGameFeatureFactory.getInstance().addCommands(canvas);
    }
}
PostGameCommandFactory.instance = new PostGameCommandFactory();
