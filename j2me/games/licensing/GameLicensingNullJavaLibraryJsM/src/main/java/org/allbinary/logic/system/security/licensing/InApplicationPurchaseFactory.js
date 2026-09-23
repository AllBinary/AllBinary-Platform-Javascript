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
import { Object } from '../../../../../../java/lang/Object.js';
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import - same folder const LockableFeature
export class InApplicationPurchaseFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InApplicationPurchaseFactory.instance;
    }
    constructor() {
        super();
    }
    init(anyType = {}, stateObject = {}) {
    }
    onCreate(anyType = {}, stateObject = {}) {
    }
    onStart() {
    }
    onResult(requestCode, resultCode, data = {}) {
    }
    onSaveState(anyType = {}) {
    }
    onStop() {
    }
    onDestroy() {
    }
    purchase(lockableFeature) {
    }
    isPurchased(lockableFeature) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    add(lockableFeature) {
    }
    getUserName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    isEnabled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
InApplicationPurchaseFactory.instance = new InApplicationPurchaseFactory();
