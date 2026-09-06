/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
import { System } from '../../../../../java/lang/System.js';
import { Thread } from '../../../../../java/lang/Thread.js';
import { Service } from '../../../../../android/app/Service.js';
//not GWT import const Intent = globalThis.android.content.Intent;
import { MediaPlayer } from '../../../../../android/media/MediaPlayer.js';
//not GWT import const IBinder = globalThis.android.os.IBinder;
import { NullAndroidCanvas } from '../../../../../org/allbinary/android/NullAndroidCanvas.js';
//not GWT import const NullAndroidCanvas = globalThis.org.allbinary.android.NullAndroidCanvas;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStateStrings } 
const CommonStateStrings = globalThis.org.allbinary.string.CommonStateStrings;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MusicStrings } from './MusicStrings.js';
//not GWT import - same folder const MusicStrings = globalThis.org.allbinary.media.audio.music.MusicStrings;
export class BaseMusicService extends Service {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.commonStateStrings = CommonStateStrings.getInstance();
        this.ALREADY_PLAYING = "This is one song per music service";
        this.WAITING_FOR_MUSIC_TO_END = "Waiting for music to end";
        this.player = NullAndroidCanvas.NULL_MEDIA_PLAYER;
        this.songId = -1;
        this.leftVolume = -1;
        this.rightVolume = -1;
    }
    onBind(intent) {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.BIND);
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    onCreate() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.CREATE);
    }
    onDestroy() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.DESTROY);
        if (this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER) {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.PAUSE);
            this.player.stop();
            this.player.reset();
            this.player.release();
        }
    }
    pause() {
        if (this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER) {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.PAUSE);
            this.player.pause();
        }
    }
    resume() {
        if (this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER && !this.player.isPlaying()) {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.RESUME);
            this.player.start();
        }
    }
    start() {
        this.player = MediaPlayer.create(this, this.songId);
        this.player.setVolume((this.leftVolume) / 100.0, (this.rightVolume) / 100.0);
        this.player.setLooping(false);
        this.player.start();
    }
    onStart(intent, startid) {
        this.onStartCommandIntent(intent);
        this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.START);
    }
    onStartCommand(intent, flags, startId) {
        this.onStartCommandIntent(intent);
        //if statement needs to be on the same line and ternary does not work the same way.
        return Service.START_STICKY;
    }
    onStartCommandIntent(intent) {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStateStrings.ON_START_COMMAND);
        var musicStrings = MusicStrings.getInstance();
        ;
        if (intent !=
            null) {
            var command = intent.getIntExtra(this.commonStateStrings.ON_START_COMMAND, -1);
            ;
            this.logUtil.putF(CommonLabels.getInstance().COMMAND_LABEL + command, this, this.commonStateStrings.ON_START_COMMAND);
            if (command == 1) {
                this.pause();
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            else if (command == 2) {
                this.resume();
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            else {
                this.songId = intent.getIntExtra(musicStrings.SONG_EXTRA, -1);
                this.leftVolume = intent.getIntExtra(musicStrings.LEFT_VOLUME, -1);
                this.rightVolume = intent.getIntExtra(musicStrings.RIGHT_VOLUME, -1);
            }
        }
        else {
            throw new RuntimeException("Started service without intent");
        }
        if (this.songId != -1) {
            System.gc();
            if (this.player != NullAndroidCanvas.NULL_MEDIA_PLAYER && this.player.isPlaying()) {
                var player = this.player;
                ;
                this.logUtil.putF(this.ALREADY_PLAYING, this, this.commonStateStrings.ON_START_COMMAND);
                //inner=true member= isStatic=
                class MusicRunnable extends ARunnable {
                    constructor(baseMusicService) {
                        super();
                        this.baseMusicService = baseMusicService;
                    }
                    run() {
                        var logUtil = LogUtil.getInstance();
                        ;
                        var commonStrings = CommonStrings.getInstance();
                        ;
                        var commonStateStrings = CommonStateStrings.getInstance();
                        ;
                        try {
                            while (player.isPlaying()) {
                                logUtil.putF(this.baseMusicService.WAITING_FOR_MUSIC_TO_END, this, commonStateStrings.ON_START_COMMAND);
                                Thread.sleep(1200);
                            }
                            this.baseMusicService.onStartCommandIntent(intent);
                            //: 
                        }
                        catch (e) {
                            logUtil.put(commonStrings.EXCEPTION, this, commonStateStrings.ON_START_COMMAND, e);
                        }
                    }
                }
                //Otherwise - statement - EmptyStmt
                var runnable = new MusicRunnable(this);
                ;
                var thread = new Thread(runnable);
                ;
                thread.start();
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            this.start();
        }
    }
}
