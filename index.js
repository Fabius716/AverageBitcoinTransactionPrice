//initialization and other stuff
let axios = require('axios')        //effettua richeste attraverso un complicato sistema di promesse e leve
let fs = require('fs')              //scrivere su file
let cheerio = require('cheerio')    //parsing dell'html e altro che ho dalla risposta (?)
//=======================================================================================
function sleep(ms){return new Promise(resolve => setTimeout(resolve, ms));} //setTimeout ma scritto meglio
log = console.log                   
asyncVoidFunctionsLog = async(myFunction)=>{
    console.log(await myFunction())
}                                  
/*=======================================================================================
Todo:
* Replace the file averageBTCTransactionCost with a mongoDB database
* Build a webserver => Preferrably with node.js and/or react.js
* Make a graph with graphjs
=======================================================================================*/

var rq = 10000

//get element from some website and put it in a file
async function getAverageTransactionPrice(reqDelay = 300000){ 
    axios.get("http://bitcoinfees.net/")
        .then(
            (response) => {
                if(response.status == 200){
                    let html = response.data
                    let $ = cheerio.load(html)
                    let avgTra = $(`div[class="col-lg-8 flex-first flex-md-unordered"] > p > b`).text()
                    let timestamp = Date()
                    //log(avgTra)
                    fs.writeFile('averageBTCTransactionCost', "\n" + avgTra + "    " + timestamp, {flag: 'a+'}, err =>{err?log(err):null})
                    //log(Object.keys(avgTra),avgTra.val())
                }
                else{
                    log("ripperotti, il sito non ha dato il 200")
                }
                //log("il get funzia")
            }
        )
    await sleep(reqDelay).then(()=>getAverageTransactionPrice(reqDelay))

}

getAverageTransactionPrice(rq)

//build some data structure

//graph the shit out of that data that i just stole maybe with graph js



//profit?