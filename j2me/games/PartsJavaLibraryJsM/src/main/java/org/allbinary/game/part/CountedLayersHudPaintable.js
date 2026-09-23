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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import - same folder const CountedLayerInterfaceFactoryPart
export class CountedLayersHudPaintable extends Object {
    constructor(partInterfaceArray, dropSize, startIndex, countedTotalStringColor, countedPartsBorder) {
        super();
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.height = 0;
        this.partInterfaceArray = partInterfaceArray;
        this.startIndex = startIndex;
        this.countedTotalStringColor = countedTotalStringColor;
        this.countedPartsBorder = countedPartsBorder;
        this.dropSize = dropSize;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.height = font.getHeight();
        if (this.dropSize > font.getHeight()) {
            this.height = this.dropSize;
        }
        if (CountedLayersHudPaintable.XXStringWidth == 0) {
            var XXString = "XX";
            ;
            CountedLayersHudPaintable.XXStringWidth = font.stringWidth(XXString);
        }
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var lastWidth = this.displayInfoSingleton.getLastWidth();
        ;
        var widthEdge = lastWidth - this.dropSize;
        ;
        var size = this.partInterfaceArray.length;
        ;
        var count = 0;
        ;
        var y = 0;
        ;
        var countedLayerInterfaceFactory;
        ;
        var pickedUpLayerInterfaceFactoryInterface;
        ;
        var layerInterface;
        ;
        var charArray;
        ;
        for (var index = this.startIndex; index < size; index++) {
            countedLayerInterfaceFactory = this.partInterfaceArray[index];
            if (countedLayerInterfaceFactory.getTotal() > 0) {
                pickedUpLayerInterfaceFactoryInterface = countedLayerInterfaceFactory.getCountedPickedUpLayerInterfaceFactory();
                layerInterface = pickedUpLayerInterfaceFactoryInterface.getIconLayer();
                y = 40 + (count * this.height);
                layerInterface.setPosition(widthEdge, y, layerInterface.getZP());
                layerInterface.paint(graphics);
                graphics.setColor(this.countedTotalStringColor);
                countedLayerInterfaceFactory.paint(graphics);
                charArray = countedLayerInterfaceFactory.getTotalString();
                graphics.drawChars(charArray, 0, charArray.length, widthEdge - countedLayerInterfaceFactory.getXOffset(), y, 0);
                count++;
            }
        }
        if (count > 0) {
            graphics.setColor(this.countedPartsBorder);
            graphics.drawRect(lastWidth - (CountedLayersHudPaintable.XXStringWidth + this.dropSize), 40, CountedLayersHudPaintable.XXStringWidth + this.dropSize, (count * this.height) + 3);
        }
    }
    paintThreed(graphics) {
    }
}
CountedLayersHudPaintable.XXStringWidth = 0;
