/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { NullGL10 } from './NullGL10.js';
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
