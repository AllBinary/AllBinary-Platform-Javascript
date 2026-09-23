/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2009 AllBinary
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
import { GameInputMotionInfo } from '../../../../../../org/allbinary/android/input/motion/GameInputMotionInfo.js';
//not GWT import const GameInputMotionInfo
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInputMotionInfoAPI1 extends GameInputMotionInfo {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInputMotionInfoAPI1.instance;
    }
    constructor() {
        super(4, 1);
        //For kotlin this is before the body of the constructor.
    }
}
GameInputMotionInfoAPI1.instance = new GameInputMotionInfoAPI1();
