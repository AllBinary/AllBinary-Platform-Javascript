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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
import { CircleFilledAnimation } from '../../../../../../org/allbinary/animation/vector/CircleFilledAnimation.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const GeographicMapCellPositionEvent = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEvent;
import { GeographicMapCellPositionEventHandler } from '../../../../../../org/allbinary/media/graphics/geography/map/event/GeographicMapCellPositionEventHandler.js';
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MiniMapLayer extends AllBinaryLayer {
    constructor(geographicMapInterface, viewPosition) {
        super(StringUtil.getInstance().EMPTY_STRING, new Rectangle(PointFactory.getInstance().createXY(0, viewPosition.getY()), geographicMapInterface.getAllBinaryTiledLayer().getWidth(), geographicMapInterface.getAllBinaryTiledLayer().getHeight()), viewPosition);
        //For kotlin this is before the body of the constructor.
        this.allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        this.geographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        this.animationInterface = new CircleFilledAnimation(this.allBinaryTiledLayer.getCellWidth(), this.allBinaryTiledLayer.getCellHeight(), BasicColorFactory.getInstance().WHITE);
        this.list = new BasicArrayListD();
        this.basicColorList = new BasicArrayListD();
        this.positionList = new BasicArrayListD();
        GeographicMapCellPositionEventHandler.getInstance().addListener(this);
        this.init();
    }
    //@Throws(Exception.constructor)
    init() {
        this.allBinaryTiledLayer.setPosition(this.x, this.y, this.z);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onRemoveGeographicMapCellPositionEvent(geographicMapCellPositionEvent) {
        var colorCompositeInterface = geographicMapCellPositionEvent.getSource();
        ;
        var index = this.list.indexOf(colorCompositeInterface);
        ;
        if (index >= 0) {
            this.list.removeAt(index);
            this.basicColorList.removeAt(index);
            this.positionList.removeAt(index);
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onGeographicMapCellPositionEvent(geographicMapCellPositionEvent) {
        var colorCompositeInterface = geographicMapCellPositionEvent.getSource();
        ;
        var layerIndex = -1;
        ;
        var size = this.list.size();
        ;
        var nextColorCompositeInterface;
        ;
        for (var index = 0; index < size; index++) {
            nextColorCompositeInterface = this.list.get(index);
            if (nextColorCompositeInterface == colorCompositeInterface) {
                layerIndex = index;
                break;
            }
        }
        var geographicMapCellPosition = this.geographicMapCellPositionFactory.getInstance(geographicMapCellPositionEvent.getGeographicMapCellPosition());
        ;
        var point = geographicMapCellPosition.getPoint();
        ;
        if (layerIndex == -1) {
            this.list.add(colorCompositeInterface);
            var basicColor = colorCompositeInterface.getBasicColorP();
            ;
            this.basicColorList.add(basicColor);
            this.positionList.add(point);
            layerIndex = this.basicColorList.size() - 1;
        }
        else {
            this.positionList.set(layerIndex, point);
        }
    }
    paintDots(graphics) {
        var localPositionList = this.positionList;
        ;
        var localBasicColorList = this.basicColorList;
        ;
        var length = localPositionList.size();
        ;
        var point;
        ;
        var basicColor;
        ;
        for (var index = length; --index >= 0;) {
            point = localPositionList.get(index);
            basicColor = localBasicColorList.get(index);
            graphics.setColor(basicColor.intValue());
            this.animationInterface.setBasicColorP(basicColor);
            this.animationInterface.paintXY(graphics, point.getX() + this.x, point.getY() + this.y);
        }
    }
    paint(graphics) {
        this.allBinaryTiledLayer.paint(graphics);
        this.paintDots(graphics);
    }
}
