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
import { PlayerType } from './PlayerType.js';
export class PlayerTypesFactory extends Object {
    constructor() {
        super(...arguments);
        this.PLAYER_TYPE_ONE = new PlayerType("Player Type One", 0);
        this.PLAYER_TYPE_TWO = new PlayerType("Player Type Two", 1);
        this.PLAYER_TYPE_THREE = new PlayerType("Player Type Three", 2);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlayerTypesFactory.SINGLETON;
    }
}
PlayerTypesFactory.SINGLETON = new PlayerTypesFactory();
