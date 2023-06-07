precision mediump float;

varying vec3 frag_position;

void main () {
    gl_FragColor = vec4(vec3(frag_position.z), 1.0);
}
