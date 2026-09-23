/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
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
//not GWT import - same folder const OnCompletionListener
//import { MediaPlayerOnBufferingUpdateListener } from './MediaPlayerOnBufferingUpdateListener.js';
//not GWT import - same folder const MediaPlayerOnBufferingUpdateListener
//import { AndroidMediaPlayerOnBufferingUpdateListener } from './AndroidMediaPlayerOnBufferingUpdateListener.js';
//not GWT import - same folder const AndroidMediaPlayerOnBufferingUpdateListener
//import { MediaPlayerOnPreparedListener } from './MediaPlayerOnPreparedListener.js';
//not GWT import - same folder const MediaPlayerOnPreparedListener
//import { AndroidMediaPlayerOnPreparedListener } from './AndroidMediaPlayerOnPreparedListener.js';
//not GWT import - same folder const AndroidMediaPlayerOnPreparedListener
//import { MediaPlayerOnErrorListener } from './MediaPlayerOnErrorListener.js';
//not GWT import - same folder const MediaPlayerOnErrorListener
//import { AndroidMediaPlayerOnErrorListener } from './AndroidMediaPlayerOnErrorListener.js';
//not GWT import - same folder const AndroidMediaPlayerOnErrorListener
//import { MediaPlayerOnCompletionListener } from './MediaPlayerOnCompletionListener.js';
//not GWT import - same folder const MediaPlayerOnCompletionListener
//import { AndroidMediaPlayerOnCompletionListener } from './AndroidMediaPlayerOnCompletionListener.js';
//not GWT import - same folder const AndroidMediaPlayerOnCompletionListener
export class AndroidMediaPlayerWrapperListener extends Object {
    constructor(androidMediaPlayerWrapper) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.androidMediaPlayerWrapper = AndroidMediaPlayerWrapper.NULL_ANDROID_MEDIA_PLAYER_WRAPPER;
        //inner= member=true isStatic=
        this.MediaPlayerOnBufferingUpdateListener = class extends Object {
            onBufferingUpdate(mediaPlayer, i) {
            }
        };
        //inner= member=true isStatic=
        this.MediaPlayerOnPreparedListener = class extends Object {
            onPrepared(mp) {
            }
        };
        //inner= member=true isStatic=
        this.MediaPlayerOnErrorListener = class extends Object {
            onError(mp, what, extra) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        };
        //inner= member=true isStatic=
        this.MediaPlayerOnCompletionListener = class extends Object {
            onCompletion(mp) {
            }
        };
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnBufferingUpdateListener = class extends this.MediaPlayerOnBufferingUpdateListener {
            constructor(androidMediaPlayerWrapperListener) {
                super();
                this.ON_BUFFERING_UPDATE = "onBufferingUpdate()";
                this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
            }
            onBufferingUpdate(mediaPlayer, i) {
                var logUtil = LogUtil.getInstance();
                ;
                logUtil.putF(new StringMaker().append("Update buffer: ").appendint(i).append("%").toString(), this, this.ON_BUFFERING_UPDATE);
                this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.DEVICE_UNAVAILABLE);
            }
        };
        this.mOnBufferingUpdateListener = new this.AndroidMediaPlayerOnBufferingUpdateListener(this);
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnPreparedListener = class extends this.MediaPlayerOnPreparedListener {
            constructor(androidMediaPlayerWrapperListener) {
                super();
                this.ON_PREPARE = "onPrepare()";
                this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
            }
            onPrepared(mp) {
                var logUtil = LogUtil.getInstance();
                ;
                var commonStrings = CommonStrings.getInstance();
                ;
                logUtil.putF(commonStrings.START, this, this.ON_PREPARE);
                this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.DEVICE_AVAILABLE);
            }
        };
        this.mOnPreparedListener = new this.AndroidMediaPlayerOnPreparedListener(this);
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnErrorListener = class extends this.MediaPlayerOnErrorListener {
            constructor(androidMediaPlayerWrapperListener) {
                super();
                this.ON_ERROR = "onError()";
                this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
            }
            onError(mp, what, extra) {
                var logUtil = LogUtil.getInstance();
                ;
                logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append("What: ").appendint(what).append(" Extra: ").appendint(extra).toString(), this, this.ON_ERROR);
                this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.ERROR);
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        };
        this.mOnErrorListener = new this.AndroidMediaPlayerOnErrorListener(this);
        //inner= member=true isStatic=
        this.AndroidMediaPlayerOnCompletionListener = class extends this.MediaPlayerOnCompletionListener {
            constructor(androidMediaPlayerWrapperListener) {
                super();
                this.ON_COMPLETE = "onComplete()";
                this.androidMediaPlayerWrapperListener = androidMediaPlayerWrapperListener;
            }
            onCompletion(mp) {
                var logUtil = LogUtil.getInstance();
                ;
                var commonStrings = CommonStrings.getInstance();
                ;
                logUtil.putF(commonStrings.START, this, this.ON_COMPLETE);
                this.androidMediaPlayerWrapperListener.androidMediaPlayerWrapper.update(PlayerListener.END_OF_MEDIA);
            }
        };
        this.mOnCompletionListener = new this.AndroidMediaPlayerOnCompletionListener(this);
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
            this.androidMediaPlayerWrapper = androidMediaPlayerWrapper;
            var mediaPlayer = androidMediaPlayerWrapper.getMediaPlayer();
            ;
            mediaPlayer.setOnCompletionListener(this.mOnCompletionListener);
            mediaPlayer.setOnBufferingUpdateListener(this.mOnBufferingUpdateListener);
            mediaPlayer.setOnPreparedListener(this.mOnPreparedListener);
            mediaPlayer.setOnErrorListener(this.mOnErrorListener);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
        }
    }
}
