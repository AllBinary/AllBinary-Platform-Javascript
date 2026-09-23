/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const GL10
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLGLU extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLGLU.instance;
    }
    gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
        throw new RuntimeException();
    }
    gluProject(gl, objX, objY, objZ, model, modelOffset, project, projectOffset, view, viewOffset, win, winOffset) {
        throw new RuntimeException();
    }
    gluUnProject(gl, winX, winY, winZ, model, modelOffset, project, projectOffset, view, viewOffset, obj, objOffset) {
        throw new RuntimeException();
    }
    glFrustumf(gl, lt, rt, btm, top, zNear, zFar) {
        throw new RuntimeException();
    }
}
OpenGLGLU.instance = new OpenGLGLU();
