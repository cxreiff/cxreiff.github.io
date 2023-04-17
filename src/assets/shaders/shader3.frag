precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        vec3(
            0.65 * (sin(u_time + uv.x) * 0.3 + 0.7),
            0.4 * (cos(u_time + uv.y) * 0.3 + 0.7),
            0.85 * (sin(u_time + uv.x) * 0.3 + 0.7)
        ),
        1.0
    );
}
