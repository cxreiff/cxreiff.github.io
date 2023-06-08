precision mediump float;

uniform mat4 model, view, projection;
attribute vec3 position, normal;
varying vec3 frag_normal;

void main() {
    frag_normal = (view * model * vec4(normal, 0.0)).xyz;
    gl_Position = projection * view * model * vec4(position, 1.0);
}
