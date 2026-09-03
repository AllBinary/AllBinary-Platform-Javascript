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
import { Object } from '../../../java/lang/Object.js';
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { Image } from '../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
import { StdUtil } from '../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageFactory } from './ImageFactory.js';
//not GWT import const ImageFactory = globalThis.org.allbinary.image.ImageFactory;
export class ImageCacheBase extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.imageFactory = ImageFactory.getInstance();
        this.hashtable = StdUtil.getInstance().createHashtable();
        this.SIZE = 128;
        this.widths = new Array(this.SIZE);
        this.heights = new Array(this.SIZE);
        this.listOfList = new Array(this.SIZE);
        this.availableListOfList = new Array(this.SIZE);
        this.volume = 0;
        this.nextIndex = 0;
        for (var index = this.listOfList.length - 1; index >= 0; index--) {
            this.listOfList[index] = new BasicArrayListD();
        }
        for (var index = this.availableListOfList.length - 1; index >= 0; index--) {
            this.availableListOfList[index] = new BasicArrayListD();
        }
    }
    getImage(resourceId = {}) {
        var imageCanBeNull = this.hashtable.get(resourceId);
        ;
        if (imageCanBeNull ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullImage.NULL_IMAGE;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return imageCanBeNull;
    }
    releaseAll() {
        for (var index = this.listOfList.length - 1; index >= 0; index--) {
            this.availableListOfList[index].clear();
            this.availableListOfList[index].addAllList(this.listOfList[index]);
        }
        this.logUtil.putF(new StringMaker().append("ImageCache: ").append(this.toString()).toString(), this, "releaseAll");
    }
    getIndexWH(width, height) {
        var foundIndex = -1;
        ;
        var size = this.widths.length;
        ;
        for (var index = 0; index < size; index++) {
            if (this.widths[index] == width && this.heights[index] == height) {
                foundIndex = index;
                //if statement needs to be on the same line and ternary does not work the same way.
                return foundIndex;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return foundIndex;
    }
    getFromAvailable(foundIndex, width, height) {
        if (foundIndex != -1) {
            if (this.availableListOfList[foundIndex].size() > 0) {
                var list = this.availableListOfList[foundIndex];
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return list.removeAt(list.size() - 1);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullImage.NULL_IMAGE;
    }
    //@Throws(Exception.constructor)
    get(caller, width, height) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getWithKey(key = {}) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    createImage(caller, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.imageFactory.createImage(caller, width, height);
        ;
    }
    //@Throws(Exception.constructor)
    createImageFromInputStream(key = {}, inputStream) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.imageFactory.createImageFromInputStream(key, inputStream);
        ;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        for (var index = this.nextIndex - 1; index >= 0; index--) {
            var width = this.widths[index];
            ;
            var height = this.heights[index];
            ;
            var total = this.listOfList[index].size();
            ;
            var totalAvailable = this.availableListOfList[index].size();
            ;
            stringBuffer.append(" w: ");
            stringBuffer.appendint(width);
            stringBuffer.append(" h: ");
            stringBuffer.appendint(height);
            stringBuffer.append(CommonSeps.getInstance().SPACE);
            stringBuffer.append(CommonLabels.getInstance().TOTAL_LABEL);
            stringBuffer.appendint(total);
            stringBuffer.append(" available: ");
            stringBuffer.appendint(totalAvailable);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getHashtableP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
    init(image) {
    }
    initProgress() {
    }
}
