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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const Context = globalThis.android.content.Context;
import { Build } from '../../../../../../android/os/Build.js';
//not GWT import const Build = globalThis.android.os.Build;
//not plain js import { ResourceUtil } from '../../../../../../org/allbinary/data/resource/ResourceUtil.js';
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidSystemProperties extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidSystemProperties.SINGLETON;
    }
    constructor(context) {
        super();
        this.commonStrings = CommonStrings.getInstance();
    }
    getDeviceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    getDeviceSoftwareVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getLine1Number() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getNetworkCountryIso() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getNetworkOperator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getNetworkOperatorName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getSimCountryIso() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getSimOperator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getSimOperatorName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getSimSerialNumber() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getSubscriberId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getVoiceMailAlphaTag() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getVoiceMailNumber() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.DISABLE;
    }
    getNetworkType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getPhoneType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getBoard() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.BOARD;
    }
    getBrand() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.BRAND;
    }
    getDevice() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.DEVICE;
    }
    getFingerprint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.FINGERPRINT;
    }
    getHost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.HOST;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.ID;
    }
    getModel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.MODEL;
    }
    getProduct() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.PRODUCT;
    }
    getTags() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.TAGS;
    }
    getTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.TIME;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.TYPE;
    }
    getUser() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Build.USER;
    }
}
AndroidSystemProperties.SINGLETON = new AndroidSystemProperties(ResourceUtil.getInstance().getContext());
