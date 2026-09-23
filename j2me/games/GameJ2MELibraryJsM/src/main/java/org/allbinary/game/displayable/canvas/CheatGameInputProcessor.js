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
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const GameKeyFactory
import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInput
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { GameKeyEventUtil } from '../../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
//not GWT import const AllBinaryGameLayerManager
import { SpecialGameInputFactory } from '../../../../../org/allbinary/game/layer/special/SpecialGameInputFactory.js';
//not GWT import const SpecialGameInputInterface
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const AllBinaryGameCanvas
export class CheatGameInputProcessor extends PlayerGameInput {
    constructor(gameCanvas) {
        super(new BasicArrayListD(), new BasicArrayListD(), -1);
        this.PROCESS_GAME = "processGame";
        this.gameKeyFactory = GameKeyFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.gameCanvas = gameCanvas;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    update() {
        try {
            var gameLayerManager = this.gameCanvas.getLayerManager();
            ;
            var list = this.getGameKeyEventList();
            ;
            var size = list.size();
            ;
            for (var index = 0; index < size; index++) {
                var anyType = list.objectArray[index];
                ;
                var key = GameKeyEventUtil.getKey(anyType);
                ;
                if (key == this.gameKeyFactory.LEVEL_DOWN.getId()) {
                    CheatGameInputProcessor.inputProcessor.strafeLeft();
                    break;
                }
                else if (key == this.gameKeyFactory.LEVEL_UP.getId()) {
                    CheatGameInputProcessor.inputProcessor.strafeRight();
                    break;
                }
                if (key == this.gameKeyFactory.LEFT.getId()) {
                    CheatGameInputProcessor.inputProcessor.left();
                    break;
                }
                else if (key == this.gameKeyFactory.RIGHT.getId()) {
                    CheatGameInputProcessor.inputProcessor.right();
                    break;
                }
                else if (key == this.gameKeyFactory.UP.getId()) {
                    CheatGameInputProcessor.inputProcessor.up();
                    break;
                }
                else if (key == this.gameKeyFactory.DOWN.getId()) {
                    CheatGameInputProcessor.inputProcessor.down();
                    break;
                }
                else if (key == this.gameKeyFactory.KEY_NUM1.getId()) {
                    CheatGameInputProcessor.inputProcessor.special1(gameLayerManager, GameKeyEvent.NONE);
                    break;
                }
                else if (key == this.gameKeyFactory.KEY_NUM3.getId()) {
                    CheatGameInputProcessor.inputProcessor.special2(gameLayerManager, GameKeyEvent.NONE);
                    break;
                }
            }
            list.clear();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.UPDATE, e);
        }
    }
}
CheatGameInputProcessor.inputProcessor = SpecialGameInputFactory.NO_SPECIAL_GAME_INPUT;
