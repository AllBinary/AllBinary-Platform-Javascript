/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import - same folder const AllBinaryTiledLayer
export class TiledLayerUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TiledLayerUtil.instance;
    }
    keepOnBorderdMapX(terrainTiledLayer, x, width, mapBorderBufferWidth) {
        var newX = x;
        ;
        var maxRight = terrainTiledLayer.getWidth() - width - mapBorderBufferWidth;
        ;
        if (x + width > maxRight) {
            newX = maxRight;
        }
        if (x < mapBorderBufferWidth) {
            newX = mapBorderBufferWidth;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newX;
    }
    keepOnBorderdMapY(terrainTiledLayer, y, height, mapBorderBufferHeight) {
        var newY = y;
        ;
        var maxBottom = terrainTiledLayer.getHeight() - height - mapBorderBufferHeight;
        ;
        if (y + height > maxBottom) {
            newY = maxBottom;
        }
        if (y < mapBorderBufferHeight) {
            newY = mapBorderBufferHeight;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newY;
    }
    keepOnMapX(terrainTiledLayer, x, width) {
        var newX = x;
        ;
        var maxRight = terrainTiledLayer.getWidth() - width;
        ;
        if (x >= maxRight) {
            newX = maxRight;
        }
        if (x < 0) {
            newX = 0;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newX;
    }
    keepOnMapY(terrainTiledLayer, y, height) {
        var newY = y;
        ;
        var maxBottom = terrainTiledLayer.getHeight() - height;
        ;
        if (y >= maxBottom) {
            newY = maxBottom;
        }
        if (y < 0) {
            newY = 0;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newY;
    }
}
TiledLayerUtil.instance = new TiledLayerUtil();
