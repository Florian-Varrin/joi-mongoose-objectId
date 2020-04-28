let Joi = require('@hapi/joi');
const joiObjectIdExtension = require('./index.js');

Joi = Joi.extend((Joi) => joiObjectIdExtension);

const schema = Joi.object({
    id: Joi.objectId(),
    name: Joi.string(),
});

(async () => {
    const success = await schema.validate({
        id: '5ea7394b6b91089d144186b3',
        name: 'John Doe',
    });

    console.log('success', success);

    const failure = await schema.validate({
        id: '1234',
        name: 'John Doe',
    });

    console.log('failure', failure);
})();
