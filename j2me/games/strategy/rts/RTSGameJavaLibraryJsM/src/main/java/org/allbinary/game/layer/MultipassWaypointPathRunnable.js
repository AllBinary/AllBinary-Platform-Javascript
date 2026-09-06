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
/* Generated Code Do Not Modify */
import { Exception } from '../../../../java/lang/Exception.js';
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { MultipassState } from '../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js';
//not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointPathRunnableBase } from './WaypointPathRunnableBase.js';
//not GWT import - same folder const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;
export class MultipassWaypointPathRunnable extends WaypointPathRunnableBase {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.multipassState = new MultipassState();
        this.done = false;
        this.list = this.basicArrayListUtil.getImmutableInstance();
        this.pathFindingInfo = NullUtil.getInstance().NULL_OBJECT;
        //inner= member=true isStatic=
        this.FirstRunnable = class extends ARunnable {
            constructor(multipassWaypointPathRunnable) {
                super();
                this.multipassWaypointPathRunnable = multipassWaypointPathRunnable;
            }
            run() {
                this.multipassWaypointPathRunnable.processFirstRunnable();
            }
        };
        this.FIRST_RUNNABLE = new this.FirstRunnable(this);
        //    private boolean first = true;
        //inner= member=true isStatic=
        this.SecondRunnable = class extends ARunnable {
            constructor(multipassWaypointPathRunnable) {
                super();
                this.multipassWaypointPathRunnable = multipassWaypointPathRunnable;
            }
            run() {
                this.multipassWaypointPathRunnable.processSecondRunnable();
            }
        };
        this.SECOND_RUNNABLE = new this.SecondRunnable(this);
        //inner= member=true isStatic=
        this.EndRunnable = class extends ARunnable {
            constructor(multipassWaypointPathRunnable) {
                super();
                this.multipassWaypointPathRunnable = multipassWaypointPathRunnable;
            }
            run() {
                this.multipassWaypointPathRunnable.processEndRunnable();
            }
        };
        this.END_RUNNABLE = new this.EndRunnable(this);
        this.ALREADY_ENDED_RUNNABLE = new class extends ARunnable {
            run() {
                throw new RuntimeException();
            }
        };
        this.currentPassRunnable = this.FIRST_RUNNABLE;
    }
    setRunning(isRunning) {
        this.runningP = isRunning;
        if (this.runningP) {
            this.reset();
            this.done = false;
        }
    }
    run() {
        var logUtil = LogUtil.getInstance();
        ;
        try {
            this.currentPassRunnable.run();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            this.setRunning(false);
        }
    }
    reset2() {
        this.multipassState.step = 0;
        this.multipassState.iteration = 0;
        this.multipassState.iteration2 = 0;
        this.pathFindingInfo = NullUtil.getInstance().NULL_OBJECT;
    }
    finish() {
        this.reset2();
        this.currentPassRunnable = this.ALREADY_ENDED_RUNNABLE;
        this.done = true;
    }
    isDone() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.done;
    }
    reset() {
        this.reset2();
        this.currentPassRunnable = this.FIRST_RUNNABLE;
        this.done = false;
    }
    processFirstRunnable() {
        try {
            this.pathFindingLayer.getWaypointRunnableLogHelper().start(this.pathFindingLayer);
            this.reset2();
            var geographicMapCellPosition = this.pathFindingLayer.getCurrentGeographicMapCellPosition();
            ;
            if (geographicMapCellPosition ==
                null) {
                throw new Exception("Should never be running here");
            }
            this.pathFindingInfo = this.targetPathFindingLayer.getWaypointBehavior().getWaypoint().getPathFindingInfo(geographicMapCellPosition);
            var localPathFindingInfo = this.pathFindingInfo;
            ;
            this.list = this.targetPathFindingLayer.getWaypointBehavior().getWaypoint().getPathsList(geographicMapCellPosition, localPathFindingInfo, this.multipassState);
            if (this.list != this.basicArrayListUtil.getImmutableInstance()) {
                this.END_RUNNABLE.run();
            }
            else {
                this.currentPassRunnable = this.SECOND_RUNNABLE;
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            this.setRunning(false);
            this.finish();
        }
    }
    processSecondRunnable() {
        try {
            var geographicMapCellPosition = this.pathFindingLayer.getCurrentGeographicMapCellPosition();
            ;
            var localPathFindingInfo = this.pathFindingInfo;
            ;
            this.list = this.targetPathFindingLayer.getWaypointBehavior().getWaypoint().getPathsList(geographicMapCellPosition, localPathFindingInfo, this.multipassState);
            if (this.list != this.basicArrayListUtil.getImmutableInstance()) {
                this.END_RUNNABLE.run();
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            this.setRunning(false);
            this.finish();
        }
    }
    processEndRunnable() {
        try {
            var waypointBehavior = this.pathFindingLayer.getWaypointBehavior();
            ;
            waypointBehavior.setWaypointPathsList(this.list);
            this.pathFindingLayer.getWaypointRunnableLogHelper().end(this.pathFindingLayer);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            this.setRunning(false);
        }
        this.finish();
    }
}
