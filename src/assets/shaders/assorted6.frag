precision mediump float;

#define PI 3.14159265358979323846

uniform vec2 u_resolution;
uniform float u_time;

vec2 rotate2D (vec2 st, float angle) //[demo_hide]
{
    st -= 0.5;
    st = mat2(
        cos(angle), -sin(angle),
        sin(angle), cos(angle)
    ) * st;
    st += 0.5;
    return st;
} //[demo_hide_end]

vec2 tile (vec2 st, float zoom) //[demo_hide]
{
    st *= zoom;
    return fract(st);
} //[demo_hide_end]

float circle(in vec2 st, in float radius) //[demo_hide]
{
    vec2 l = st - vec2(0.5);
    return smoothstep(
        radius - (radius * 0.01),
        radius + (radius * 0.01),
        dot(l, l) * 9.0
    ) - smoothstep(
        radius - (radius * 0.01),
        radius + (radius * 0.01),
        dot(l, l) * 4.0
    );
} //[demo_hide_end]

vec2 rotateTilePattern(vec2 st) {
    st *= 2.0;

    float index = 0.0;
    index += step(1., mod(st.x, 2.0));
    index += step(1., mod(st.y, 2.0)) * 2.0;

    st = fract(st);

    if(index == 1.0) {
        st = rotate2D(st, PI * 0.5);
    } else if(index == 2.0) {
        st = rotate2D(st, PI * -0.5);
    } else if(index == 3.0) {
        st = rotate2D(st, PI);
    }

    return st;
}

void main () {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    st = tile(st, 3.0);
    st = rotateTilePattern(st);

    st = tile(st, 2.0);
    st = rotate2D(st, -PI * u_time * 0.5);
    
    vec3 color = vec3(circle(st, st.x * st.y));

    gl_FragColor = vec4(color, 1.0);
}
