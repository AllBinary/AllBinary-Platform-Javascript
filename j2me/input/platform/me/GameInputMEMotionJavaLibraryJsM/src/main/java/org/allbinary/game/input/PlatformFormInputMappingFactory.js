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
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameKeyFactory } from './GameKeyFactory.js';
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
                var inputToGameKeyMapping = new InputToGameKeyMapping();
                ;
                var gameKeyFactory = GameKeyFactory.getInstance();
                ;
                inputToGameKeyMapping.add(gameKeyFactory.UP, gameKeyFactory.UP);
                inputToGameKeyMapping.add(gameKeyFactory.DOWN, gameKeyFactory.DOWN);
                inputToGameKeyMapping.add(gameKeyFactory.LEFT, gameKeyFactory.LEFT);
                inputToGameKeyMapping.add(gameKeyFactory.RIGHT, gameKeyFactory.RIGHT);
                inputToGameKeyMapping.add(gameKeyFactory.KEY_NUM1, gameKeyFactory.GAME_A);
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
