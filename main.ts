input.onButtonPressed(Button.A, function () {
    jugador_arriba.change(LedSpriteProperty.Y, -1)
    jugador_abajo.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    jugador_abajo.change(LedSpriteProperty.Y, 1)
    jugador_arriba.change(LedSpriteProperty.Y, 1)
})
let jugador_arriba: game.LedSprite = null
let jugador_abajo: game.LedSprite = null
jugador_abajo = game.createSprite(1, 4)
jugador_arriba = game.createSprite(1, 3)
let objeto = game.createSprite(4, 4)
basic.forever(function () {
    objeto.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (objeto.get(LedSpriteProperty.X) == 0) {
        objeto.change(LedSpriteProperty.X, 4)
        objeto.change(LedSpriteProperty.X, 3)
    }
    if (objeto.isTouching(jugador_abajo)) {
        game.gameOver()
        if (objeto.isTouching(jugador_arriba)) {
            game.gameOver()
        }
    }
})
