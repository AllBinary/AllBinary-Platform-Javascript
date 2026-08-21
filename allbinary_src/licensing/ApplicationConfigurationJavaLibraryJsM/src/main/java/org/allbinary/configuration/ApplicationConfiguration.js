/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { Exception } from '../../../java/lang/Exception.js';
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { AbDataInputStream } from '../../../org/allbinary/logic/io/AbDataInputStream.js';
import { AbDataOutputStream } from '../../../org/allbinary/logic/io/AbDataOutputStream.js';
import { FileStreamFactory } from '../../../org/allbinary/logic/io/FileStreamFactory.js';
import { NullCloseable } from '../../../org/allbinary/logic/io/NullCloseable.js';
import { StreamUtil } from '../../../org/allbinary/logic/io/StreamUtil.js';
import { FileFactory } from '../../../org/allbinary/logic/io/file/FileFactory.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ApplicationConfiguration extends Object {
    static getInstance() {
        if (ApplicationConfiguration.instance == NullUtil.getInstance().NULL_OBJECT) {
            ApplicationConfiguration.instance = new ApplicationConfiguration();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return ApplicationConfiguration.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.fullscreen = true;
        this.showTitleBar = false;
        this.progressBarView = false;
        this.FILE = "ReloadConfiguration.dat";
        try {
            if (FileFactory.getInstance().isFile(this.FILE)) {
                this.read();
            }
            else {
                this.write();
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
    }
    //@Throws(Exception.constructor)
    read() {
        var fileInputStreamFactory = FileStreamFactory.getInstance();
        ;
        var fileInputStream = fileInputStreamFactory.getFileInputStreamInstance(StringUtil.getInstance().EMPTY_STRING, this.FILE);
        ;
        var dataInputStream = new AbDataInputStream(fileInputStream);
        ;
        var fullScreen = dataInputStream.readInt();
        ;
        if (fullScreen == 0) {
            this.setFullscreen(false);
        }
        else if (fullScreen == 1) {
            this.setFullscreen(true);
        }
        else {
            throw new Exception("Invalid FullScreen ActivityConfiguration");
        }
        var progressBarView = dataInputStream.readInt();
        ;
        if (progressBarView == 0) {
            this.setProgressBarView(false);
        }
        else if (progressBarView == 1) {
            this.setProgressBarView(true);
        }
        else {
            throw new Exception("Invalid ProgressBarView ActivityConfiguration");
        }
        var showTitleBar = dataInputStream.readInt();
        ;
        if (showTitleBar == 0) {
            this.setShowTitleBar(false);
        }
        else if (showTitleBar == 1) {
            this.setShowTitleBar(true);
        }
        else {
            throw new Exception("Invalid ShowTitleBar ActivityConfiguration");
        }
        this.logUtil.putF("Read Configuration: " + this.toString(), this, "read");
    }
    //@Throws(Exception.constructor)
    write() {
        var closeable = NullCloseable.NULL_CLOSEABLE;
        ;
        try {
            this.logUtil.putF("Write Configuration: " + this.toString(), this, "write");
            var fileInputStreamFactory = FileStreamFactory.getInstance();
            ;
            var fileOutputStream = fileInputStreamFactory.getFileOutputStreamInstance(StringUtil.getInstance().EMPTY_STRING, this.FILE);
            ;
            var dataOutputStream = new AbDataOutputStream(fileOutputStream);
            ;
            closeable = dataOutputStream;
            if (this.isFullscreen()) {
                dataOutputStream.writeInt(1);
            }
            else {
                dataOutputStream.writeInt(0);
            }
            if (this.isProgressBarView()) {
                dataOutputStream.writeInt(1);
            }
            else {
                dataOutputStream.writeInt(0);
            }
            if (this.isShowTitleBar()) {
                dataOutputStream.writeInt(1);
            }
            else {
                dataOutputStream.writeInt(0);
            }
            dataOutputStream.flush();
            //: 
        }
        catch (e) {
            throw e;
        }
        finally {
            StreamUtil.getInstance().close(closeable);
        }
    }
    //@Throws(Exception.constructor)
    update(gameFeature) {
        if (gameFeature == MainFeatureFactory.getInstance().FULL_SCREEN) {
            var features = Features.getInstance();
            ;
            if (features.isFeature(gameFeature)) {
                if (!this.isFullscreen()) {
                    this.setFullscreen(true);
                    this.write();
                }
            }
            else {
                if (this.isFullscreen()) {
                    this.setFullscreen(false);
                    this.write();
                }
            }
        }
    }
    setFullscreen(fullscreen) {
        this.fullscreen = fullscreen;
    }
    isFullscreen() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fullscreen;
    }
    setShowTitleBar(showTitleBar) {
        this.showTitleBar = showTitleBar;
    }
    isShowTitleBar() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.showTitleBar;
    }
    setProgressBarView(progressBarView) {
        this.progressBarView = progressBarView;
    }
    isProgressBarView() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.progressBarView;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("isFullscreen: ");
        stringBuffer.appendboolean(this.isFullscreen());
        stringBuffer.append(" isProgressBarView: ");
        stringBuffer.appendboolean(this.isProgressBarView());
        stringBuffer.append(" isShowTitleBar: ");
        stringBuffer.appendboolean(this.isShowTitleBar());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
ApplicationConfiguration.instance = NullUtil.getInstance().NULL_OBJECT;
