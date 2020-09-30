const mongoose = require('mongoose');
const items = require('../models/items');

exports.itemsList = async (req, res) => {
    await items.find({}).exec(
        (err,item) => {
            if(err) {
                return res.status(400).json({
                    error: "something went wrong, please try again"
                });
            } 
            else {
               return res.json({
                result: item
               });
                
            }
        }
    );
};
