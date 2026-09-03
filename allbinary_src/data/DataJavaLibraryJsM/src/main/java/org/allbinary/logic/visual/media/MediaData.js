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
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MediaTypeData } from './MediaTypeData.js';
//not GWT import const MediaTypeData = globalThis.org.allbinary.logic.visual.media.MediaTypeData;
import { MediaDataFactory } from './MediaDataFactory.js';
//not GWT import const MediaDataFactory = globalThis.org.allbinary.logic.visual.media.MediaDataFactory;
export class MediaData extends Object {
    //@Throws(Exception.constructor)
    static get(a_Name) {
        var mediaData = MediaData.hashMap.get(a_Name);
        ;
        if (mediaData !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return mediaData;
        }
        else {
            throw new Exception("No Such MediaData");
        }
    }
    static getDefault() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MediaDataFactory.getInstance().JPG;
    }
    static toHashMap() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MediaData.hashMap;
    }
    constructor(a_Name) {
        super();
        this.name = a_Name;
        this.extension = "." + this.name;
        this.type = MediaTypeData.getInstance().NOT_RESIZABLE_MEDIA;
        MediaData.hashMap.put(a_Name, this);
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.type;
    }
    getExtension() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.extension;
    }
    isConvertableTo(mediaData) {
        if (this == MediaDataFactory.getInstance().GIF && mediaData == MediaDataFactory.getInstance().JPG) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getName();
        ;
    }
}
MediaData.hashMap = StdUtil.getInstance().createHashMap();
