precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
attribute vec4 position;

mat4 scale(float x, float y, float z) //[demo_hide]
{
    return mat4(
        vec4(x,   0.0, 0.0, 0.0),
        vec4(0.0, y,   0.0, 0.0),
        vec4(0.0, 0.0, z,   0.0),
        vec4(0.0, 0.0, 0.0, 1.0)
    );
} //[demo_hide_end]

mat4 translate(float x, float y, float z) //[demo_hide]
{
    return mat4(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, 0.0),
        vec4(x,   y,   z,   1.0)
    );
} //[demo_hide_end]

mat4 rotate_x(float theta) //[demo_hide]
{
    return mat4(
        vec4(1.0,         0.0,         0.0, 0.0),
        vec4(0.0,  cos(u_time),  sin(u_time), 0.0),
        vec4(0.0, -sin(u_time),  cos(u_time), 0.0),
        vec4(0.0,         0.0,         0.0, 1.0)
    );
} //[demo_hide_end]

mat4 view_frustum(
    float angle,
    float aspect,
    float near,
    float far
) {
    return mat4(
        vec4(1.0/tan(angle), 0.0, 0.0, 0.0),
        vec4(0.0, aspect/tan(angle), 0.0, 0.0),
        vec4(0.0, 0.0, (far+near)/(far-near), 1.0),
        vec4(0.0, 0.0, -2.0*far*near/(far-near), 0.0)
    );
}

void main() {
    float aspect = u_resolution.x / u_resolution.y;
    gl_Position = view_frustum(radians(45.0), aspect, 0.5, 5.0)
        * translate(cos(u_time), 0.0, 3.0 + sin(u_time))
        * rotate_x(u_time)
        * scale(aspect, 1.0, 1.0)
        * position;
}
