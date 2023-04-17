precision mediump float;

uniform float u_time;

attribute vec4 position;

void main() {
    mat3 rotation = mat3(
        vec3(cos(u_time), sin(u_time), 0.0),
        vec3(-sin(u_time), cos(u_time), 0.0),
        vec3(0.0, 0.0, 1.0)
    );
    gl_Position = vec4(rotation * position.xyz, 1.0);
}
