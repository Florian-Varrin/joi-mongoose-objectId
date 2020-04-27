# joi-mongoose-objectid

Joi extension to validate MongoDB objectId with mongoose

## use

`joi-mongoose-objectid` give you the `Joi.objectId()` function that validate the input with `mongoose.Types.ObjectId.isValid(value)`.

It extends Joi so you should use it instead of importing Joi directly and you can then use all the other Joi utility functions.

```js
const Joi = require('joi-mongoose-objectid');

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
To test run :  
```
npm run test
```

OR 

```
yarn test
```
## License

[MIT](https://github.com/mkg20001/joi-objectid/blob/master/LICENSE)
