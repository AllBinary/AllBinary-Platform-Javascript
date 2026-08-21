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
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
export class EndGameProcessor extends Processor {
    constructor(gameCanvas) {
        super();
        this.gameStateFactory = GameStateFactory.getInstance();
        this.WAIT = 5000;
        this.gameCanvas = gameCanvas;
    }
    //@Throws(Exception.constructor)
    process() {
        if (this.gameCanvas.isHighScoreSubmitted()) {
            if (this.gameCanvas.getGameStateTimeHelper().isElapsedTNT(this.WAIT)) {
                if (this.gameCanvas.getGameState() == this.gameStateFactory.SHOW_END_RESULT_GAME_STATE) {
                    var highScoresBase = this.gameCanvas.highScoresHelper;
                    ;
                    var highScores = highScoresBase.getSelectedHighScores();
                    ;
                    if (highScores != NullHighScoresSingletonFactory.getInstance()) {
                        highScoresBase.selectHighScores();
                        this.gameCanvas.getRealHighScoresPaintable().setHighScores(highScores);
                        this.gameCanvas.setGameState(this.gameStateFactory.SHOW_HIGH_SCORE_GAME_STATE);
                        this.gameCanvas.setHighScoresPaintable(this.gameCanvas.getRealHighScoresPaintable());
                    }
                }
                else if (this.gameCanvas.getGameState() == this.gameStateFactory.SHOW_HIGH_SCORE_GAME_STATE) {
                    this.gameCanvas.setGameState(this.gameStateFactory.SHOW_END_RESULT_GAME_STATE);
                    this.gameCanvas.setHighScoresPaintable(NullPaintable.getInstance());
                }
            }
        }
    }
}
