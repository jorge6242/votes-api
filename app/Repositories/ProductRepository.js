'use strict'

const Product = use('App/Models/Product');

class ProductRepository {
    async all() {
        return await Product.all();
    }

    async save({ description, img, price }) {
        const product = new Product()
        product.description = description
        product.img = img
        product.price = price
        return await product.save();
    }

    async find(id) {
        return await Product.find(id);
    }

    async update({ id, body }) {
        const { description, img, price } = body
        const product = await Product.find(id)
        product.description = description
        product.img = img
        product.price = price
        return await product.save()
    }

    async delete(id) {
        const product = await Product.find(id)
        return await product.delete()
    }
}

module.exports = ProductRepository