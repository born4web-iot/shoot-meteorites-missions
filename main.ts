controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`space-ship-lvl1`, DeathStar, 100, 0)
    projectile.x += 20
    projectile.y += -3
})
function createMeteorit () {
    meteorit = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . e . e e e . e e . . . . . 
        . . e e e e e e e e e e . . . . 
        . . e . e . e e e . e e . . . . 
        . . e . e e e . e e e . . . . . 
        . . e e e e e e e . e e . . . . 
        . . e e . e e . e e e e . . . . 
        . . . e e e e e e e e . . . . . 
        . . . . e e e . e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    meteorit.setPosition(149, randint(5, 110))
    meteorit.setVelocity(randint(-30, -100), 0)
    meteorit.setFlag(SpriteFlag.DestroyOnWall, true)
}
function getNewMeteoritesNumber () {
    meteorite_multiply = randint(0, 1) * level
    if (meteorite_multiply == 0) {
        meteorite_multiply = 1
    }
    return meteorite_multiply
}
let meteorite_multiply = 0
let meteorit: Sprite = null
let projectile: Sprite = null
let level = 0
let DeathStar: Sprite = null
DeathStar = sprites.create(assets.image`vesmirna-lod`, SpriteKind.Player)
controller.moveSprite(DeathStar, 0, 100)
DeathStar.setStayInScreen(true)
DeathStar.setPosition(0, 60)
level = 1
let GAME_SPEED = 1000
game.onUpdateInterval(GAME_SPEED, function () {
    for (let index = 0; index < getNewMeteoritesNumber(); index++) {
        createMeteorit()
    }
})
