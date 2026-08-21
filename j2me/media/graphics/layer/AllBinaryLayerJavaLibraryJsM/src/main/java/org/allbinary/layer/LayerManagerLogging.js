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
import { Integer } from '../../../java/lang/Integer.js';
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LayerManagerLoggingBase } from './LayerManagerLoggingBase.js';
export class LayerManagerLogging extends LayerManagerLoggingBase {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.stringBuilder = new StringMaker();
        this.APPEND = "append";
        this.APPEND_ = " append: ";
        this._AT_ = " at: ";
        this.ATTEMPT_REMOVE_ = " Remove Attempt: ";
        this.REMOVE_ = " Remove: ";
        this.REMOVE = "remove";
        this.DID_NOT_REMOVE = " Did not remove: ";
        this.CLEAR = " Clear List";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerManagerLogging.instance;
    }
    //@Throws(Exception.constructor)
    append(layerInterface) {
        this.stringBuilder.delete(0, this.stringBuilder.length());
        this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.APPEND_).append(layerInterface.getName()).toString(), this, this.APPEND);
    }
    appendAt(layerInterface, index) {
        this.stringBuilder.delete(0, this.stringBuilder.length());
        this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.APPEND_).append(layerInterface.getName()).append(this._AT_).appendint(index).toString(), this, this.APPEND);
    }
    remove(layerInterface) {
        if (layerInterface ==
            null) {
            this.stringBuilder.delete(0, this.stringBuilder.length());
            this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.ATTEMPT_REMOVE_).append(StringUtil.getInstance().toString(layerInterface)).toString(), this, this.REMOVE);
        }
        else {
            this.stringBuilder.delete(0, this.stringBuilder.length());
            this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.ATTEMPT_REMOVE_).append(layerInterface.getName()).toString(), this, this.REMOVE);
        }
    }
    removeResult(layerManager, layerInterface, result) {
        if (layerInterface ==
            null) {
            this.stringBuilder.delete(0, this.stringBuilder.length());
            this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.REMOVE_).append(StringUtil.getInstance().toString(layerInterface)).toString(), this, this.REMOVE);
        }
        else if (result) {
            if (LayerManagerLogging.removeFailed) {
                this.stringBuilder.delete(0, this.stringBuilder.length());
                this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.REMOVE_).append(layerInterface.getName()).toString(), this, this.REMOVE);
            }
        }
        else {
            this.stringBuilder.delete(0, this.stringBuilder.length());
            this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.DID_NOT_REMOVE).append(layerInterface.getName()).toString(), this, this.REMOVE);
            LayerManagerLogging.removeFailed = true;
        }
    }
    log(layerManager) {
        this.stringBuilder.delete(0, this.stringBuilder.length());
        var size = layerManager.getSize();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        this.stringBuilder.append(Integer.toHexString(TsUtil.getInstance().hashCode(layerManager))).append(commonSeps.COLON_SEP);
        this.stringBuilder.appendint(size).append(commonSeps.COLON_SEP);
        var allBinaryLayer;
        ;
        for (var index = 0; index < size; index++) {
            allBinaryLayer = layerManager.getLayerAt(index);
            this.stringBuilder.append(allBinaryLayer.getName()).append(commonSeps.COMMA);
        }
        this.logUtil.putF(this.stringBuilder.toString(), this, this.REMOVE);
    }
    clear() {
        this.stringBuilder.delete(0, this.stringBuilder.length());
        this.logUtil.putF(this.stringBuilder.appendint(TsUtil.getInstance().hashCode(this)).append(this.CLEAR).toString(), this, this.CLEAR);
    }
}
LayerManagerLogging.instance = new LayerManagerLogging();
LayerManagerLogging.removeFailed = false;
