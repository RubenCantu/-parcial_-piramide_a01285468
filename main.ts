input.onButtonPressed(Button.B, function () {
    basic.showString("Volumen Cilindro")
    Volumen_Cilindro = pi * (radio2 * (radio2 * altura))
    basic.showNumber(Volumen_Cilindro)
})
let Volumen_Cilindro = 0
let altura = 0
let radio2 = 0
let pi = 0
basic.showString("Rubén Cantú A01285468")
pi = 3.1416
radio2 = 26
altura = 13
