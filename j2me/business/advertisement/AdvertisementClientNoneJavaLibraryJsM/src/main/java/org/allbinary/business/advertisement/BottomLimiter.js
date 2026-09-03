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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameAdStateFactory } from './GameAdStateFactory.js';
//not GWT import const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;
export class BottomLimiter extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BottomLimiter.instance;
    }
    constructor() {
        super();
        this.bottom = 0;
        this.deltaY = 0;
        this.lower = 0;
        this.higher = 0;
    }
    init(lower, higher) {
        this.lower = lower;
        this.higher = higher;
    }
    update() {
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var gameAdState = GameAdStateFactory.getInstance().getCurrentInstance();
        ;
        if (gameAdState.isShowingAt()) {
            this.deltaY = this.higher;
        }
        else {
            this.deltaY = this.lower;
        }
        this.bottom = displayInfo.getLastHeight() - this.deltaY;
    }
    getDeltaY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.deltaY;
    }
    getBottom() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.bottom;
    }
}
BottomLimiter.instance = new BottomLimiter();
