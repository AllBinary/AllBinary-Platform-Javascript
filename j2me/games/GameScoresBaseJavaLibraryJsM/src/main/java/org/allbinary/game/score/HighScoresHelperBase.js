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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;
import { LastFetchHighScoresFactory } from './LastFetchHighScoresFactory.js';
//not GWT import - same folder const HighScores = globalThis.org.allbinary.game.score.HighScores;
import { NullHighScoresSingletonFactory } from './NullHighScoresSingletonFactory.js';
//not GWT import - same folder const NullHighScoresSingletonFactory = globalThis.org.allbinary.game.score.NullHighScoresSingletonFactory;
export class HighScoresHelperBase extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.highScoresArrayP = LastFetchHighScoresFactory.getInstance().highScoresArray;
    }
    setHighScoresArray(highScoresArrayP) {
        if (highScoresArrayP !=
            null) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.putF(new StringMaker().append(commonStrings.START).appendint(highScoresArrayP.length).toString(), this, "setHighScoresArray");
        }
        else {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.putF(commonStrings.START, this, "setHighScoresArray");
        }
        this.highScoresArrayP = highScoresArrayP;
    }
    getNextHighScores() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullHighScoresSingletonFactory.getInstance();
        ;
    }
    isAnyHighScores() {
        throw new RuntimeException();
    }
    setSelectedHighScores(selectedHighScores) {
    }
    getSelectedHighScores() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullHighScoresSingletonFactory.getInstance();
        ;
    }
    getHighScoresArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highScoresArrayP;
    }
    selectHighScores() {
    }
}
