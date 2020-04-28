const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const extension = {
    type: 'objectId',
    base: Joi.any(),
    messages: {
        'invalid': '{{#label}} is not a valid MongoDB ObjectId',
    },
    validate(value, helpers) {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return { value, errors: helpers.error('invalid') };
        }
    },
};

module.exports = extension;
