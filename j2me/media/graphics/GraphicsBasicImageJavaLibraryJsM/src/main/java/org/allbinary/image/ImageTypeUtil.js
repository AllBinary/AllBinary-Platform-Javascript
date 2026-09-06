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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageTypeUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageTypeUtil.SINGLETON;
    }
    constructor() {
        super();
        this.PNG = "png";
        this.JPG = "jpg";
        this.GIF = "gif";
        this.list = new BasicArrayListD();
        this.list.add(JPG);
        this.list.add(GIF);
        this.list.add(PNG);
    }
    isSupported(mediaFileType) {
        mediaFileType = mediaFileType.toLowerCase();
        for (var index = this.list.size() - 1; index >= 0; index--) {
            var name = this.list.get(index);
            ;
            if (mediaFileType.compareTo(name) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
ImageTypeUtil.SINGLETON = new ImageTypeUtil();
