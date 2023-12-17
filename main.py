def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        space-ship-lvl1
    """), DeathStar, 100, 0)
    projectile.x += 20
    projectile.y += -3
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def createMeteorit():
    global meteorit
    meteorit = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    meteorit.set_position(149, randint(5, 110))
    meteorit.set_velocity(randint(-30, -100), 0)
    meteorit.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
def getNewMeteoritesNumber():
    global meteorite_multiply
    meteorite_multiply = randint(0, 1) * level
    if meteorite_multiply == 0:
        meteorite_multiply = 1
    return meteorite_multiply
meteorite_multiply = 0
meteorit: Sprite = None
projectile: Sprite = None
level = 0
DeathStar: Sprite = None
DeathStar = sprites.create(assets.image("""
    vesmirna-lod
"""), SpriteKind.player)
controller.move_sprite(DeathStar, 0, 100)
DeathStar.set_stay_in_screen(True)
DeathStar.set_position(0, 60)
level = 1
GAME_SPEED = 1000

def on_update_interval():
    for index in range(getNewMeteoritesNumber()):
        createMeteorit()
game.on_update_interval(GAME_SPEED, on_update_interval)
