// DEPTH MAP FRAGMENT SHADER

//[demo_hide]
precision mediump float;

varying vec3 frag_position;
//[demo_hide_end]

void main () {
    gl_FragColor = vec4(vec3(frag_position.z), 1.0);
}
