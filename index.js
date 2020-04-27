const mongoose = require('mongoose');
let Joi = require('@hapi/joi');

Joi = Joi.extend((joi) => {
    return {
        type: 'objectId',
        base: joi.string(),
        messages: {
            'invalid': '"{{#label}}" is not a valid ObjectId',
        },
        validate(value, helpers) {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return { value, errors: helpers.error('invalid') };
            }
        },
    };
});

module.exports = Joi;
