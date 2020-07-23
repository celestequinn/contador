let contador = 0
input.onButtonPressed(Button.A, function () {
    contador = 0
})
input.onGesture(Gesture.FreeFall, function () {
    contador += 1
})
basic.forever(function () {
    basic.showNumber(contador)
})
