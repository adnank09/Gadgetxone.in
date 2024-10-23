#include <emscripten.h>
#include <cmath>
#include <cstdio>

EMSCRIPTEN_KEEPALIVE
void animate(int elementId) {
    double t = emscripten_get_now() / 1000.0;
    double position = sin(t) * 100.0;
    printf("Element %d position: %f\n", elementId, position);
    // You can pass this value back to JS for DOM manipulations
}
