/**
 * Transforms img#avatar by setting the src attribute.
 */
const avatarSrc = "https://files.ferrell.farm/Jeremy headshot.png"

class AvatarTransformer {

    /**
     * Inserts an avatar by setting img#avatar src attribute
     * @param element
     */
    async element(element) {
        element.setAttribute("src", avatarSrc)
    }
}

module.exports = AvatarTransformer
