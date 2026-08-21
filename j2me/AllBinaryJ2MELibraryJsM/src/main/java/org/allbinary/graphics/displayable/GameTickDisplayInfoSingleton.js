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
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';
export class GameTickDisplayInfoSingleton extends Object {
    constructor() {
        super(...arguments);
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.lastWidth = this.displayInfoSingleton.getLastWidth();
        this.lastHeight = this.displayInfoSingleton.getLastHeight();
        this.lastHalfWidth = this.displayInfoSingleton.getLastHalfWidth();
        this.lastHalfHeight = this.displayInfoSingleton.getLastHalfHeight();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameTickDisplayInfoSingleton.instance;
    }
    update() {
        this.lastWidth = this.displayInfoSingleton.getLastWidth();
        this.lastHeight = this.displayInfoSingleton.getLastHeight();
        this.lastHalfWidth = this.displayInfoSingleton.getLastHalfWidth();
        this.lastHalfHeight = this.displayInfoSingleton.getLastHalfHeight();
    }
    getLastWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastWidth;
    }
    getLastHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastHeight;
    }
    getLastHalfWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastHalfWidth;
    }
    getLastHalfHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastHalfHeight;
    }
}
GameTickDisplayInfoSingleton.instance = new GameTickDisplayInfoSingleton();
