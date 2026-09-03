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
//not plain js import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoresHelperBase } from './HighScoresHelperBase.js';
//not GWT import const HighScoresHelperBase = globalThis.org.allbinary.game.score.HighScoresHelperBase;
import { NullHighScoresSingletonFactory } from './NullHighScoresSingletonFactory.js';
//not GWT import const HighScores = globalThis.org.allbinary.game.score.HighScores;
export class HighScoresHelper2 extends HighScoresHelperBase {
    constructor() {
        super(...arguments);
        this.circularIndexUtil = CircularIndexUtil.createInstanceAt(0, 0);
        this.selectedHighScores = NullHighScoresSingletonFactory.getInstance();
    }
    setSelectedHighScores(selectedHighScores) {
        this.selectedHighScores = selectedHighScores;
    }
    getSelectedHighScores() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedHighScores;
    }
    setHighScoresArray(highScoresArrayP) {
        super.setHighScoresArray(highScoresArrayP);
        this.circularIndexUtil.setSize(this.highScoresArrayP.length);
        this.selectHighScores();
    }
    selectHighScores() {
        if (this.highScoresArrayP.length == 0) {
            this.setSelectedHighScores(NullHighScoresSingletonFactory.getInstance());
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        this.circularIndexUtil.next();
        var highScores = this.highScoresArrayP[this.circularIndexUtil.getIndex()];
        ;
        var index = 0;
        ;
        while (highScores.getTotal() < 1 && index < this.highScoresArrayP.length) {
            highScores = this.highScoresArrayP[this.circularIndexUtil.next()];
            index++;
        }
        this.setSelectedHighScores(highScores);
    }
}
