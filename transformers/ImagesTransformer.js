// transformers/ImagesTransformer.js
var ImagesTransformer = class {
  constructor(images) {
    this.images = images;
  }

  async element(element) {
    let imageElements = "";
    this.images.forEach((image) => {
      imageElements += `
        <img src="${image.url}" alt="${image.name}">
      `;
    });
    element.setInnerContent(imageElements, { html: true });
  }
};

module.exports = ImagesTransformer;
