/**
 * Transforms the HTML style tag, adding additional style
 * rules and media queries
 */

const bodyStyle = `
body {
  background-image: url('https://files.ferrell.farm/Ferrell Farms cattle.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#social #links a {
  position: relative;
}

#social #links a svg {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
}

@media (max-width: 500px) {
  #social #links a {
    height: reset;
    width: reset;
    margin: 0 0.25rem;
    padding: 0.75rem 1.5rem;
  }
}
`

class StyleTransformer {

    /**
     * Appends additional styles to html template style tag
     * @param element
     */
    async element(element) {
        element.append(bodyStyle)
    }
}

module.exports = StyleTransformer
