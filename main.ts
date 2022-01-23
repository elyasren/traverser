let x = 0
let luminosite = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x = 4
        luminosite = 255
        while (x >= -1) {
            basic.clearScreen()
            led.plotBrightness(x, 2, luminosite)
            basic.pause(450)
            x += -1
            luminosite += -60
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plotBrightness(2, 0, 37)
        basic.pause(200)
        led.plotBrightness(2, 1, 255)
        basic.pause(200)
        led.plotBrightness(2, 2, 255)
        basic.pause(200)
        led.plotBrightness(2, 3, 255)
        basic.pause(200)
        led.plotBrightness(2, 4, 37)
    }
})
