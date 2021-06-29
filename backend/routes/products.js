const { Product } = require('../models/product');
const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');

//getting the full productList
router.get(`/`, async (req, res) => {
    //localhost:3000/api/v1/products?categories=6879665769,54766876969
    // this is query Parameters
    // this is to filter products by categories
    let filter = {};
    if (req.query.categories) {
        filter = { category: req.query.categories.split(',') }
    }

    const productList = await Product.find(filter).populate('category');

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
});

//getting a single product
router.get('/:id', async (req, res) => {
    const product = await (await Product.findById(req.params.id)).populated('category');

    if (!product) {
        res.status(500).json({ success: false })
    }
    res.send(product)
})

router.post(`/`, async (req, res) => {
    // validate if the category send by user is correct or not.
    const category = await Category.findById(req.body.category)
    if (!category) { return res.status(400).send('Invalid Category') }
    // if correct category is passed then following code will run.

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    })
    product = await product.save();
    if (!product) {
        return res.status(500).send('The product cannot be created')
    }
    res.send(product)
});
//update a single product 
router.put('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id')
    }
    // validate if the category send by user is correct or not.
    const category = await Category.findById(req.body.category)
    if (!category) { return res.status(400).send('Invalid Category') }
    // if correct category is passed then following code will run.

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true }
    )
    if (!product) {
        return res.status(500).send('the product cannot be updated')
    }
    res.send(product)
});
//delete a product 
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id).then(product => {
        if (product) {
            return res.status(200).json({ sucess: true, message: 'the product is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: 'the product is not found' })
        }
    }).catch(err => {
        return res.status(400).json({ seccess: false, error: err })
    })
});
//get number of product in database:
router.get('/get/count', async (req, res) => {
    const productCount = await Product.countDocuments((count) => count);

    if (!productCount) {
        return res.status(500).json({ success: false })
    }
    res.send({ productCount: productCount })
})
//get featured products
router.get('/get/featured/:count', async (req, res) => {
    const count = req.params.count ? req.params.count : 0
    const product = await Product.find({ isFeatured: true }).limit(+count);

    if (!product) {
        return res.status(500).json({ success: false })
    }
    res.send(product)
})

module.exports = router