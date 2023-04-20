precision mediump float;

uniform float u_time;
attribute vec4 position;

mat4 rotate_z(float theta)
{
    return mat4(
        vec4( cos(theta), sin(theta), 0.0, 0.0),
        vec4(-sin(theta), cos(theta), 0.0, 0.0),
        vec4(        0.0,        0.0, 1.0, 0.0),
        vec4(        0.0,        0.0, 0.0, 1.0)
    );
}

void main() {
    gl_Position = rotate_z(u_time) * position;
}
