let app = null
let frame = 0
let sprite = null
let textures = null
let direction = 1
const maxFrame = 300

const main = () => {
     app = new PIXI.Application({
        width: 1000,
        height: 1000,
        resolution: window.devicePixelRatio || 1,
        autoResize: true,
        backgroundColor: 0xFFFFFF
    });
    document.body.appendChild(app.view);
    textures = getTextures()
    createSprite()

    document.getElementsByTagName('canvas')[0].addEventListener('mousewheel', (e) => {
        sprite.destroy()
        createSprite(e.wheelDelta)
    })

}

const createSprite = (v) => {
    sprite = new PIXI.Sprite(textures[frame])
    app.stage.addChild(sprite)
    if(frame === maxFrame) {
        direction = -1
    }

    if(frame === 0) {
        direction = 1
    }


    frame += direction
}

const getTextures = () => {
    const textureArray = []
    for (let i = 0; i < maxFrame; i++) {
        const name = ('000' + (i + 1)).slice(-4)
        let texture = PIXI.Texture.from('images/' + name + '.png');
        textureArray.push(texture)
    }
    return textureArray
}


document.addEventListener('DOMContentLoaded', () => main())
