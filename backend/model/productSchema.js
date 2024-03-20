const mongoose =require('mongoose');
const AutoIncrementFactory =require ('mongoose-sequence');

const autoIncrement = AutoIncrementFactory(mongoose);

const productSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

productSchema.plugin(autoIncrement, {inc_field: 'id'});

const products = mongoose.model('product', productSchema);

module.exports ={products};
