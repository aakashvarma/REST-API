let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Create ninja schema and model

let NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    age: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // Add in geo location
})

let Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;














