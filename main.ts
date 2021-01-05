namespace SpriteKind {
    export const helper = SpriteKind.create()
    export const boss = SpriteKind.create()
}
/**
 * part1 mystery guy: waliking twords chairs suddenly voice says who dares to enter  my castle? 
 * 
 * part2 gal:umm me?  mysty guy: wrong answer!!!  *jumps down from rafters* raaaah words slash across screen bosssssss
 */
function cutsean_1 () {
    gal.setPosition(208, 256)
    story.queueStoryPart(function () {
        story.printText("who dares to enter my domain???", 1296, 988, 2, 15, story.TextSpeed.Normal)
        effects.starField.startScreenEffect(1000)
    })
    story.queueStoryPart(function () {
        story.spriteSayText(gal, "us!", 9, 6, story.TextSpeed.Fast)
        story.spriteSayText(boy, "us!", 2, 4, story.TextSpeed.Fast)
    })
    story.queueStoryPart(function () {
        story.printText("then you better back up he he...", 1296, 988, 2, 15, story.TextSpeed.Normal)
        boss_fight = true
        gal.setPosition(208, 256)
    })
    story.queueStoryPart(function () {
        bossy = sprites.create(img`
            ..............................
            ..............................
            ..............................
            ..............................
            .......fffffffffffff..........
            ......ff77777777777ff.........
            ...ffff7777777777777ff........
            ...ff77d2ff777d2ff777ff.......
            ffff7772dff7772dff7777ff......
            f777777d2ff777d2ff777777f.....
            7777777777777777777777777ff...
            77777777777ff7777f77777777ff..
            777777777777f7777f777777777ff.
            fffffff77777f777ff77f5f5f777f.
            ......ff7222ff7ff777f555fffff.
            .......f72222f7f777ffffff..ff.
            .......ff7777fff77ff..........
            ........ff777ff77ff...........
            ...fffffff777777ffffff........
            ...f77777777777777777f........
            ...f777777777777777777f.......
            .fff7777777777777777777f......
            .f77777f7777777777777777f.....
            .f7777ff77777777777ff777ff....
            .f7777fff777f7ff777ff77777....
            .f777ff7fc7ff77ff7cfff7777f...
            ff777f77ffff7777ffffff7777f...
            f7777f7777777777777ffff777f...
            f777ff77777777777777fff777f...
            f777f7777fff777ff7777ff777f...
            7777f777777fffff77777ff777f...
            7f7ff777777f77f7ff777ff777fff.
            7f7f7777ffffccfff7777ff777777f
            ff7f777777ffffff77f77ff777f77f
            ..ff777ff77777777ff77ff7f7ff7f
            ...f7777ff777777ff777f.ff7f.f.
            ...f777f7ffffffff7777f...f....
            ...ffffeeeeeeeeeeeeeeef.......
            ....fffeeeeeeeeeeeeeeef.......
            .......feeeeeeeeeeeeff........
            .......f77eeeeeeee77f.........
            .......f777eeeeee777ff........
            .......f7777feeef7777f........
            .......f77777ffff7777f........
            .......f7777ff.ff7777ff.......
            ..ffff.f7777f..f777777fffff...
            .f7777ff7777ff.f7777777777ffff
            f77777777777ff.f7777777777777f
            f77777777777f...f777777777ffff
            ffffffffffffff...fffffffffffff
            `, SpriteKind.boss)
        bossy.setPosition(208, 208)
    })
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
function boss () {
    music.playMelody("D E F E F D F E ", 500)
}
function peace () {
    music.playMelody("G E - G E - G E ", 120)
}
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
let bossy: Sprite = null
let boss_fight = false
let boy: Sprite = null
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
tiles.setTilemap(tiles.createTilemap(hex`1e001e0002020101010000000001010101040101010100000000000001010101010602020103010101010101010101010101010101010101010101010101010101010101010505050501030101010101030101010101010101010101010101010505050501010505020101010101020505050505050505050101010101010501010000000005050505050505050500000000000001050502020201010501010000000000000c0101010c000000000000000001010501010101010501010000000000000c0101010c000000000000000001030501030101010501010000000000000c0101010c000000000000000001010501010100000000000000000000000c0101010c000000000000000001010501010100000000000000000000000c0107010c00000000000000000101010101010000010101010000000101010101010101010101000000000101010101010000010101010000000d01010101010101010d0100000000010101010101000001020201000000010101010101010101010100000000010101010101000001030201000000010101010101010101010100000000010101010101000001010101010101010101010d01010101010100000000000000000000000001010101010101010101010101010101010100000000000000000000000001010101000000010d010101010101010d010000000000000000000000000101010100000001010109090901010101010000000000000000000000000101010100000001010b0808080a0101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    22...2222.........222222......
    22.2..........................
    ..........2.....2.............
    ..........2.....2.............
    .....2222.........222222...222
    .....2...22.....222....2......
    .....2....2.....2......2.2..2.
    .....2....2.....2......2......
    222222....2.....2......2......
    ..2222...22.....22222..2......
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
    `, [myTiles.transparency16,sprites.dungeon.floorDark2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile15,myTiles.tile22], TileScale.Sixteen))
game.showLongText("you are a water nyad and your brother is a fire elemental in the shape of a human", DialogLayout.Full)
game.showLongText("and you are doing the best you can to survive but beware many wish to kill you good luck! to attack press A o((>ω< ))o watch out for hunters!", DialogLayout.Full)
info.setLife(5)
boy = sprites.create(img`
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
forever(function () {
	
})
forever(function () {
    tiles.placeOnRandomTile(bossy, myTiles.tile22)
})
forever(function () {
    if (boss_fight == true) {
        while (true) {
            boss()
        }
    } else {
        while (false) {
            peace()
        }
    }
})
game.onUpdateInterval(500, function () {
    boy.follow(gal, 50)
})
