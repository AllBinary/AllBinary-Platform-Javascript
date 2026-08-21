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
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoresHelperBase } from './HighScoresHelperBase.js';
export class HighScoresHelper extends HighScoresHelperBase {
    constructor() {
        super(...arguments);
        this.circularIndexUtil = CircularIndexUtil.createInstanceAt(0, 0);
        this.lastIndex = -1;
    }
    setHighScoresArray(highScoresArrayP) {
        super.setHighScoresArray(highScoresArrayP);
        this.circularIndexUtil.setSize(this.highScoresArrayP.length);
    }
    getNextHighScores() {
        var highScores = this.highScoresArrayP[this.circularIndexUtil.getIndex()];
        ;
        var index = 0;
        ;
        while ((highScores.getTotal() < 1 || this.lastIndex == this.circularIndexUtil.getIndex()) && index < this.highScoresArrayP.length) {
            this.circularIndexUtil.next();
            highScores = this.highScoresArrayP[this.circularIndexUtil.getIndex()];
            index++;
        }
        this.lastIndex = this.circularIndexUtil.getIndex();
        //if statement needs to be on the same line and ternary does not work the same way.
        return highScores;
    }
    isAnyHighScores() {
        if (this.highScoresArrayP.length < 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        var anyScores = false;
        ;
        var highScores;
        ;
        for (var index = this.highScoresArrayP.length - 1; index >= 0; index--) {
            highScores = this.highScoresArrayP[index];
            if (highScores.getTotal() > 0) {
                anyScores = true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyScores;
    }
}
