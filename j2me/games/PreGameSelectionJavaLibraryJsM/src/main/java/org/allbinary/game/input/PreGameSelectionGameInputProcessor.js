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
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { LockedFeatureNotificationUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js';
//not GWT import const LockedFeatureNotificationUtil
import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
//not GWT import const PreGameSelectorPaintable
import { GameKeyEventHandler } from '../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler
import { GameKeyEventUtil } from '../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { SecondaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory
import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound
import { ABRunnable } from '../../../../org/allbinary/thread/ABRunnable.js';
//not GWT import const ABRunnable
import { ThreadObjectUtil } from '../../../../org/allbinary/thread/ThreadObjectUtil.js';
//not GWT import const ThreadObjectUtil
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import - same folder const PlayerGameInput
import { GameInputProcessorComposite } from './GameInputProcessorComposite.js';
//not GWT import - same folder const GameInputProcessorComposite
export class PreGameSelectionGameInputProcessor extends Processor {
    constructor(gameCanvas, preGameSelectorPaintable, nextGameState, lockedIndex) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.inputTimeHelper = new TimeDelayHelper(650);
        this.abRunnable = new class extends ABRunnable {
            run() {
                try {
                    this.setRunning(true);
                    SecondaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
                    gameCanvas.setGameState(nextGameState);
                    GameKeyEventHandler.getInstance().removeListener(getPlayerGameInput());
                    this.setRunning(false);
                    //: 
                }
                catch (e) {
                    this.setRunning(false);
                    var logUtil = LogUtil.getInstance();
                    ;
                    var commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        };
        this.gameCanvas = gameCanvas;
        this.preGameSelectorPaintable = preGameSelectorPaintable;
        this.nextGameState = nextGameState;
        this.playerGameInput = new GameInputProcessorComposite("Pre Game Selection", this);
        this.lockedIndex = lockedIndex;
    }
    //@Throws(Exception.constructor)
    process() {
        this.getPlayerGameInput().update();
    }
    //@Throws(Exception.constructor)
    onInput(list) {
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = list.get(index);
            ;
            var key = GameKeyEventUtil.getKey(anyType);
            ;
            if (key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN) {
                if (this.inputTimeHelper.isTimeTNT()) {
                    SecondaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
                    this.getPreGameSelectorPaintable().getPreGameSelectionForm().processInputKey(key);
                    break;
                }
            }
            else if (key == Canvas.KEY_NUM0) {
                var selectedIndex = this.preGameSelectorPaintable.getPreGameSelectionForm().getSelectedIndex();
                ;
                if (selectedIndex < this.lockedIndex || !LockedUtil.getInstance().isLocked()) {
                    if (!abRunnable.isRunning()) {
                        abRunnable.setRunning(true);
                        ThreadObjectUtil.getInstance().processThread(abRunnable);
                    }
                    break;
                }
                else {
                    LockedFeatureNotificationUtil.getInstance().fire();
                }
            }
        }
        list.clear();
    }
    getPreGameSelectorPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.preGameSelectorPaintable;
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
    }
    initInputProcessors() {
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.toString();
        ;
    }
    getPlayerGameInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerGameInput;
    }
}
