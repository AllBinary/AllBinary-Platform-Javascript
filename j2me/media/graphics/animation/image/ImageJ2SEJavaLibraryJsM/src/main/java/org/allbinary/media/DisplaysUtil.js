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
//not GWT import const GraphicsDevice
import { GraphicsEnvironment } from '../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment
import { Toolkit } from '../../../java/awt/Toolkit.js';
//not GWT import const Toolkit
import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DisplaysUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DisplaysUtil.instance;
    }
    getPrimaryScreenSize() {
        let dimension = Toolkit.getDefaultToolkit().getScreenSize();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Rectangle(PointFactory.getInstance().ZERO_ZERO, dimension.width, dimension.height);
    }
    getScreenSizesAsRectangleArray() {
        let graphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment();
        ;
        let graphicsDeviceArray = graphicsEnvironment.getScreenDevices();
        ;
        let graphicsDevice;
        ;
        let displayMode;
        ;
        let rectangle;
        ;
        let size = graphicsDeviceArray.length;
        ;
        let rectangleArray = new Array(size);
        ;
        for (let index = 0; index < size; index++) {
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
