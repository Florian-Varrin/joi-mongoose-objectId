const mongoose = require('mongoose');
let Joi = require('@hapi/joi');

Joi = Joi.extend((joi) => {
    return {
        type: 'objectId',
        base: joi.any(),
        messages: {
            'invalid': '"{{#label}}" is not a valid MongoDB ObjectId',
        },
        validate(value, helpers) {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return { value, errors: helpers.error('invalid') };
            }
        },
    };
});

module.exports = Joi;
