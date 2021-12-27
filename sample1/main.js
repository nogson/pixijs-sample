const main = () => {
    let app = new PIXI.Application({
        width: 500,
        height: 500,
        resolution: window.devicePixelRatio || 1,
        backgroundColor: 0xFFFFFF
    });
    document.body.appendChild(app.view)

    const animatedSprite = animation()
    animatedSprite.play()
    app.stage.addChild(animatedSprite)

}

const animation = () => {
    const textureArray = []
    for (let i = 0; i < 30; i++) {
        const name = ('000' + (i + 1)).slice(-4)
        let texture = PIXI.Texture.from('images/' + name +'.png')
        textureArray.push(texture);
    }

    let animatedSprite = new PIXI.AnimatedSprite(textureArray)
    animatedSprite.animationSpeed = 0.2
    return animatedSprite
}


document.addEventListener('DOMContentLoaded', () => main())
