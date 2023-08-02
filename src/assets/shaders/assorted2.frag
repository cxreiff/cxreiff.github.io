precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    float color = 0.0;

    color += sin(uv.y * cos(u_time / 21.0) * 12.0)
        + sin(uv.x * cos(u_time / 10.0) * 20.0);
    color += sin(uv.x * cos(u_time / 43.0) * 24.0)
        + cos(uv.y * cos(u_time / 20.0) * 30.0);
    color += sin(uv.y * sin(u_time / 65.0) * 36.0)
        + cos(uv.x * sin(u_time / 30.0) * 40.0);
    color += sin(uv.x * sin(u_time / 87.0) * 48.0)
        + sin(uv.y * sin(u_time / 40.0) * 50.0);

    gl_FragColor = vec4(
        color * 0.65,
        color * 0.45,
        color * 0.85,
        1.0
    );
}
