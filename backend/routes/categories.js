const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();

// gets full list of categories
router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(categoryList);
});
// get single category

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        return res.status(500).json({ message: 'The category with given id was not found' })
    }
    res.status(200).send(category);
});


router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    })

    category = await category.save();

    if (!category)
        return res.status(404).send('the category cannot be created')

    res.send(category)
});
// uppdate the category
router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon || categori.icon,
            color: req.body.color
        },
        { new: true }
    )
    if (!category) {
        return res.status(404).send('the category cannot be updated')
    }
    res.send(category)
});
//deleting a single category
router.delete('/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id).then(category => {
        if (category) {
            return res.status(200).json({ sucess: true, message: 'the categoey is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: 'the category is not found' })
        }
    }).catch(err => {
        return res.status(400).json({ seccess: false, error: err })
    })
});

module.exports = router;