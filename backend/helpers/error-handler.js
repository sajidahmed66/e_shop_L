function errorHandler(err, req, res, next) {

    if (err.name === 'UnauthorizedError') {
        //jwt authentication err
        return res.status(401).json({ message: "the user is not authorized" })
    }

    if (err.name === 'ValidationError') {
        //validation err
        return res.status(401).json({ message: err })
    }

    //general type of error
    return res.status(500).json(err);
}

module.exports = errorHandler;