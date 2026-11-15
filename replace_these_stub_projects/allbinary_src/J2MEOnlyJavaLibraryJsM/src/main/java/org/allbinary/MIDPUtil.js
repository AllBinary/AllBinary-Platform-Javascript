/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
import { Object } from '../../java/lang/Object.js';
//not GWT import const Form
import { Image } from '../../javax/microedition/lcdui/Image.js';
//not GWT import const Item
import { Manager } from '../../javax/microedition/media/Manager.js';
//not GWT import const Player
//Current folder imports from return types, extended types, and scope (deduplicated)
//like microemu-playn, so the languages without overloading can be generated. J2ME uses the MIDP overloads.
export class MIDPUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MIDPUtil.instance;
    }
    createImageWH(width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImage(width, height);
        ;
    }
    createImageFromByteArray(imageData, imageOffset, imageLength) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImage(imageData, imageOffset, imageLength);
        ;
    }
    //@Throws(IOException.constructor)
    createImageFromInputStream(inputStream) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImage(inputStream);
        ;
    }
    //@Throws(IOException.constructor, MediaException.constructor)
    createPlayerFromInputStream(inputStream, type) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Manager.createPlayer(inputStream, type);
        ;
    }
    appendItem(form, item) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return form.append(item);
        ;
    }
}
MIDPUtil.instance = new MIDPUtil();
