sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})

scene.setBackgroundColor(3)
let rat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . 7 3 7 . 7 3 7 . . . . . . 
    . . . 7 3 7 7 7 3 7 . . . . . . 
    . . . 7 7 f 7 f 7 7 . . . . . . 
    . . . . 7 7 f 7 7 . . . . . . . 
    . . . . 7 2 2 2 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(rat)
let pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . 5 5 5 5 2 5 5 . . . . 
    . . . . . . 5 2 5 5 5 . . . . . 
    . . . . . . 5 5 5 2 5 . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
info.startCountdown(10)
pizza.setPosition(randint(0, 160), randint(0, 120))


let broccoli = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . . 8 9 8 . . . . . . .
    . . . . . . 9 8 9 . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1) 
    broccoli.setPosition(randint(0, 160), randint(0, 120))
})
broccoli.setPosition(randint(0, 160), randint(0, 120))