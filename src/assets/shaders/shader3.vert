precision mediump float;

uniform float u_time;

attribute vec4 position;

void main() {
    mat3 rotation = mat3(
        vec3(1.0,         0.0,         0.0),
        vec3(0.0,  cos(u_time),  sin(u_time)),
        vec3(0.0, -sin(u_time),  cos(u_time))
    );

    vec3 projected = rotation * position.xyz;
    float perspective_ratio = projected.z * 0.3 + 1.0;

    gl_Position = vec4(projected / perspective_ratio, 1.0);
}
