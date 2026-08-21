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
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
import { InputProcessor } from '../../../../../org/allbinary/game/input/InputProcessor.js';
import { PlatformKeyFactory } from '../../../../../org/allbinary/game/input/PlatformKeyFactory.js';
import { DownKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js';
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
export class FormInputProcessor extends InputProcessor {
    constructor(allBinaryGameCanvas) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.downKeyEventHandler = DownKeyEventHandler.getInstance();
        this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
        this.inputFactory = InputFactory.getInstance();
        this.platformKeyFactory = PlatformKeyFactory.getInstance();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
    }
    keyPressedByDevice(keyCode, deviceId) {
        try {
            PreLogUtil.put(new StringMaker().append(this.inputFactory.KEY_CODE_LABEL).appendint(keyCode).append(CommonSeps.getInstance().SPACE).append(this.inputFactory.DEVICE_ID_LABEL).appendint(deviceId).toString(), this, this.gameInputStrings.KEY_PRESSED);
            var input = this.inputFactory.getInstanceById(keyCode);
            ;
            var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this.allBinaryGameCanvas, input);
            ;
            this.downKeyEventHandler.fireEventForGameKeyEvent(gameKeyEvent);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.ADD_KEY_EVENT, e);
        }
    }
    keyReleasedByDevice(canvas, keyCode, deviceId) {
        try {
            var input = this.inputFactory.getInstanceById(keyCode);
            ;
            if (this.platformKeyFactory.isEnter(input)) {
                PreLogUtil.put(new StringMaker().append(this.inputFactory.KEY_CODE_LABEL).appendint(keyCode).append(CommonSeps.getInstance().SPACE).append(this.inputFactory.DEVICE_ID_LABEL).appendint(deviceId).toString(), this, this.gameInputStrings.KEY_RELEASED);
                var gameKey = GameKeyFactory.getInstance().KEY_NUM0;
                ;
                var gameKeyEventSourceInterface = canvas;
                ;
                var gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(gameKeyEventSourceInterface, gameKey);
                ;
                this.upGameKeyEventHandler.fireEvent(gameKeyEvent);
                this.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.ADD_KEY_EVENT, e);
        }
    }
}
