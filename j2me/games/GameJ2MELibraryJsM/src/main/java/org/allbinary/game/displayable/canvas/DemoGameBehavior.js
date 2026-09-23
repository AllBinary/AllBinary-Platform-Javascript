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
import { Object } from '../../../../../java/lang/Object.js';
import { GameTypeFactory } from '../../../../../org/allbinary/game/GameTypeFactory.js';
//not GWT import const GameTypeFactory
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const NullPaintable
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AbeClientInformationInterface
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const AllBinaryGameCanvas
export class DemoGameBehavior extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DemoGameBehavior.instance;
    }
    //@Throws(Exception.constructor)
    init() {
    }
    pause(allBinaryGameCanvas) {
    }
    unPause(allBinaryGameCanvas) {
    }
    //@Throws(Exception.constructor)
    updateTouch(allBinaryGameCanvas) {
    }
    //@Throws(Exception.constructor)
    updateScreenButtonPaintable(allBinaryGameCanvas) {
        allBinaryGameCanvas.setTouchPaintableP(NullPaintable.getInstance());
    }
    //@Throws(Exception.constructor)
    setGameState(allBinaryGameCanvas) {
    }
    removeAllGameKeyInputListeners(allBinaryGameCanvas) {
    }
    //@Throws(Exception.constructor)
    updateEndGameProcessor(allBinaryGameCanvas) {
    }
    //@Throws(Exception.constructor)
    buildGame(allBinaryGameCanvas) {
    }
    //@Throws(Exception.constructor)
    run(allBinaryGameCanvas) {
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(GameTypeFactory.getInstance().BOT.toString(), this, commonStrings.RUN);
    }
    //@Throws(Exception.constructor)
    setHighScore(abeClientInformation, allBinaryGameCanvas, name, score, autoSubmit, isLast) {
    }
}
DemoGameBehavior.instance = new DemoGameBehavior();
