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
//not GWT import - same folder const IntBuffer = globalThis.org.allbinary.opengles.IntBuffer;
//JOGLEToKhronosGL11
export class JOGL11 extends JOGL10 {
    constructor(gl) {
        this(gl, gl);
        //For kotlin this is before the body of the constructor.
    }
    constructor(gl, gl2) {
        super(gl, gl2);
        //For kotlin this is before the body of the constructor.
        this.gl11 = getJOGLGL();
    }
    glBindBuffer(target, buffer) {
        this.gl11.glBindBuffer(target, buffer);
    }
    glBufferData(target, size, data, usage) {
        this.gl11.glBufferData(target, size, data, usage);
    }
    glBufferSubData(target, offset, size, data) {
        this.gl11.glBufferSubData(target, offset, size, data);
    }
    glClipPlanef(plane, equation, offset) {
        this.gl11.glClipPlanef(plane, equation, offset);
    }
    glClipPlanef(plane, equation) {
        this.gl11.glClipPlanef(plane, equation);
    }
    glColor4ub(red, green, blue, alpha) {
        this.gl11.glColor4ub(red, green, blue, alpha);
    }
    glColorPointer(size, type, stride, offset) {
        this.gl11.glColorPointer(size, type, stride, offset);
    }
    glDeleteBuffers(n, buffers, offset) {
        this.gl11.glDeleteBuffers(n, buffers, offset);
    }
    glDeleteBuffers(n, buffers) {
        this.gl11.glDeleteBuffers(n, buffers);
    }
    glDrawElements(mode, count, type, offset) {
        this.gl11.glDrawElements(mode, count, type, offset);
    }
    glGenBuffers(n, buffers, offset) {
        this.gl11.glGenBuffers(n, buffers, offset);
    }
    glGenBuffers(n, buffers) {
        this.gl11.glGenBuffers(n, buffers);
    }
    glGetBufferParameteriv(target, pname, params, offset) {
        this.gl11.glGetBufferParameteriv(target, pname, params, offset);
    }
    glGetBufferParameteriv(target, pname, params) {
        this.gl11.glGetBufferParameteriv(target, pname, params);
    }
    glGetClipPlanef(pname, eqn, offset) {
        this.gl11.glGetClipPlanef(pname, eqn, offset);
    }
    glGetClipPlanef(pname, eqn) {
        this.gl11.glGetClipPlanef(pname, eqn);
    }
    glGetFloatv(pname, params, offset) {
        this.gl11.glGetFloatv(pname, params, offset);
    }
    glGetFloatv(pname, params) {
        this.gl11.glGetFloatv(pname, params);
    }
    glGetLightfv(light, pname, params, offset) {
        this.gl11.glGetLightfv(light, pname, params, offset);
    }
    glGetLightfv(light, pname, params) {
        this.gl11.glGetLightfv(light, pname, params);
    }
    glGetMaterialfv(face, pname, params, offset) {
        this.gl11.glGetMaterialfv(face, pname, params, offset);
    }
    glGetMaterialfv(face, pname, params) {
        this.gl11.glGetMaterialfv(face, pname, params);
    }
    glGetTexEnviv(env, pname, params, offset) {
        this.gl11.glGetTexEnviv(env, pname, params, offset);
    }
    glGetTexEnviv(env, pname, params) {
        this.gl11.glGetTexEnviv(env, pname, params);
    }
    glGetTexParameterfv(target, pname, params, offset) {
        this.gl11.glGetTexParameterfv(target, pname, params, offset);
    }
    glGetTexParameterfv(target, pname, params) {
        this.gl11.glGetTexParameterfv(target, pname, params);
    }
    glGetTexParameteriv(target, pname, params, offset) {
        this.gl11.glGetTexParameteriv(target, pname, params, offset);
    }
    glGetTexParameteriv(target, pname, params) {
        this.gl11.glGetTexParameteriv(target, pname, params);
    }
    glIsBuffer(buffer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl11.glIsBuffer(buffer);
        ;
    }
    glIsEnabled(cap) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl11.glIsEnabled(cap);
        ;
    }
    glIsTexture(texture) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl11.glIsTexture(texture);
        ;
    }
    glNormalPointer(type, stride, offset) {
        this.gl11.glNormalPointer(type, stride, offset);
    }
    glPointParameterf(pname, param) {
        this.gl11.glPointParameterf(pname, param);
    }
    glPointParameterfv(pname, params, offset) {
        this.gl11.glPointParameterfv(pname, params, offset);
    }
    glPointParameterfv(pname, params) {
        this.gl11.glPointParameterfv(pname, params);
    }
    glTexCoordPointer(size, type, stride, offset) {
        this.gl11.glTexCoordPointer(size, type, stride, offset);
    }
    glTexEnvi(target, pname, param) {
        this.gl11.glTexEnvi(target, pname, param);
    }
    glTexEnviv(target, pname, params, offset) {
        this.gl11.glTexEnviv(target, pname, params, offset);
    }
    glTexEnviv(target, pname, params) {
        this.gl11.glTexEnviv(target, pname, params);
    }
    glTexParameterfv(target, pname, params, offset) {
        this.gl11.glTexParameterfv(target, pname, params, offset);
    }
    glTexParameterfv(target, pname, params) {
        this.gl11.glTexParameterfv(target, pname, params);
    }
    glTexParameteri(target, pname, param) {
        this.gl11.glTexParameteri(target, pname, param);
    }
    glTexParameteriv(target, pname, params, offset) {
        this.gl11.glTexParameteriv(target, pname, params, offset);
    }
    glTexParameteriv(target, pname, params) {
        this.gl11.glTexParameteriv(target, pname, params);
    }
    glTexParameterxv(target, pname, params, offset) {
        this.gl11.glTexParameteriv(target, pname, params, offset);
    }
    glVertexPointer(size, type, stride, offset) {
        this.gl11.glVertexPointer(size, type, stride, offset);
    }
}
