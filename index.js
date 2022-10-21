const xlsx = require('xlsx')
const wbm = require('wbm')
// import fs from 'fs';



const wb = xlsx.readFile('./Sales report.xlsx')
const ws = wb.Sheets['SALES']


const data = xlsx.utils.sheet_to_json(ws)
let array = []
for (let i = 0; i < data.length; i++) {
    let ele = data[i]
    for (let key in ele) {
        if (typeof ele[key] == "number" && ele[key].toString().length == 10) {
            array.push(ele[key])
        }
    }

}




let failedNumbers = []



let send = (array, message) => {
    wbm.start().then(async () => {
    let data =     await wbm.sendTo(array, message)
    console.log(data)
    //    let a = await wbm.send
    //    console.log(a)
    }).catch(err => {
        console.log(err)
    })

}

function forFunction(array) {
    for (let i = 0; i < array.length; i++) {
    const message = "Advance Happy Diwali🪔 to you and your family. Hope  this Diwali bring light and wealth to you. Sri Thirupati motors, Toopran";
        send([array[i]], message)
    }
}

forFunction([6303213224])
