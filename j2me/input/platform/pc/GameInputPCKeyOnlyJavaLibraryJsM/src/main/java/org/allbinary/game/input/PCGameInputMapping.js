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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { GamePersistanceStrings } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js';
//not GWT import const GamePersistanceStrings = globalThis.org.allbinary.game.configuration.persistance.GamePersistanceStrings;
import { PersistentInputMapping } from '../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PCKeyFactory } from './PCKeyFactory.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
export class PCGameInputMapping extends PersistentInputMapping {
    constructor() {
        super(GamePersistanceStrings.getInstance().SAVED_INPUT_CONFIGURATION_RECORD_ID);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    init(abeClientInformation) {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.INIT);
        PCKeyFactory.getInstance();
        super.init(abeClientInformation);
        if (this.getTotalMapped() == 0 || this.isDefaultNew()) {
            this.getInputMapping().addMapping(this.getDefault());
            this.save(abeClientInformation);
        }
    }
    isDelete(input) {
        if (input == PCKeyFactory.getInstance().DEL) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isSystemInput(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
