const { request } = require("express")
const db = require(`../models`)
const Tprice = db.tprice


//Create and save a new tprice
exports.create = (request, result) => {
    //validate request
    if(!request.body.price){
        result.status(400).send({message:`content can't be empty`})
        return
    }
    let tprice = new Tprice({
        price: request.body.price,
        timestamp: request.body.timestamp,
        id: request.body.id,

    })

    //save tp in database
    tprice
        .save(tprice)
        .then((data) => {
            result.send(data)
        })
        .catch((err) => {
            result.status(500).send({
                message: err.message || `Some error occured while adding the tprice to the database`
            })
        })
}

//Retrieve all logged tprices
exports.findAll = (request, result) => {
    const title = request.query.title
    var condition = title ? { title: {$regex: new RegExp(title), $options: "i"} } : {}

    Tprice.find(condition)
        .then((data)=>{
            result.send(data)
        })
        .catch((err) => {
            result.status(500).send({
                message: err.message || "A error occurred while retrieving tprices"
            })
        })
}

//find one

//delete one tprice
exports.delete = (request, result) => {

}