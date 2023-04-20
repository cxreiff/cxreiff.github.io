precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() //[demo_hide]
{
    vec2 uv = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(
        0.65 * (sin(u_time + uv.x) * 0.3 + 0.7),
        0.45 * (cos(u_time + uv.y) * 0.3 + 0.7),
        0.85 * (sin(u_time + uv.x) * 0.3 + 0.7),
        1.0
    );
} //[demo_hide_end]
