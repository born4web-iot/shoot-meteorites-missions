controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`space-ship-lvl1`, DeathStar, 100, 0)
    projectile.x += 20
    projectile.y += -3
})
let projectile: Sprite = null
let DeathStar: Sprite = null
DeathStar = sprites.create(assets.image`vesmirna-lod`, SpriteKind.Player)
controller.moveSprite(DeathStar, 0, 100)
DeathStar.setStayInScreen(true)
DeathStar.setPosition(0, 60)
