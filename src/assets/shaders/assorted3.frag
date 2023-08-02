precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265358979323846

vec2 rotate2D(vec2 st, float angle) {
    st -= 0.5;
    st =  mat2(
      cos(angle), -sin(angle),
      sin(angle), cos(angle)
    ) * st;
    st += 0.5;
    return st;
}

vec2 tile(vec2 st, float zoom) {
    st *= zoom;
    return fract(st);
}

float box(vec2 st, vec2 size, float smoothEdges) {
    size = vec2(0.5) - size * 0.5;
    vec2 aa = vec2(smoothEdges * 0.5);
    vec2 uv = smoothstep(size, size + aa, st);
    uv *= smoothstep(size, size + aa, vec2(1.0) - st);
    return uv.x * uv.y;
}

void main(void) {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    vec2 pos = floor(st * 24.);

    st = tile(st, 24.);
    st = rotate2D(st, PI * 0.25);
    
    float emphasis = sin(( u_time * 1.5 + pos.x));

    color = vec3(box(
        st,
        vec2(0.4 + (pos.y / 24.)),
        0.2*(emphasis + 1.0)
    ));

    gl_FragColor = vec4(color, 1.0);
}
