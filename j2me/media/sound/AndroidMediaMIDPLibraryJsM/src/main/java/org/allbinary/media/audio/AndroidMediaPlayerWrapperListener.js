/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { PlayerListenerI } from '../../../../javax/microedition/media/PlayerListener.js';
const PlayerListener = PlayerListenerI;
//not GWT import const MediaPlayer
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidMediaPlayerWrapper } from './AndroidMediaPlayerWrapper.js';
export class AndroidMediaPlayerWrapperListener extends Object {
    constructor(androidMediaPlayerWrapper) {
        super();
        //inner= member=true isStatic=
        this.MediaPlayerOnBufferingUpdateListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends Object {
                onBufferingUpdate(mediaPlayer, i) {
                }
            };
        })();
        //inner= member=true isStatic=
        this.MediaPlayerOnPreparedListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends Object {
                onPrepared(mp) {
                }
            };
        })();
        //inner= member=true isStatic=
        this.MediaPlayerOnErrorListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends Object {
                onError(mp, what, extra) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return false;
                }
            };
        })();
        //inner= member=true isStatic=
        this.MediaPlayerOnCompletionListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends Object {
                onCompletion(mp) {
                }
            };
        })();
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnBufferingUpdateListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends this.MediaPlayerOnBufferingUpdateListener {
                constructor(androidMediaPlayerWrapperListener) {
                    super();
                    this.ON_BUFFERING_UPDATE = "onBufferingUpdate()";
                    this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
                }
                onBufferingUpdate(mediaPlayer, i) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    logUtil.putF(new StringMaker().append("Update buffer: ").appendint(i).append("%").toString(), this, this.ON_BUFFERING_UPDATE);
                    this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.DEVICE_UNAVAILABLE);
                }
            };
        })();
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnPreparedListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends this.MediaPlayerOnPreparedListener {
                constructor(androidMediaPlayerWrapperListener) {
                    super();
                    this.ON_PREPARE = "onPrepare()";
                    this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
                }
                onPrepared(mp) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    let commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.putF(commonStrings.START, this, this.ON_PREPARE);
                    this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.DEVICE_AVAILABLE);
                }
            };
        })();
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnErrorListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends this.MediaPlayerOnErrorListener {
                constructor(androidMediaPlayerWrapperListener) {
                    super();
                    this.ON_ERROR = "onError()";
                    this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
                }
                onError(mp, what, extra) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append("What: ").appendint(what).append(" Extra: ").appendint(extra).toString(), this, this.ON_ERROR);
                    this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.ERROR);
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            };
        })();
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnCompletionListener = (() => {
            const outer$AndroidMediaPlayerWrapperListener = this;
            return class extends this.MediaPlayerOnCompletionListener {
                constructor(androidMediaPlayerWrapperListener) {
                    super();
                    this.ON_COMPLETE = "onComplete()";
                    this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
                }
                onCompletion(mp) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    let commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.putF(commonStrings.START, this, this.ON_COMPLETE);
                    this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.END_OF_MEDIA);
                }
            };
        })();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.androidMediaPlayerWrapper = AndroidMediaPlayerWrapper.NULL_ANDROID_MEDIA_PLAYER_WRAPPER;
        this.mOnBufferingUpdateListener = new this.AndroidMediaPlayerOnBufferingUpdateListener(this);
        this.mOnPreparedListener = new this.AndroidMediaPlayerOnPreparedListener(this);
        this.mOnErrorListener = new this.AndroidMediaPlayerOnErrorListener(this);
        this.mOnCompletionListener = new this.AndroidMediaPlayerOnCompletionListener(this);
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
            this.androidMediaPlayerWrapper = androidMediaPlayerWrapper;
            let mediaPlayer = androidMediaPlayerWrapper.getMediaPlayer();
            ;
            mediaPlayer.setOnCompletionListener(this.mOnCompletionListener);
            mediaPlayer.setOnBufferingUpdateListener(this.mOnBufferingUpdateListener);
            mediaPlayer.setOnPreparedListener(this.mOnPreparedListener);
            mediaPlayer.setOnErrorListener(this.mOnErrorListener);
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
            }
        }
    }
}
