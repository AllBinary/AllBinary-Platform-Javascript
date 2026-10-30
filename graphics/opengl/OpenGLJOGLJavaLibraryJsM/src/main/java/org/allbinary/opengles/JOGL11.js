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
//sameFolderImports - not GWT import - same folder const IntBuffer
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
    glClipPlanef(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glClipPlanef$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glClipPlanef$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glClipPlanef');
    }
    glClipPlanef$overload1(plane, equation, offset) {
        this.gl11.glClipPlanef(plane, equation, offset);
    }
    glClipPlanef$overload2(plane, equation) {
        this.gl11.glClipPlanef(plane, equation);
    }
    glColor4ub(red, green, blue, alpha) {
        this.gl11.glColor4ub(red, green, blue, alpha);
    }
    glColorPointer(size, type, stride, offset) {
        this.gl11.glColorPointer(size, type, stride, offset);
    }
    glDeleteBuffers(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glDeleteBuffers$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glDeleteBuffers$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glDeleteBuffers');
    }
    glDeleteBuffers$overload1(n, buffers, offset) {
        this.gl11.glDeleteBuffers(n, buffers, offset);
    }
    glDeleteBuffers$overload2(n, buffers) {
        this.gl11.glDeleteBuffers(n, buffers);
    }
    glDrawElements(mode, count, type, offset) {
        this.gl11.glDrawElements(mode, count, type, offset);
    }
    glGenBuffers(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGenBuffers$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGenBuffers$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGenBuffers');
    }
    glGenBuffers$overload1(n, buffers, offset) {
        this.gl11.glGenBuffers(n, buffers, offset);
    }
    glGenBuffers$overload2(n, buffers) {
        this.gl11.glGenBuffers(n, buffers);
    }
    glGetBufferParameteriv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glGetBufferParameteriv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glGetBufferParameteriv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glGetBufferParameteriv');
    }
    glGetBufferParameteriv$overload1(target, pname, params, offset) {
        this.gl11.glGetBufferParameteriv(target, pname, params, offset);
    }
    glGetBufferParameteriv$overload2(target, pname, params) {
        this.gl11.glGetBufferParameteriv(target, pname, params);
    }
    glGetClipPlanef(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGetClipPlanef$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGetClipPlanef$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGetClipPlanef');
    }
    glGetClipPlanef$overload1(pname, eqn, offset) {
        this.gl11.glGetClipPlanef(pname, eqn, offset);
    }
    glGetClipPlanef$overload2(pname, eqn) {
        this.gl11.glGetClipPlanef(pname, eqn);
    }
    glGetFloatv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGetFloatv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGetFloatv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGetFloatv');
    }
    glGetFloatv$overload1(pname, params, offset) {
        this.gl11.glGetFloatv(pname, params, offset);
    }
    glGetFloatv$overload2(pname, params) {
        this.gl11.glGetFloatv(pname, params);
    }
    glGetLightfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glGetLightfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glGetLightfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glGetLightfv');
    }
    glGetLightfv$overload1(light, pname, params, offset) {
        this.gl11.glGetLightfv(light, pname, params, offset);
    }
    glGetLightfv$overload2(light, pname, params) {
        this.gl11.glGetLightfv(light, pname, params);
    }
    glGetMaterialfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glGetMaterialfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glGetMaterialfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glGetMaterialfv');
    }
    glGetMaterialfv$overload1(face, pname, params, offset) {
        this.gl11.glGetMaterialfv(face, pname, params, offset);
    }
    glGetMaterialfv$overload2(face, pname, params) {
        this.gl11.glGetMaterialfv(face, pname, params);
    }
    glGetTexEnviv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glGetTexEnviv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glGetTexEnviv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glGetTexEnviv');
    }
    glGetTexEnviv$overload1(env, pname, params, offset) {
        this.gl11.glGetTexEnviv(env, pname, params, offset);
    }
    glGetTexEnviv$overload2(env, pname, params) {
        this.gl11.glGetTexEnviv(env, pname, params);
    }
    glGetTexParameterfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glGetTexParameterfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glGetTexParameterfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glGetTexParameterfv');
    }
    glGetTexParameterfv$overload1(target, pname, params, offset) {
        this.gl11.glGetTexParameterfv(target, pname, params, offset);
    }
    glGetTexParameterfv$overload2(target, pname, params) {
        this.gl11.glGetTexParameterfv(target, pname, params);
    }
    glGetTexParameteriv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glGetTexParameteriv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glGetTexParameteriv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glGetTexParameteriv');
    }
    glGetTexParameteriv$overload1(target, pname, params, offset) {
        this.gl11.glGetTexParameteriv(target, pname, params, offset);
    }
    glGetTexParameteriv$overload2(target, pname, params) {
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
    glPointParameterfv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glPointParameterfv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glPointParameterfv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glPointParameterfv');
    }
    glPointParameterfv$overload1(pname, params, offset) {
        this.gl11.glPointParameterfv(pname, params, offset);
    }
    glPointParameterfv$overload2(pname, params) {
        this.gl11.glPointParameterfv(pname, params);
    }
    glTexCoordPointer(size, type, stride, offset) {
        this.gl11.glTexCoordPointer(size, type, stride, offset);
    }
    glTexEnvi(target, pname, param) {
        this.gl11.glTexEnvi(target, pname, param);
    }
    glTexEnviv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glTexEnviv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glTexEnviv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glTexEnviv');
    }
    glTexEnviv$overload1(target, pname, params, offset) {
        this.gl11.glTexEnviv(target, pname, params, offset);
    }
    glTexEnviv$overload2(target, pname, params) {
        this.gl11.glTexEnviv(target, pname, params);
    }
    glTexParameterfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glTexParameterfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glTexParameterfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glTexParameterfv');
    }
    glTexParameterfv$overload1(target, pname, params, offset) {
        this.gl11.glTexParameterfv(target, pname, params, offset);
    }
    glTexParameterfv$overload2(target, pname, params) {
        this.gl11.glTexParameterfv(target, pname, params);
    }
    glTexParameteri(target, pname, param) {
        this.gl11.glTexParameteri(target, pname, param);
    }
    glTexParameteriv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glTexParameteriv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glTexParameteriv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glTexParameteriv');
    }
    glTexParameteriv$overload1(target, pname, params, offset) {
        this.gl11.glTexParameteriv(target, pname, params, offset);
    }
    glTexParameteriv$overload2(target, pname, params) {
        this.gl11.glTexParameteriv(target, pname, params);
    }
    glTexParameterxv(target, pname, params, offset) {
        this.gl11.glTexParameteriv(target, pname, params, offset);
    }
    glVertexPointer(size, type, stride, offset) {
        this.gl11.glVertexPointer(size, type, stride, offset);
    }
}
