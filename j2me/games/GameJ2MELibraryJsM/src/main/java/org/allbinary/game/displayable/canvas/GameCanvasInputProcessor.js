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
import { InputProcessor } from '../../../../../org/allbinary/game/input/InputProcessor.js';
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
import { DownKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js';
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
export class GameCanvasInputProcessor extends InputProcessor {
    constructor(allBinaryGameCanvas) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
        this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
        this.downKeyEventHandler = DownKeyEventHandler.getInstance();
        this.smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        this.inputToGameKeyMapping = PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping();
        this.NONE = GameKeyFactory.getInstance().NONE;
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
        this.inputToGameKeyMapping.init(this.allBinaryGameCanvas);
    }
    keyPressedByDevice(keyCode, deviceId) {
        try {
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(this.allBinaryGameCanvas, keyCode);
            ;
            if (gameKey != this.NONE) {
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this.allBinaryGameCanvas, gameKey);
                ;
                this.downGameKeyEventHandler.fireEvent(gameKeyEvent);
                this.downGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
            }
            else {
                this.logUtil.putF(new StringMaker().append(this.gameInputStrings.NO_KEY).appendint(keyCode).toString(), this, this.gameInputStrings.ADD_KEY_EVENT);
            }
            var keyCodeAsInteger = this.smallIntegerSingletonFactory.getAtNoThrow(keyCode);
            ;
            this.downKeyEventHandler.fireEventI(keyCodeAsInteger);
            this.downKeyEventHandler.getInstanceForDevice(deviceId).fireEventI(keyCodeAsInteger);
            //: 
        }
        catch (e) {
            this.logUtil.put("Key Event Error", this, this.gameInputStrings.ADD_KEY_EVENT, e);
        }
    }
    keyReleasedByDevice(canvas, keyCode, deviceId) {
        this.removeGameKeyEvent(canvas, keyCode, deviceId, false);
    }
    removeGameKeyEvent(canvas, keyCode, deviceId, repeated) {
        try {
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(canvas, keyCode);
            ;
            if (gameKey != this.NONE) {
                var gameKeyEventSourceInterface = canvas;
                ;
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(gameKeyEventSourceInterface, gameKey);
                ;
                this.upGameKeyEventHandler.fireEvent(gameKeyEvent);
                this.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
            }
            else {
                this.logUtil.putF(new StringMaker().append(this.gameInputStrings.NO_KEY).appendint(keyCode).toString(), this, this.gameInputStrings.REMOVE_KEY_EVENT);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put("Key Event Error", this, this.gameInputStrings.REMOVE_KEY_EVENT, e);
        }
    }
}
