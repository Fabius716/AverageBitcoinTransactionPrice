//this should be the Express web server 
let express = require("express")
let bodyParser = require("body-parser")
let cors = require("cors") //lib to provide express middleware to enable cors options
const PORT = process.env.PORT || 1337
let routes = require(`./routes/tprice.routes`)

let app = express()

let cOptions = {
    origin: "http://localhost:1337"
}

app.use(cors(cOptions)) //links the app to the cors (?)

//parse request of content-type - application/json
app.use(bodyParser.json())

//parse req of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//connect the db
const db = require(`./models`)
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log(`Connected to the database`)
    })
    .catch(err =>{
        console.log(`could not connect to the database ${err}`)
        process.exit()
    })
/*
*/

//test route
app.get("/", (request,result) => {
    result.json({message:"Hello world, btc rocks!"})
})

//implement the routes api
routes(app)

//listen for requests
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})