/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;
import { SimpleGeographicMapCellPositionFactory } from '../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import - same folder const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//not GWT import - same folder const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
export class PathAnimation extends Animation {
    constructor(pathFindingLayer, linePathAnimation) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.allBinaryGameLayerManagerP = AllBinaryGameLayerManager.getNullInstance();
        this.startColor = BasicColorFactory.getInstance().RED;
        this.middleColor = BasicColorFactory.getInstance().BLUE;
        this.endColor = BasicColorFactory.getInstance().GREEN;
        this.pathFindingLayer = pathFindingLayer;
        this.linePathAnimation = linePathAnimation;
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        this.allBinaryGameLayerManagerP = allBinaryGameLayerManager;
    }
    //@Throws(Exception.constructor)
    nextFrame() {
    }
    paintXY(graphics, x, y) {
        try {
            var waypointBehaviorBase = this.pathFindingLayer.getWaypointBehavior();
            ;
            if (waypointBehaviorBase !=
                null) {
                var geographicMapCellHistory = waypointBehaviorBase.getCurrentGeographicMapCellHistory();
                ;
                var list = geographicMapCellHistory.getTracked();
                ;
                var size = list.size();
                ;
                if (size > 0) {
                    var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
                    ;
                    var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
                    ;
                    var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
                    ;
                    var geographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                    ;
                    var nextPoint;
                    ;
                    var point;
                    ;
                    var start = size - 2;
                    ;
                    for (var index = 0; index < size - 1; index++) {
                        if (index == start) {
                            this.setBasicColorP(this.startColor);
                            this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
                        }
                        else if (geographicMapCellHistory.isVisited(geographicMapCellPosition)) {
                            this.setBasicColorP(this.endColor);
                            this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
                        }
                        else {
                            this.setBasicColorP(this.middleColor);
                            this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
                        }
                        geographicMapCellPosition = list.get(index);
                        point = geographicMapCellPosition.getMidPoint();
                        geographicMapCellPosition = list.get(index + 1);
                        nextPoint = geographicMapCellPosition.getMidPoint();
                        this.linePathAnimation.paint(graphics, point, nextPoint, tiledLayer);
                    }
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.putF("Cleared Target", this, CanvasStrings.getInstance().PAINT);
        }
    }
}
