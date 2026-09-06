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
import { Scoreable } from '../../../../../../../../org/allbinary/game/score/Scoreable.js';
//not GWT import - same folder const ScoreHudWidget = globalThis.org.allbinary.game.ag.layer.hud.basic.score.ScoreHudWidget;
export class ScoreableAddOnlyForHud extends Scoreable {
    constructor(scoreVectorGraphic) {
        super(0);
        //For kotlin this is before the body of the constructor.
        this.scoreHudWidget = scoreVectorGraphic;
        this.getScoreHudWidget().set(0);
    }
    removePoints(points) {
    }
    addPoints(points) {
        super.addPoints(points);
        this.getScoreHudWidget().add(points);
    }
    getScoreHudWidget() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scoreHudWidget;
    }
}
