const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
                id: {
                    type: Number,
                    unique: true,
                },
                name: {
                    type: String,
                },
                price: {
                    type: Number,
                },
                description: {
                    type: String,
                },
                quantity: {
                    type: Number,
                }
            }

        );

module.exports = mongoose.model('items', itemsSchema);