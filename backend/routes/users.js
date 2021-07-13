const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
//get list of complete user 
router.get('/', async (req, res) => {
    const userList = await User.find().select('-passwordHash');
    //const userList = await User.find().select('name phone email');

    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.send(userList)
});

//getting a single user by id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-passwordHash');

    if (!user) {
        return res.status(500).json({ message: 'The user with given id was not found' })
    }
    res.status(200).send(user);
});


//adding a new user,

router.post('/', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country
    },
        { new: true }
    )

    user = await user.save();

    if (!user)
        return res.status(404).send('the user cannot be register')

    res.send(user)
});


//login 
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const secret = process.env.secret;
    if (!user) {
        return res.status(400).send('the user not found')
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            { expiresIn: '1d' }
        )
        return res.status(200).send({ user: user.email, token: token })
    } else {
        return res.status(400).send('Password Worng')
    }
});


//registering a new user
router.post('/register', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    })
    user = await user.save();

    if (!user)
        return res.status(400).send('the user cannot be created!')

    res.send(user);
})


//deleteing a new user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(user => {
        if (User) {
            return res.status(200).json({ sucess: true, message: 'the User is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: 'the User is not found' })
        }
    }).catch(err => {
        return res.status(400).json({ seccess: false, error: err })
    })
});



//getting total number of user registered
router.get('/get/count', async (req, res) => {
    const userCount = await User.countDocuments((count) => count);

    if (!userCount) {
        return res.status(500).json({ success: false })
    }
    res.send({ userCount: userCount })
})

module.exports = router;