precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

vec2 brickTile(vec2 st, float zoom) {
    st *= zoom;
   
    st.x += step(1., mod(+st.y, 2.0))
        * smoothstep(0.0, 0.5, fract(-u_time));
    st.x -= step(1., mod(-st.y, 2.0))
        * smoothstep(0.0, 0.5, fract(-u_time));
    st.y -= step(1., mod(+st.x, 2.0))
        * smoothstep(0.5, 1.0, fract(-u_time));
    st.y += step(1., mod(-st.x, 2.0))
        * smoothstep(0.5, 1.0, fract(-u_time));

    return fract(st);
}

float box(vec2 st, vec2 size) {
    size = vec2(0.5) - size * 0.5;
    vec2 uv = smoothstep(size, size + vec2(1e-4), st);
    uv *= smoothstep(size, size + vec2(1e-4), vec2(1.0) - st);
    return uv.x * uv.y;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    st /= vec2(2.15, 0.65) / 1.5;

    st = brickTile(st, 5.0);

    color = vec3(box(st,vec2(0.9)));

    gl_FragColor = vec4(color,1.0);
}
