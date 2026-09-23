/*
        *
        *  To change this license header, choose License Headers in Project Properties.
        *  To change this template file, choose Tools | Templates  and open the template in the editor.
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
        return true;
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
