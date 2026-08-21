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
import { GameAdStateFactory } from '../../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
import { Processor } from '../../../../../../org/allbinary/canvas/Processor.js';
import { GameNotification } from '../../../../../../org/allbinary/game/layer/hud/basic/notification/GameNotification.js';
import { GameNotificationHud } from '../../../../../../org/allbinary/game/layer/hud/basic/notification/GameNotificationHud.js';
import { GameNotificationEventHandler } from '../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
import { CustomGPoint } from '../../../../../../org/allbinary/graphics/CustomGPoint.js';
import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
import { GameTickTimeDelayHelperFactory } from '../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
import { CircularIndexUtil } from '../../../../../../org/allbinary/util/CircularIndexUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//import { SetAndRemoveProcessor } from './SetAndRemoveProcessor.js';
//import { NextUnremoveableProcessor } from './NextUnremoveableProcessor.js';
export class PlayerGameNotificationHud extends GameNotificationHud {
    constructor(location, direction, bufferZone, basicColor) {
        super(location, direction, bufferZone, basicColor);
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.displayInfo = DisplayInfoSingleton.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(0);
        this.gameNotification = new GameNotification();
        this.permanentGameNotification = new GameNotification();
        //inner= member=true isStatic=
        this.SetAndRemoveProcessor = class extends Processor {
            constructor(updateMeasurementProcessor) {
                super();
                this.updateMeasurementProcessor = updateMeasurementProcessor;
            }
            //@Throws(Exception.constructor)
            process() {
                this.updateMeasurementProcessor.setAndRemoveProcess();
            }
        };
        //inner= member=true isStatic=
        this.NextUnremoveableProcessor = class extends Processor {
            constructor(updateMeasurementProcessor) {
                super();
                this.updateMeasurementProcessor = updateMeasurementProcessor;
            }
            //@Throws(Exception.constructor)
            process() {
                this.updateMeasurementProcessor.setNextUnremoveableProcess();
            }
        };
        this.setAndRemoveProcessor = new this.SetAndRemoveProcessor(this);
        this.nextUnremoveableProcessor = new this.NextUnremoveableProcessor(this);
        this.processor = Processor.getInstance();
        this.PERMANENT_GAME_NOTIFICATION = "Permanent Game Notification: ";
        this.lastString = StringUtil.getInstance().EMPTY_STRING;
        this.string = this.EMPTY_STRING;
        this.point = CustomGPoint.NULL_CUSTOM_POINT;
        this.width = 0;
        //For kotlin this is before the body of the constructor.
        this.circularIndexUtil = CircularIndexUtil.createInstance(0);
        var gameNotificationEventHandler = GameNotificationEventHandler.getInstance();
        ;
        gameNotificationEventHandler.removeAllListeners();
        gameNotificationEventHandler.addListenerInterface(this);
    }
    updateMeasurement(graphics) {
        try {
            super.updateMeasurement(graphics);
            var font = graphics.getFont();
            ;
            this.width = font.stringWidth(this.string);
            this.processor.process();
            this.processor = Processor.getInstance();
            //: 
        }
        catch (e) {
            var logUtil = LogUtil.getInstance();
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            logUtil.put(commonStrings.EXCEPTION, this, commonStrings.UPDATE, e);
        }
    }
    getPoint(x, y) {
        this.point = CustomGPoint.getInstance3(0, 0);
        this.point.setX(x);
        this.point.setY(y);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.point;
    }
    add(string, seconds, basicColor, permanent) {
        if (permanent.valueOf()) {
            if (this.lastString != string) {
                this.lastString = string;
                this.logUtil.putF(new StringMaker().append(this.PERMANENT_GAME_NOTIFICATION).append(string).toString(), this, this.commonStrings.ADD);
            }
            this.permanentGameNotification.add(string, seconds, basicColor);
            this.circularIndexUtil.setSize(this.permanentGameNotification.getSize());
        }
        else {
            this.gameNotification.add(string, seconds, basicColor);
        }
    }
    //@Throws(Exception.constructor)
    processTick() {
        if (this.timeDelayHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            var gameAdState = GameAdStateFactory.getInstance().getCurrentInstance();
            ;
            if (gameAdState.isShowingAtLocation(this.getLocation())) {
                this.offsetY = -54;
            }
            else {
                this.offsetY = 0;
            }
            if (this.gameNotification.getSize() > 0) {
                this.setAndRemove();
            }
            else if (this.permanentGameNotification.getSize() > 0) {
                this.setNextUnremoveable();
            }
            else {
                this.string = this.EMPTY_STRING;
            }
        }
    }
    //@Throws(Exception.constructor)
    setAndRemove() {
        this.string = this.gameNotification.stringList.removeAt(0);
        this.processor = this.setAndRemoveProcessor;
    }
    //@Throws(Exception.constructor)
    setAndRemoveProcess() {
        this.setX((this.displayInfo.getLastWidth() - this.width) >> 1);
        this.point.setX(this.getX());
        this.point.setY(this.getY());
        var time = this.gameNotification.timeList.removeAt(0);
        ;
        var iTime = time.intValue() * 1000;
        ;
        if (iTime == 0) {
            iTime = 500;
        }
        this.timeDelayHelper.delay = iTime;
        this.setBasicColorP(this.gameNotification.colorList.removeAt(0));
    }
    //@Throws(Exception.constructor)
    setNextUnremoveable() {
        var index = this.circularIndexUtil.getIndex();
        ;
        this.string = this.permanentGameNotification.stringList.objectArray[index];
        this.processor = this.nextUnremoveableProcessor;
    }
    //@Throws(Exception.constructor)
    setNextUnremoveableProcess() {
        var index = this.circularIndexUtil.getIndex();
        ;
        this.setX((this.displayInfo.getLastWidth() - this.width) >> 1);
        this.point.setX(this.getX());
        this.point.setY(this.getY());
        var time = this.permanentGameNotification.timeList.objectArray[index];
        ;
        this.timeDelayHelper.delay = time.intValue() * 1000;
        this.setBasicColorP(this.permanentGameNotification.colorList.objectArray[index]);
        this.circularIndexUtil.next();
    }
    clear() {
        this.gameNotification.clear();
        this.permanentGameNotification.clear();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        super.paint(graphics, this.string);
    }
}
