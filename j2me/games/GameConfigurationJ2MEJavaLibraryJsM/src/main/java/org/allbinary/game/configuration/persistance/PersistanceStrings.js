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
export class PersistanceStrings extends Object {
    constructor() {
        super(...arguments);
        this.SAVING = "Saving: ";
        this.NUMBER_OF_RECORDS = "Number of records: ";
        this.LOADING_ID = "Loading data with id: ";
        this.LOAD_ALL = "loadAll";
        this.DELETING_WITH_ID = "Deleting data with id: ";
        this.CLOSING_RECORDSTORE = "Closing RecordStore";
        this.NOT_SAVING = "Not Saving: ";
        this.ERROR_LOADING = "Error Loading gameActionInput: ";
        this.ERROR_LOADING_ID = "Error Loading id: ";
        this.ID = " id: ";
        this.GAME_ACTION_INPUT = " GameActionInput: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PersistanceStrings.instance;
    }
}
PersistanceStrings.instance = new PersistanceStrings();
