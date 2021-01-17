db = require("./index.js")

//mongoose = db.mongoose
//Schema = mongoose.Schema

//dbTransaction.find({}, function(err, data) { console.log(err, data, data.length); });
/*
module.exports = (mongoose) => {
    mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true})
    mongoose.model('dbTransaction',new Schema({ price: Number, timestamp: String, id: Number }))
    var dbTransaction = mongoose.model('dbTransaction');
    //return dbTransaction
}
*/
module.exports = (mongoose) => {
    dbTransaction = mongoose.model(
        "dbTransaction",
        mongoose.Schema(
            {
                price: Number,
                timestamp: String,
            },
            {timestamp: true}
        )
    )
    return  dbTransaction
}