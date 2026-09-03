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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const GraphicsDevice = globalThis.java.awt.GraphicsDevice;
import { GraphicsEnvironment } from '../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment = globalThis.java.awt.GraphicsEnvironment;
import { Toolkit } from '../../../java/awt/Toolkit.js';
//not GWT import const Toolkit = globalThis.java.awt.Toolkit;
//not plain js import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DisplaysUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DisplaysUtil.instance;
    }
    getPrimaryScreenSize() {
        var dimension = Toolkit.getDefaultToolkit().getScreenSize();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Rectangle(PointFactory.getInstance().ZERO_ZERO, dimension.width, dimension.height);
    }
    getScreenSizesAsRectangleArray() {
        var graphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment();
        ;
        var graphicsDeviceArray = graphicsEnvironment.getScreenDevices();
        ;
        var graphicsDevice;
        ;
        var displayMode;
        ;
        var rectangle;
        ;
        var size = graphicsDeviceArray.length;
        ;
        var rectangleArray = new Array(size);
        ;
        for (var index = 0; index < size; index++) {
            graphicsDevice = graphicsDeviceArray[index];
            displayMode = graphicsDevice.getDisplayMode();
            rectangle = new Rectangle(PointFactory.getInstance().ZERO_ZERO, displayMode.getWidth(), displayMode.getHeight());
            rectangleArray[index] = rectangle;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return rectangleArray;
    }
}
DisplaysUtil.instance = new DisplaysUtil();
