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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInfoData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInfoData.instance;
    }
    constructor() {
        super();
        this.GAME_TYPE = "GAME_TYPE";
        this.GAME_MODE = "GAME_MODE";
        this.PLAYER_TYPE = "PLAYER_TYPE";
        this.HIGHEST_LEVEL = "HIGHEST_LEVEL";
        this.CURRENT_LEVEL = "CURRENT_LEVEL";
        this.SOFTWARE_INFORMATION = "SOFTWARE_INFORMATION";
    }
}
GameInfoData.instance = new GameInfoData();
