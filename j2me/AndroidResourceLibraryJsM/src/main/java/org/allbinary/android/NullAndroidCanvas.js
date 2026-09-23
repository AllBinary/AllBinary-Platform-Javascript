/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Object } from '../../../java/lang/Object.js';
import { Canvas } from '../../../android/graphics/Canvas.js';
//not GWT import const Canvas
import { MediaPlayer } from '../../../android/media/MediaPlayer.js';
//not GWT import const MediaPlayer
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullAndroidCanvas extends Object {
}
NullAndroidCanvas.NULL_CANVAS = new Canvas();
NullAndroidCanvas.NULL_MEDIA_PLAYER = new MediaPlayer();
