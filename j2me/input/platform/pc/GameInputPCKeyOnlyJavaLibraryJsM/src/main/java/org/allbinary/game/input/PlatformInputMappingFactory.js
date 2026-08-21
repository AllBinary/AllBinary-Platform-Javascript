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
import { PersistentInputMapping } from '../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LaptopGameInputMapping } from './LaptopGameInputMapping.js';
export class PlatformInputMappingFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.inputToGameKeyMapping = PersistentInputMapping.getNullInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformInputMappingFactory.instance;
    }
    getPersistentInputMappingInstance() {
        try {
            if (this.inputToGameKeyMapping == PersistentInputMapping.getNullInstance()) {
                this.inputToGameKeyMapping = new LaptopGameInputMapping();
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
PlatformInputMappingFactory.instance = new PlatformInputMappingFactory();
