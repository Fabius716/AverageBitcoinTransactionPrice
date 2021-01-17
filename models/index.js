const dbConf = require(`../config/db.config.js`)
const mongoose = require(`mongoose`)

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConf.url
db.tprice = require(`./btctp.model.js`)(mongoose)
module.exports = db

//is here because btctp requires the db
/*
const dbModel = require(`./btctp.model.js`)

db.tprice = dbModel
*/