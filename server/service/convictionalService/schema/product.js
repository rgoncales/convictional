export class Weight {
  constructor(data) {
    this.model = {
      value: data.weight,
      unit: data.weight_unit,
    }
    return this
  }

  toJSON() {
    return this.model
  }
}

export class Variant {
  constructor(data) {
    this.model = {
      id: data.id,
      title: data.title,
      sku: data.sku,
      available: false,
      inventory_quantity: 0,
      weight: this.getWeight(data),
    }
    return this
  }

  getWeight(variant) {
    return new Weight(variant).toJSON()
  }

  toJSON() {
    return this.model
  }
}

export class Image {
  constructor({ image, variant }) {
    this.model = {
      variantId: variant.id,
      source: image.src,
    }
    return this
  }

  toJSON() {
    return this.model
  }
}

export class Product {
  constructor(data) {
    const variants = this.getVariants(data.variants)
    const images = this.getImages(data.variants)
    this.model = {
      code: data.id,
      title: data.title,
      bodyHtml: data.body_html,
      vendor: data.vendor,
      variants,
      images,
    }
    return this
  }

  getVariants(variants) {
    return variants.map(variant => {
      return new Variant(variant).toJSON()
    })
  }

  getImages(variants) {
    let images = []
    variants.forEach(variant => {
      const temp = variant.images.map(image => {
        return new Image({ image, variant }).toJSON()
      })
      images = images.concat(temp)
    })
    console.log(images)
    return images
  }

  toJSON() {
    return this.model
  }
}