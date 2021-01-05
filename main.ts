namespace SpriteKind {
    export const helper = SpriteKind.create()
}
function cutsean_1 () {
    gal.setPosition(208, 256)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bloop = sprites.create(img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . 8 8 6 6 6 6 6 8 8 8 8 . . 
        . . . 8 6 6 6 6 6 6 6 6 6 6 8 . 
        . . 8 8 6 6 9 9 9 9 9 6 6 6 8 . 
        . . 8 6 6 6 9 9 9 9 9 6 6 6 8 . 
        . . 8 6 6 6 9 9 9 9 9 6 6 6 8 . 
        . 8 8 6 6 9 9 9 9 9 9 6 6 6 8 . 
        . 8 6 6 6 9 9 9 9 9 9 6 6 6 8 . 
        . 8 6 6 9 9 9 9 9 9 9 6 6 6 8 . 
        8 6 6 9 9 9 9 9 9 9 9 6 6 8 . . 
        8 6 6 9 9 9 9 9 9 9 6 6 6 8 . . 
        8 6 6 9 9 9 9 9 9 6 6 6 6 8 . . 
        8 8 6 6 9 9 6 6 6 6 6 6 6 8 . . 
        . 8 6 6 6 6 6 6 6 6 6 6 6 8 . . 
        . . 8 8 6 6 6 6 6 6 6 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        `, SpriteKind.Projectile)
    gal.setImage(img`
        ................
        ................
        .......ff.......
        .....ff88ff.....
        ...fff8888fff...
        ..fff888888fff..
        ..fff888888fff..
        ..f6666666666ff.
        .ff6888888886ff.
        .fffff6666fffff.
        f9f6f9f44f9f6ff.
        f8f649f44f946f..
        f8ff64444446f6..
        f6f6f88888f46...
        .ff4f88888f46...
        ....ffffffdd6...
        .....ffff6dd6...
        ..........66....
        ..........88....
        .........888888.
        ........8866668.
        ........8699968.
        ........8669968.
        ........8869688.
        .........88888..
        `)
    bloop.follow(bounty_hunter)
    gal.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f 6 6 6 6 f f f f . . 
        . f f 6 f 9 f 4 4 f 9 f 6 f f . 
        . f 6 6 4 9 f 4 4 f 9 4 6 6 f . 
        . . f 6 6 4 4 3 3 4 4 6 6 f . . 
        . . . f 6 6 4 3 3 4 6 6 f . . . 
        . . 6 4 f 8 8 8 8 8 8 f 4 6 . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    pause(5000)
    bloop.destroy()
})
function kill_enemy () {
    tiles.placeOnRandomTile(bounty_hunter, myTiles.tile4)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    cutsean_1()
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    bloop.destroy()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    key_obtaind = true
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bounty_hunter.destroy(effects.rings, 500)
    info.changeScoreBy(1)
    kill_enemy()
})
let key_obtaind = false
let bloop: Sprite = null
let bounty_hunter: Sprite = null
let gal: Sprite = null
gal = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 8 8 8 8 8 8 6 6 f . . 
    . . f 6 8 f f f f f f 8 6 f . . 
    . . f f f f 6 6 6 6 f f f f . . 
    . f f 6 f 9 f 4 4 f 9 f 6 f f . 
    . f 6 6 4 9 f 4 4 f 9 4 6 6 f . 
    . . f 6 6 4 4 3 3 4 4 6 6 f . . 
    . . . f 6 6 4 3 3 4 6 6 f . . . 
    . . 8 4 f 8 8 8 8 8 8 f 4 8 . . 
    . . 4 8 f 8 8 8 8 8 8 f 8 4 . . 
    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
bounty_hunter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f c c c c c c f . . . . 
    . . . f f c c c c c c f f . . . 
    . . f c c c c c c c c c c f . . 
    . . f c c c c c c c c c c f . . 
    . f c c 4 4 c c c c c c c c f . 
    . f c c 4 4 4 4 c 4 4 4 c c f . 
    . f c c 4 2 2 4 4 2 2 4 c c f . 
    . f c c 4 4 4 4 4 4 4 4 c c c f 
    . f c c 4 4 4 3 3 4 4 4 c c c f 
    . . f c c c c c c c c c c c f f 
    . . c e f f f f f f f c c c f . 
    . . e 4 4 e d d b d b b f . . . 
    . . . f e e d 1 d 1 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `, SpriteKind.Enemy)
scene.cameraFollowSprite(gal)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`1e001e0002020101010000000001010101040101010100000000000001010101010602020103010101010101010101010101010101010101010101010101010101010101010505050501030101010101030101010101010101010101010101010505050501010505020101010101020505050505050505050101010101010501010000000005050505050505050500000000000001050502020201010501010000000000000001010100000000000000000001010501010101010501010000000000000001010100000000000000000001030501030101010501010000000000000001010100000000000000000001010501010100000000000000000000000001010100000000000000000001010501010100000000000000000000000001070100000000000000000001010101010100000101010100000001010101010101010101010000000001010101010100000101010100000001010101010101010101010000000001010101010100000102020100000001010101010101010101010000000001010101010100000103020100000001010101010101010101010000000001010101010100000101010101010101010101010101010101010000000000000000000000000101010101010101010101010101010101010000000000000000000000000101010100000001010101010101010101010000000000000000000000000101010100000001010109090901010101010000000000000000000000000101010100000001010b0808080a0101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    22...2222.........222222......
    22.2..........................
    ..........2.....2.............
    ..........2.....2.............
    .....2222.........222222...222
    .....2...222...2222....2......
    .....2.....2...22......2.2..2.
    .....2.....2...2.......2......
    222222.....2...2.......2......
    ..2222...222...222222..2......
    .2....2.2...........2..2......
    .2....2.2...........2..2......
    .2.22.2.2...........2..2......
    .2.22.222...........2..2......
    .2..................2..2222222
    .2..................2.........
    .2....222...........2.........
    .2....2.2...........2.........
    .2....2.2...........2.........
    .222222.2222222222222.........
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, [myTiles.transparency16,sprites.dungeon.floorDark2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen))
game.showLongText("you are a water nyad and your brother is a fire elemental in the shape of a human", DialogLayout.Full)
game.showLongText("and you are doing the best you can to survive but beware many wish to kill you good luck! to attack press A o((>ω< ))o watch out for hunters!", DialogLayout.Full)
info.setLife(5)
let boy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 5 5 5 5 5 5 f f f . . 
    . . f f 5 2 2 2 2 2 2 5 5 f . . 
    . . f 5 2 f f f f f f 2 5 f . . 
    . . f f f f d d d d f f f f . . 
    . f f 4 f 2 f 4 4 f 2 f 4 f f . 
    . f 4 4 4 2 f 4 4 f 2 4 4 4 f . 
    . . f 4 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 3 3 4 4 4 f . . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.helper)
info.setScore(0)
controller.player1.moveSprite(gal)
forever(function () {
    tiles.placeOnRandomTile(bounty_hunter, myTiles.tile4)
    pause(5000)
})
game.onUpdateInterval(500, function () {
    boy.follow(gal, 50)
})
