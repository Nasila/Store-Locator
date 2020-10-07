const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
                
                storename: {
                    type: String,
                },
                
                lat: {
                    type: Number
                },
                lon: {
                    type: Number
                },
                items: [
                    {
                        type: Number
                    }
                ]
            }

        );

module.exports = mongoose.model('stores', storesSchema);