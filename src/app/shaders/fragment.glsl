uniform float uOpacity;
uniform float uDeepPurple;
 
varying float vDistortion;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos( 1.0 * (c * t + d));
  
}     
 
void main() {
  float distort = vDistortion * 1.;

vec3 brightness = vec3(0.25, 0.005, 0.25);    
vec3 contrast = vec3(0.2, 0.3, 0.175);     
vec3 oscilation = vec3(0.4, 0.9, 0.5);
vec3 phase = vec3(0.9, 0.1, 0.7);        

 
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
  gl_FragColor = vec4(color, vDistortion);
  gl_FragColor += vec4(0.0, min(uDeepPurple * 1.5, 1.0), 0.1, min(uOpacity, 3.0));
}
