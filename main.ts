Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    led.stopAnimation()
    radio.sendString("CIRCLE")
    basic.showIcon(IconNames.Diamond)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    stop()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    stop()
})
function stop () {
    led.stopAnimation()
    radio.sendString("STOP")
    radio.sendString("STOP")
    radio.sendString("STOP")
    basic.showIcon(IconNames.Square)
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    led.stopAnimation()
    radio.sendString("BACKWARDS")
    basic.showArrow(ArrowNames.South)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    stop()
})
input.onButtonPressed(Button.A, function () {
    lightsOn = !(lightsOn)
    const lightsCommand = lightsOn ? "LIGHTSOFF" : "LIGHTSON";
radio.sendString("" + (lightsCommand))
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    led.stopAnimation()
    radio.sendString("FORWARD")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    tailOn = !(tailOn)
    const tailCommand = tailOn ? "TAILON" : "TAILOFF";
radio.sendString("" + (tailCommand))
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    stop()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    stop()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    led.stopAnimation()
    radio.sendString("RIGHT")
    basic.showArrow(ArrowNames.East)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    led.stopAnimation()
    radio.sendString("LEFT")
    basic.showArrow(ArrowNames.West)
})
let lightsOn = false
let tailOn = false
radio.setGroup(1)
radio.setTransmitPower(7)
