# joi-mongoose-objectid

Joi extension to validate MongoDB objectId with mongoose

## use

`joi-mongoose-objectid` give you the `Joi.objectId()` function that validate the input with `mongoose.Types.ObjectId.isValid(value)`.

It is a Joi extension so you should extends Joi with it. Then you can extend Joi with other extensions.

```js
let Joi = require('@hapi/joi');
const joiObjectIdExtension = require('./index.js');

Joi = Joi.extend((Joi) => joiObjectIdExtension);

const schema = Joi.object({
  id: Joi.objectId(),
  name: Joi.string().max(100),
  date: Joi.date()
});

schema.validate();

```

### Installation

```
npm install joi-mongoose-objectid
```

OR 

```
yarn add joi-mongoose-objectid
```

### Tests

There is two simple tests on the test.js file. One for success and one for failure. 
To run tests :  
```
npm run test
```

OR 

```
yarn test
```
## License

[MIT](https://github.com/mkg20001/joi-objectid/blob/master/LICENSE)
