const joi = require('joi')
module.exports = {
    register(req, res, next) {
        const scheme = {
            email: joi.string().email(),
            password: joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const { error, value } = joi.ValidationError(req.body, scheme)

        if (error) {

        } else {

        }
        next()
    }
}