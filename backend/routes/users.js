const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const userlist = await User.find();

    if (!userList) {
        res.status(500).json({ success: false })
    }
});
module.exports = router;