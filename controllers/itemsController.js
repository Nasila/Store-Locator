const mongoose = require('mongoose');
const Items = require('../models/items');
const Users = require('../models/user')
exports.itemsList = async (req, res) => {
    await Items.find({}).exec(
        (err,item) => {
            if(err) {
                return res.status(400).json({
                    error: "something went wrong, please try again"
                });
            } 
            else {
               return res.json({
                item
               });
                
            }
        }
    );
};
exports.addUser = async (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const items=req.body.items;
    const User=new Users({name,email,items});
    await User.save()
    .then(() => res.json('Issue added!'))
    .catch(err => res.status(400).json('Error: ' + err))
};

exports.updateCart = async (req, res)=>{
    const name=req.body.name;
    const id=req.body.id;
    const price=req.body.price;
    const description=req.body.description;
    const quantity=req.body.quantity;
    const uid=req.body.uid;
    console.log(uid);
     Users.findOneAndUpdate(
        { email: uid }, 
        { $push: { items: [{
            'id': id,
            'name': name,
            "price": price,
            "quantity": quantity 
        }] } },
        {new: true},
       function (error, user) {
             if (error) {
                 console.log("error");
             } else {
                 console.log("added successfully",user.items);
             }
         });
        };

exports.getCartList = async (req,res)=>{
    const email = req.params.email;
    await Users.findOne({'email':email})
    .then(user=>res.json(user.items))
    .catch(err=>console.log(err));
};