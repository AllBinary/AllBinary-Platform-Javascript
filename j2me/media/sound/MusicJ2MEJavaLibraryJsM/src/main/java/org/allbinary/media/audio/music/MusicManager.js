/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { Thread } from '../../../../../java/lang/Thread.js';
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
import { PlayerI } from '../../../../../javax/microedition/media/Player.js';
//not GWT import const Player
import { PlayerListenerI } from '../../../../../javax/microedition/media/PlayerListener.js';
const PlayerListener = PlayerListenerI;
//not GWT import const PlayerListener
import { AvianUtil } from '../../../../../org/allbinary/AvianUtil.js';
//not GWT import const AvianUtil
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { NoSound } from '../../../../../org/allbinary/media/audio/NoSound.js';
//not GWT import const NoSound
import { PlayerStateUtil } from '../../../../../org/allbinary/media/audio/PlayerStateUtil.js';
//not GWT import const Sound
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GameTickTimeDelayHelper
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//import { MusicManagerPlayerListener } from './MusicManagerPlayerListener.js';
//not GWT import - same folder const MusicManagerPlayerListener
export class MusicManager extends Object {
    constructor(musicServiceClass, songList) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.playerStateUtil = PlayerStateUtil.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(0);
        //Handle Media ending for Avian
        //inner= member=true isStatic=
        this.MusicManagerPlayerListener = class extends Object {
            playerUpdate(player, event, eventData = {}) {
                PreLogUtil.put(event, this, this.commonStrings.PROCESS);
                if (event == PlayerListener.END_OF_MEDIA || event == PlayerListener.STOPPED || event == PlayerListener.CLOSED) {
                    reset();
                }
            }
        };
        this.playerListener = new this.MusicManagerPlayerListener();
        this.PLAY = "Play ";
        this.SONG = " for: ";
        this.NEXT_SONG = CommonLabels.getInstance().NEXT + " Song: ";
        this.STOPPING = "Stopping Current Song: ";
        this.ENDING = "Ending Current Song: ";
        this.WAITING_FOR_MEDIA_TO_END = "Waiting for media to end";
        this.ALREADY_PLAYING = "Already Playing: ";
        this.ALREADY_ENDED = "Last Song already ended: ";
        this.currentSongSound = NoSound.getInstance();
        this.nextSongSound = NoSound.getInstance();
        this.reset = false;
        this.noDuration = false;
        this.stopped = true;
        this.songList = songList;
    }
    startNewSong() {
        if (this.nextSongSound == NoSound.getInstance()) {
            var randomSongSound = this.basicArrayListUtil.getRandom(this.songList);
            ;
            this.nextSong(randomSongSound, 0, 0);
        }
        this.process();
    }
    nextSong(nextSongSound, leftVolume, rightVolume) {
        PreLogUtil.put(new StringMaker().append(NEXT_SONG).append(nextSongSound.getResource()).toString(), this, this.commonStrings.PROCESS);
        this.nextSongSound = nextSongSound;
        this.reset();
        this.stopped = false;
    }
    reset() {
        this.reset = true;
    }
    process() {
        try {
            if (this.stopped) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            if (this.songList.size() == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            if ((this.timeDelayHelper.isTime(this.gameTickTimeDelayHelper.startTime) && !this.noDuration) || this.reset) {
                this.reset = false;
                this.noDuration = false;
                var endingCurrentSongSound = this.currentSongSound;
                ;
                var nextSongSound = this.nextSongSound;
                ;
                this.nextSongSound = NoSound.getInstance();
                if (nextSongSound == NoSound.getInstance()) {
                    this.currentSongSound = BasicArrayListUtil.getInstance().getRandom(this.songList);
                }
                else {
                    this.currentSongSound = nextSongSound;
                }
                var startingCurrentSongSound = this.currentSongSound;
                ;
                var duration = this.currentSongSound.getDuration();
                ;
                this.timeDelayHelper.delay = Math.round(duration);
                if (duration <= 0) {
                    var NO_DURATION_FOR = "No Duration for: ";
                    ;
                    PreLogUtil.put(new StringMaker().append(NO_DURATION_FOR).append(this.currentSongSound.getResource()).toString(), this, this.commonStrings.PROCESS);
                    this.currentSongSound.getPlayerP().addPlayerListener(playerListener);
                    this.noDuration = true;
                }
                if (endingCurrentSongSound != NoSound.getInstance()) {
                    if (endingCurrentSongSound == startingCurrentSongSound && endingCurrentSongSound.getPlayerP().getState() == PlayerI.STARTED) {
                        PreLogUtil.put(new StringMaker().append(this.ALREADY_PLAYING).append(endingCurrentSongSound.getResource()).toString(), this, this.commonStrings.PROCESS);
                        PreLogUtil.put(new StringMaker().append(this.STOPPING).append(endingCurrentSongSound.getResource()).append(this.SONG).appendlong(duration).toString(), this, this.commonStrings.PROCESS);
                        endingCurrentSongSound.getPlayerP().stop();
                        this.waitForStateChange(endingCurrentSongSound, startingCurrentSongSound);
                    }
                    else {
                        if (endingCurrentSongSound.getPlayerP().getState() == PlayerI.STARTED) {
                            PreLogUtil.put(new StringMaker().append(this.STOPPING).append(endingCurrentSongSound.getResource()).append(this.SONG).appendlong(duration).toString(), this, this.commonStrings.PROCESS);
                            endingCurrentSongSound.getPlayerP().stop();
                            this.waitForStateChange(endingCurrentSongSound, startingCurrentSongSound);
                        }
                        else {
                            PreLogUtil.put(new StringMaker().append(this.ALREADY_ENDED).append(this.PLAY).append(startingCurrentSongSound.getResource()).toString(), this, this.commonStrings.PROCESS);
                            if (AvianUtil.isAvian()) {
                                endingCurrentSongSound.getPlayerP().stop();
                                startingCurrentSongSound.getPlayerP().stop();
                            }
                            startingCurrentSongSound.getPlayerP().start();
                        }
                    }
                }
                else {
                    PreLogUtil.put(new StringMaker().append(this.PLAY).append(this.currentSongSound.getResource()).append(this.SONG).appendlong(duration).toString(), this, this.commonStrings.PROCESS);
                    this.currentSongSound.getPlayerP().start();
                }
            }
            //: 
        }
        catch (e) {
            var resource = StringUtil.getInstance().EMPTY_STRING;
            ;
            if (this.currentSongSound != NoSound.getInstance()) {
                resource = this.currentSongSound.getResource();
            }
            PreLogUtil.putOE(this.commonStrings.EXCEPTION_LABEL + resource, this, this.commonStrings.PROCESS, e);
        }
    }
    //@Throws(Exception.constructor)
    waitForStateChange(endingCurrentSongSound, startingCurrentSongSound) {
        while (endingCurrentSongSound.getPlayerP().getState() == PlayerI.STARTED) {
            PreLogUtil.put(this.WAITING_FOR_MEDIA_TO_END, this, this.commonStrings.PROCESS);
            Thread.sleep(100);
        }
        PreLogUtil.put(new StringMaker().append(this.playerStateUtil.convert(endingCurrentSongSound.getPlayerP().getState())).append(this.commonSeps.SPACE).append(this.PLAY).append(startingCurrentSongSound.getResource()).toString(), this, this.commonStrings.PROCESS);
        startingCurrentSongSound.getPlayerP().start();
    }
    //@Throws(Exception.constructor)
    stop() {
        try {
            var currentSongSound = this.currentSongSound;
            ;
            if (currentSongSound != NoSound.getInstance()) {
                this.stopped = true;
                PreLogUtil.put(new StringMaker().append(this.ENDING).append(currentSongSound.getResource()).toString(), this, this.commonStrings.PROCESS);
                currentSongSound.getPlayerP().stop();
            }
            this.timeDelayHelper.setStartTime(0);
            PreLogUtil.put(new StringMaker().append(this.commonStrings.END).append(StringUtil.getInstance().toString(currentSongSound)).toString(), this, this.commonStrings.END);
            //: 
        }
        catch (e) {
            var resource = StringUtil.getInstance().EMPTY_STRING;
            ;
            if (currentSongSound != NoSound.getInstance()) {
                resource = currentSongSound.getResource();
            }
            PreLogUtil.putOE(this.commonStrings.EXCEPTION_LABEL + resource, this, this.commonStrings.END, e);
        }
    }
}
