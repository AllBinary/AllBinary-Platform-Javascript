/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
export class GamePersistanceStrings extends Object {
    constructor() {
        super(...arguments);
        this.SAVED_GAME_RECORD_ID = "_SG";
        this.SAVED_GAME_CONFIGURATION_RECORD_ID = "_SGC";
        this.DEFAULT_INPUT_MAPPING_RECORD_ID = "_DIM";
        this.SAVED_INPUT_CONFIGURATION_RECORD_ID = "_SIC";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GamePersistanceStrings.instance;
    }
}
GamePersistanceStrings.instance = new GamePersistanceStrings();
