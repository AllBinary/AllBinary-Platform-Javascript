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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RemoteHighScoresData extends Object {
    constructor() {
        super(...arguments);
        this.HIGH_SCORES = "HIGH_SCORES";
        this.CUSTOMER_USER_NAME = "CUSTOMER_USER_NAME";
        this.DISPLAY_NAME = "DISPLAY_NAME";
        this.SCORE = "SCORE";
        this.GAME_INFO = "GAME_INFO";
        this.GAME_CONFIGURATION = "GAME_CONFIGURATION";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RemoteHighScoresData.SINGLETON;
    }
}
RemoteHighScoresData.SINGLETON = new RemoteHighScoresData();
