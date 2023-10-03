/**
 * Returns an array of links that represent stories of Linktree for /links endpoint
 * @type {({name: string, url: string}[])}
 */

function getLinksEndpoint() {
    return [
         {
            "name": "Cell: (256) 385-0736",
            "url": "tel:256-385-0736"
          },    
          {
            "name": "Email Address: jeremy@ferrell.farm",
            "url": "mailto: jeremy@ferrell.farm"
          },
          {
            "name": "VCARD: Jeremy K Ferrell",
            "url": "https://files.ferrell.farm/Jeremy K Ferrell Ferrell Farms.vcf"          
          },
          {
            "name": "Jeremyferrell.com",
            "url": "https://www.jeremyferrell.com/"
          },    
          {
            "name": "Ferrell Farms",
            "url": "https://www.ferrellfarms.org/"
          },
          {
            "name": "Nostr",
            "url": "https://primal.net/ferrelljeremy"
          },
          {
            "name": "Send payment via Lightning: ferrelljeremy@getalby.com ",
            "url": "https://getalby.com/ferrelljeremy"
          }
    ]
}

module.exports = getLinksEndpoint()
