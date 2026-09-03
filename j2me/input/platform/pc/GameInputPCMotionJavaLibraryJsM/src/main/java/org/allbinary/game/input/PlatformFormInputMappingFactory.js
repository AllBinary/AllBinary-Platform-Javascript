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
import { Object } from '../../../../java/lang/Object.js';
import { InputToGameKeyMapping } from '../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
//not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;
import { BasicTouchInputFactory } from '../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
//not GWT import const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PCKeyFactory } from './PCKeyFactory.js';
//not GWT import const PCKeyFactory = globalThis.org.allbinary.game.input.PCKeyFactory;
import { GameKeyFactory } from './GameKeyFactory.js';
//not GWT import const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;
export class PlatformFormInputMappingFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.inputToGameKeyMapping = InputToGameKeyMapping.getNullInstance();
    }
    static getInstance() {
        if (PlatformFormInputMappingFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            PlatformFormInputMappingFactory.instance = new PlatformFormInputMappingFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformFormInputMappingFactory.instance;
    }
    getOrCreate() {
        try {
            if (this.inputToGameKeyMapping == InputToGameKeyMapping.getNullInstance()) {
                var pcKeyFactory = PCKeyFactory.getInstance();
                ;
                var inputToGameKeyMapping = new InputToGameKeyMapping();
                ;
                var gameKeyFactory = GameKeyFactory.getInstance();
                ;
                var basicTouchInputFactory = BasicTouchInputFactory.getInstance();
                ;
                inputToGameKeyMapping.add(gameKeyFactory.UP, pcKeyFactory.DPAD_UP);
                inputToGameKeyMapping.add(gameKeyFactory.DOWN, pcKeyFactory.DPAD_DOWN);
                inputToGameKeyMapping.add(gameKeyFactory.LEFT, pcKeyFactory.DPAD_LEFT);
                inputToGameKeyMapping.add(gameKeyFactory.RIGHT, pcKeyFactory.DPAD_RIGHT);
                inputToGameKeyMapping.add(gameKeyFactory.KEY_NUM1, pcKeyFactory.ENTER);
                inputToGameKeyMapping.add(gameKeyFactory.UP, basicTouchInputFactory.UP);
                inputToGameKeyMapping.add(gameKeyFactory.LEFT, basicTouchInputFactory.LEFT);
                inputToGameKeyMapping.add(gameKeyFactory.RIGHT, basicTouchInputFactory.RIGHT);
                inputToGameKeyMapping.add(gameKeyFactory.DOWN, basicTouchInputFactory.DOWN);
                this.inputToGameKeyMapping = inputToGameKeyMapping;
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputToGameKeyMapping;
    }
}
PlatformFormInputMappingFactory.instance = NullUtil.getInstance().NULL_OBJECT;
