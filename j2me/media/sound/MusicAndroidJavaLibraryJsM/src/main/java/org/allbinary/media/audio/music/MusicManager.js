/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const Context = globalThis.android.content.Context;
import { Intent } from '../../../../../android/content/Intent.js';
//not GWT import const Intent = globalThis.android.content.Intent;
import { AndroidServicesUtil } from '../../../../../org/allbinary/android/AndroidServicesUtil.js';
//not GWT import const AndroidServicesUtil = globalThis.org.allbinary.android.AndroidServicesUtil;
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { NoSound } from '../../../../../org/allbinary/media/audio/NoSound.js';
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;
//not plain js import { CommonStateStrings } 
const CommonStateStrings = globalThis.org.allbinary.string.CommonStateStrings;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MusicStrings } from './MusicStrings.js';
//not GWT import - same folder const MusicStrings = globalThis.org.allbinary.media.audio.music.MusicStrings;
export class MusicManager extends Object {
    static pause(activity, musicServiceClass) {
        var commonStateStrings = CommonStateStrings.getInstance();
        ;
        var musicPauseIntent = new Intent(activity, musicServiceClass.prototype.constructor);
        ;
        musicPauseIntent.putExtra(commonStateStrings.ON_START_COMMAND, 1);
        activity.startService(musicPauseIntent);
    }
    static resume(activity, musicServiceClass) {
        if (AndroidServicesUtil.getInstance().isServiceRunning(musicServiceClass.toString())) {
            var commonStateStrings = CommonStateStrings.getInstance();
            ;
            var musicResumeIntent = new Intent(activity, musicServiceClass.prototype.constructor);
            ;
            musicResumeIntent.putExtra(commonStateStrings.ON_START_COMMAND, 2);
            activity.startService(musicResumeIntent);
        }
    }
    constructor(musicServiceClass, songList) {
        super();
        this.PLAY = "Play ";
        this.FOR = " for: ";
        this.commonStrings = CommonStrings.getInstance();
        this.musicStrings = MusicStrings.getInstance();
        this.commonStateStrings = CommonStateStrings.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.resourceUtil = ResourceUtil.getInstance();
        this.androidServicesUtil = AndroidServicesUtil.getInstance();
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(0);
        this.timeDelayHelper2 = new TimeDelayHelper(1200);
        this.currentSongSound = NoSound.getInstance();
        this.nextSongSound = NoSound.getInstance();
        this.leftVolume = 100;
        this.rightVolume = 100;
        PreLogUtil.put(this.commonStateStrings.CONTEXT + this.resourceUtil.getContext(), this, this.commonStrings.CONSTRUCTOR);
        this.musicServiceClass = musicServiceClass;
        this.currentIntent = new Intent(this.resourceUtil.getContext(), musicServiceClass.prototype.constructor);
        this.songList = songList;
    }
    nextSong(nextSongSound, leftVolume, rightVolume) {
        if (nextSongSound ==
            null) {
            nextSongSound = NoSound.getInstance();
        }
        this.nextSongSound = nextSongSound;
        this.leftVolume = leftVolume;
        this.rightVolume = rightVolume;
        this.reset();
    }
    reset() {
        this.timeDelayHelper.delay = 0;
    }
    process() {
        if (this.songList.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        if (this.timeDelayHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            this.startNewSong();
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        if (this.timeDelayHelper2.isTime(this.gameTickTimeDelayHelper.startTime)) {
            if (this.androidServicesUtil.isServiceRunning(this.musicServiceClass.toString())) {
            }
            else {
                this.startNewSong();
            }
        }
    }
    show() {
        for (var index = this.songList.size(); --index >= 0;) {
            var sound = this.songList.get(index);
            ;
            var duration = sound.getDuration();
            ;
            PreLogUtil.put(new StringMaker().append(this.PLAY).append(sound.getResource()).append(this.FOR).appendlong(duration).toString(), this, this.commonStrings.PROCESS);
        }
    }
    startNewSong() {
        try {
            this.resourceUtil.getContext().stopService(this.currentIntent);
            if (this.nextSongSound == NoSound.getInstance()) {
                this.currentSongSound = this.basicArrayListUtil.getRandom(this.songList);
            }
            else {
                this.currentSongSound = this.nextSongSound;
                this.nextSongSound = NoSound.getInstance();
            }
            var duration = this.currentSongSound.getDuration();
            ;
            PreLogUtil.put(new StringMaker().append(this.PLAY).append(this.currentSongSound.getResource()).append(this.FOR).appendlong(duration).toString(), this, this.commonStrings.PROCESS);
            this.timeDelayHelper.delay = Math.round(duration);
            this.currentIntent.putExtra(this.musicStrings.SONG_EXTRA, this.resourceUtil.getResourceId(this.currentSongSound.getResource()).intValue());
            this.currentIntent.putExtra(this.musicStrings.LEFT_VOLUME, this.leftVolume);
            this.currentIntent.putExtra(this.musicStrings.RIGHT_VOLUME, this.rightVolume);
            this.resourceUtil.getContext().startService(this.currentIntent);
            //: 
        }
        catch (e) {
            var resource = StringUtil.getInstance().EMPTY_STRING;
            ;
            if (this.currentSongSound !=
                null) {
                resource = this.currentSongSound.getResource();
            }
            PreLogUtil.putOE(this.commonStrings.EXCEPTION_LABEL + resource, this, this.commonStrings.PROCESS, e);
        }
    }
    //@Throws(Exception.constructor)
    stop() {
        this.resourceUtil.getContext().stopService(this.currentIntent);
    }
}
