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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;
export class HighScoresBase extends Object {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
    }
    fetchHighScores(gameInfo, highScoresResultsListener) {
        throw new RuntimeException();
    }
    fetchHighScoresPreload(gameInfo, highScoresResultsListener, preload) {
        throw new RuntimeException();
    }
    createHighScoresHelper() {
        throw new RuntimeException();
    }
}
