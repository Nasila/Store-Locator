const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{ type: String, required: true},
    email:{type: String, required: true},
    items:[{
        id: {
            type: String
        },
        name: {
            type: String
        },
        price: {
            type: String
        },
        quantity: {
            type: String
        }
    }]
 },
 {
     timestamps: true,
});
module.exports = mongoose.model('user', userSchema);