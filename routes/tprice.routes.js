module.exports = (app) => {
    const tprice = require(`../controllers/tprice.controller.js`)

    var router = require(`express`).Router()

    // Create a new tprice
    router.post("/",tprice.create)

    // Retrive all tprice
    router.get("/",tprice.findAll)

    app.use("/api", router)
}