/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { Sprite } from '../../../../javax/microedition/lcdui/game/Sprite.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
export class SpriteFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SpriteFactory.instance;
    }
    createSprite(image, frameWidth, frameHeight) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Sprite(image, frameWidth, frameHeight);
    }
}
SpriteFactory.instance = new SpriteFactory();
