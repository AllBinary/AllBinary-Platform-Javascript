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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LicenseLoadingType } from './LicenseLoadingType.js';
//not GWT import const LicenseLoadingType = globalThis.org.allbinary.game.midlet.LicenseLoadingType;
export class LicenseLoadingTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.INITIAL_LOADING = new LicenseLoadingType("Initial Loading");
        this.GAME_START = new LicenseLoadingType("Game Start");
        this.LOGIN = new LicenseLoadingType("Login");
        this.OTHER = new LicenseLoadingType("Other/Usually The First Non Demo Level");
    }
    static getIntance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LicenseLoadingTypeFactory.instance;
    }
}
LicenseLoadingTypeFactory.instance = new LicenseLoadingTypeFactory();
