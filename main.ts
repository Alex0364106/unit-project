scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tileMapList._pickRandom())
    tiles.placeOnRandomTile(players, sprites.dungeon.stairLarge)
    tiles.placeOnRandomTile(players2, sprites.dungeon.stairLarge)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectiles = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, players, 50, 0)
    projectiles = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, players2, 50, 0)
    animation.runImageAnimation(
    projectiles,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . 3 . . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . . . . . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . . . . . . 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
// function with parameter
function tile (num: number) {
    // array
    // 
    // tile map
    // 
    tileMapList = [
    tilemap`level0`,
    tilemap`level16`,
    tilemap`level20`,
    tilemap`level21`,
    tilemap`level22`
    ]
    tiles.setCurrentTilemap(tileMapList[0])
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.gameOver(true)
})
let projectiles: Sprite = null
let tileMapList: tiles.TileMapData[] = []
let players2: Sprite = null
let players: Sprite = null
info.setScore(0)
let count = 0
// loop
for (let index = 0; index <= 4; index++) {
    count += 1
    tile(0)
    // condition
    if (count > 6) {
        tile(4)
    }
}
players = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
players2 = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
scaling.scaleByPercent(players2, 0.9, ScaleDirection.Uniformly, ScaleAnchor.Middle)
// extension
scaling.scaleByPercent(players, 0.9, ScaleDirection.Uniformly, ScaleAnchor.Middle)
tiles.placeOnRandomTile(players, sprites.dungeon.stairLarge)
tiles.placeOnRandomTile(players2, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(players)
controller.moveSprite(players, 125, 125)
controller.player2.moveSprite(players2, 125, 125)
animation.runImageAnimation(
players,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
500,
true
)
animation.runImageAnimation(
players2,
[img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . f f b b b b f b f e e e f . . 
    . f b b b b b e 1 f 4 4 e . . . 
    . f b b b b b f 4 4 4 4 f . . . 
    . . f b b b 4 4 e d d d f . . . 
    . . . f f f 4 4 e d d d f . . . 
    . . . f b b e e b b d d d f . . 
    . . . . f b d d 1 d 1 d b f . . 
    . . . . . f f f b b f f f . . . 
    `],
500,
true
)
