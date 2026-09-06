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
import { NullProgressActivity } from '../../../../../../org/allbinary/android/activity/NullProgressActivity.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import - same folder const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
//import { ShowTitleProgressBarRunnable } from './ShowTitleProgressBarRunnable.js';
//not GWT import - same folder const ShowTitleProgressBarRunnable = globalThis.org.allbinary.graphics.canvas.transition.progress.ShowTitleProgressBarRunnable;
//import { DismissTitleProgressBarRunnable } from './DismissTitleProgressBarRunnable.js';
//not GWT import - same folder const DismissTitleProgressBarRunnable = globalThis.org.allbinary.graphics.canvas.transition.progress.DismissTitleProgressBarRunnable;
//import { TitleProgressBarPortionSetProgressRunnable } from './TitleProgressBarPortionSetProgressRunnable.js';
//not GWT import - same folder const TitleProgressBarPortionSetProgressRunnable = globalThis.org.allbinary.graphics.canvas.transition.progress.TitleProgressBarPortionSetProgressRunnable;
//import { TitleProgressBarSetProgressRunnable } from './TitleProgressBarSetProgressRunnable.js';
//not GWT import - same folder const TitleProgressBarSetProgressRunnable = globalThis.org.allbinary.graphics.canvas.transition.progress.TitleProgressBarSetProgressRunnable;
export class AndroidTitleProgressBar extends ProgressCanvas {
    constructor(title, backgroundBasicColor, foregroundBasicColor) {
        super(title, backgroundBasicColor, foregroundBasicColor);
        //inner= member=true isStatic=
        this.TitleProgressBarSetProgressRunnable = class extends Object {
            constructor(androidTitleProgressBar) {
                super();
                this.androidTitleProgressBar = androidTitleProgressBar;
            }
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                var commonStrings = CommonStrings.getInstance();
                ;
                try {
                    var value = Math.round(this.androidTitleProgressBar.getValue());
                    ;
                    this.androidTitleProgressBar.progressActivity.onTitleProgressBarSetProgress(value);
                    //: 
                }
                catch (e) {
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        };
        //inner= member=true isStatic=
        this.TitleProgressBarPortionSetProgressRunnable = class extends Object {
            constructor(androidTitleProgressBar) {
                super();
                this.androidTitleProgressBar = androidTitleProgressBar;
            }
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                var commonStrings = CommonStrings.getInstance();
                ;
                try {
                    var value = Math.round((this.androidTitleProgressBar.getValue() + this.androidTitleProgressBar.getMaxValue() / this.androidTitleProgressBar.portion));
                    ;
                    this.androidTitleProgressBar.progressActivity.onTitleProgressBarSetProgress(value);
                    //: 
                }
                catch (e) {
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        };
        //inner= member=true isStatic=
        this.ShowTitleProgressBarRunnable = class extends Object {
            constructor(androidTitleProgressBar) {
                super();
                this.androidTitleProgressBar = androidTitleProgressBar;
            }
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                var commonStrings = CommonStrings.getInstance();
                ;
                try {
                    var maxValue = Math.round(this.androidTitleProgressBar.getMaxValue());
                    ;
                    this.androidTitleProgressBar.progressActivity.onShowTitleProgressBar(maxValue, false);
                    //: 
                }
                catch (e) {
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        };
        //inner= member=true isStatic=
        this.DismissTitleProgressBarRunnable = class extends Object {
            constructor(androidTitleProgressBar) {
                super();
                this.androidTitleProgressBar = androidTitleProgressBar;
            }
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                var commonStrings = CommonStrings.getInstance();
                ;
                try {
                    this.androidTitleProgressBar.progressActivity.onDismissTitleProgressBar();
                    //: 
                }
                catch (e) {
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        };
        this.showTitleProgressBarRunnable = new this.ShowTitleProgressBarRunnable(this);
        this.dismissTitleProgressBarRunnable = new this.DismissTitleProgressBarRunnable(this);
        this.progressDialogPortionSetProgressRunnable = new this.TitleProgressBarPortionSetProgressRunnable(this);
        this.progressDialogSetProgressRunnable = new this.TitleProgressBarSetProgressRunnable(this);
        this.progressActivity = NullProgressActivity.NULL_PROGRESS_ACTIVITY;
        this.portion = 0;
        //For kotlin this is before the body of the constructor.
    }
    init(activity) {
        this.progressActivity = activity;
    }
    isInitialized() {
        if (this.progressActivity != NullProgressActivity.NULL_PROGRESS_ACTIVITY) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    start() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.START_METHOD_NAME);
            super.start();
            this.progressActivity.runOnUiThread(this.showTitleProgressBarRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.START_METHOD_NAME, e);
        }
    }
    end() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.END_METHOD_NAME);
            this.progressActivity.runOnUiThread(this.dismissTitleProgressBarRunnable);
            super.end();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.END_METHOD_NAME, e);
        }
    }
    addPortion(value, text, index) {
        try {
            super.addPortion(value, text, index);
            this.portion = value;
            this.progressActivity.runOnUiThread(this.progressDialogPortionSetProgressRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.ADD_PORTION, e);
        }
    }
    addNormalPortion(value, text) {
        try {
            super.addNormalPortion(value, text);
            this.portion = value;
            this.progressActivity.runOnUiThread(this.progressDialogPortionSetProgressRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.ADD_PORTION, e);
        }
    }
    setValue(value) {
        try {
            super.setValue(value);
            this.progressActivity.runOnUiThread(this.progressDialogSetProgressRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "setValue", e);
        }
    }
    waitUntilDisplayed() {
    }
    paint(graphics) {
    }
}
