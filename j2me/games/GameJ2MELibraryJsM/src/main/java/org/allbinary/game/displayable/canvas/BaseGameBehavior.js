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
import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
//not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
//not GWT import const CurrentDisplayableFactory = globalThis.org.allbinary.graphics.opengles.CurrentDisplayableFactory;
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DemoGameBehavior } from './DemoGameBehavior.js';
//not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;
export class BaseGameBehavior extends DemoGameBehavior {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BaseGameBehavior.instanceC;
    }
    //@Throws(Exception.constructor)
    init() {
        var gameAdState = GameAdStateFactory.getInstance().getCurrentInstance();
        ;
        gameAdState.playingAdState();
    }
    pause(allBinaryGameCanvas) {
        var features = Features.getInstance();
        ;
        if (features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL_AS_GAME_THREAD)) {
            var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
            ;
            currentDisplayableFactory.setRunnable(allBinaryGameCanvas.gamePauseRunnable);
        }
    }
    unPause(allBinaryGameCanvas) {
        if (Features.getInstance().isDefault(OpenGLFeatureFactory.getInstance().OPENGL_AS_GAME_THREAD)) {
            var currentDisplayableFactory = CurrentDisplayableFactory.getInstance();
            ;
            currentDisplayableFactory.setRunnable(allBinaryGameCanvas.gameRunnable);
            currentDisplayableFactory.setDisplayable(allBinaryGameCanvas);
        }
    }
    //@Throws(Exception.constructor)
    updateTouch(allBinaryGameCanvas) {
        allBinaryGameCanvas.updateTouch2();
    }
    //@Throws(Exception.constructor)
    updateScreenButtonPaintable(allBinaryGameCanvas) {
        allBinaryGameCanvas.updateScreenButtonPaintable2();
    }
    //@Throws(Exception.constructor)
    setGameState(allBinaryGameCanvas) {
        allBinaryGameCanvas.updateGameState();
    }
    removeAllGameKeyInputListeners(allBinaryGameCanvas) {
        allBinaryGameCanvas.removeAllGameKeyInputListeners2();
    }
    //@Throws(Exception.constructor)
    updateEndGameProcessor(allBinaryGameCanvas) {
        allBinaryGameCanvas.updateEndGameProcessor2();
    }
    //@Throws(Exception.constructor)
    buildGame(allBinaryGameCanvas) {
        allBinaryGameCanvas.buildGame2();
    }
    //@Throws(Exception.constructor)
    run(allBinaryGameCanvas) {
        allBinaryGameCanvas.run2();
    }
    //@Throws(Exception.constructor)
    setHighScore(abeClientInformation, allBinaryGameCanvas, name, score, autoSubmit, isLast) {
        allBinaryGameCanvas.setHighScore2(abeClientInformation, name, score, autoSubmit, isLast);
    }
}
BaseGameBehavior.instanceC = new BaseGameBehavior();
