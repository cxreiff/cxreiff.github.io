precision mediump float;

uniform float u_time;
attribute vec4 position;

mat4 rotate_x(float theta)
{
    return mat4(
        vec4(1.0,         0.0,        0.0, 0.0),
        vec4(0.0,  cos(theta), sin(theta), 0.0),
        vec4(0.0, -sin(theta), cos(theta), 0.0),
        vec4(0.0,         0.0,        0.0, 1.0)
    );
}

mat4 projection(float perspective)
{
    return mat4(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, perspective),
        vec4(0.0, 0.0, 0.0, 1.0)
    );
}

void main() {
    gl_Position = projection(0.3) * rotate_x(u_time) * position;
}
