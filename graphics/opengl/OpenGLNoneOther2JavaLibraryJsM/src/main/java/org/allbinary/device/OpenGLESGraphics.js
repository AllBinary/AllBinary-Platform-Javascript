/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const Font
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const OpenGLSurfaceChangedInterface
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const GraphicsInterface
import { NullGL10 } from './NullGL10.js';
//not GWT import - same folder const NullGL10
export class OpenGLESGraphics extends Graphics {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.gl = NullGL10.NULL_GL10;
    }
    updateGL(gl) {
    }
    set(gl) {
    }
    //@Throws(Exception.constructor)
    init() {
    }
    //@Throws(Exception.constructor)
    update() {
    }
    setOrthoginalMode() {
    }
    setCameraMode() {
    }
    getGl10() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl;
    }
    setFontDebug(font, fontDebug) {
        throw new RuntimeException();
    }
}
