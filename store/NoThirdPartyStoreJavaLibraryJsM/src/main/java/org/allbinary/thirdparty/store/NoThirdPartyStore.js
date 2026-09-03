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
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThirdPartyStore } from './ThirdPartyStore.js';
//not GWT import const ThirdPartyStore = globalThis.org.allbinary.thirdparty.store.ThirdPartyStore;
export class NoThirdPartyStore extends ThirdPartyStore {
    constructor() {
        super(StringUtil.getInstance().EMPTY_STRING);
        //For kotlin this is before the body of the constructor.
    }
    authorize(clientInformationInterface) {
        this.setAuthorized(true);
    }
}
