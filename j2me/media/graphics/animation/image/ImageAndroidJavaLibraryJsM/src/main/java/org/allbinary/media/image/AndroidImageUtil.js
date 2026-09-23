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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const Canvas
import { Color } from '../../../../android/graphics/Color.js';
//not GWT import const AndroidImageInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidImageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidImageUtil.instance;
    }
    paintBitmap(bitmap, originalBitmap, paint) {
        bitmap.eraseColor(Color.TRANSPARENT);
        var canvas = new android.graphics.Canvas();
        ;
        canvas.setBitmap(bitmap);
        canvas.drawBitmap(originalBitmap, 0.0, 0.0, paint);
    }
    paint(image, originalImage, paint) {
        var androidImage = image;
        ;
        androidImage.getBitmap().eraseColor(Color.TRANSPARENT);
        var canvas = androidImage.getCanvas();
        ;
        var originalAndroidImage = originalImage;
        ;
        canvas.drawBitmap(originalAndroidImage.getBitmap(), 0.0, 0.0, paint);
    }
    rotate(image, originalImage, matrix, paint) {
        var androidImage = image;
        ;
        androidImage.getBitmap().eraseColor(Color.TRANSPARENT);
        var canvas = androidImage.getCanvas();
        ;
        canvas.concat(matrix);
        var originalAndroidImage = originalImage;
        ;
        canvas.drawBitmap(originalAndroidImage.getBitmap(), 0.0, 0.0, paint);
    }
}
AndroidImageUtil.instance = new AndroidImageUtil();
