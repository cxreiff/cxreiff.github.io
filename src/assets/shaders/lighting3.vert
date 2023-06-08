precision mediump float;

uniform mat4 model, view, projection;
attribute vec3 position, normal;
varying vec3 frag_position, frag_normal;

void main() {
    frag_position = position;
    frag_normal = normal;
    gl_Position = projection * view * model * vec4(position, 1.0);
}
