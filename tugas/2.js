

const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


app.get("/convert/celcius/:suhu", (req,res) => {
    // :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let celcius = Number(req.params.suhu) // mengambil nilai pada parameter name
    let reamur = (4/5) * celcius
    let fahrenheit = (9/5)*celcius + 32 
    let kelvin = celcius + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        celcius: celcius,
        "Hasil": {
            reamur : reamur,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})

app.get("/convert/reamur/:suhu", (req,res) => {
    // :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let reamur = Number(req.params.suhu) // mengambil nilai pada parameter name
    let celcius = ((5/4) * reamur)
    let fahrenheit = (9/4) * reamur + 32
    let kelvin = (5/4) * reamur + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        reamur : reamur,
        
        "Hasil": {
            celcius: celcius,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})

app.get("/convert/kelvin/:suhu", (req,res) => {
    // :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let kelvin = Number(req.params.suhu) // mengambil nilai pada parameter name
    let celcius = kelvin-273
    let reamur = ((4/5) * (kelvin-273.15)).toFixed(2)
    let fahrenheit = ((9/5) * (kelvin-273.15) + 32).toFixed(2)

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        kelvin : kelvin,
        
        "Hasil": {
            celcius: celcius,
            fahrenheit : fahrenheit,
            reamur : reamur

        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})

app.get("/convert/fahrenheit/:suhu", (req,res) => {
    // :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let fahrenheit = Number(req.params.suhu) // mengambil nilai pada parameter name
    let celcius = 5/9 * (fahrenheit-32)
    let reamur = (4/5) * (fahrenheit-32)
    let kelvin = 5/9 * (fahrenheit-32) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        fahrenheit : fahrenheit,
        
        "Hasil": {
            celcius: celcius,
            reamur : reamur,
            kelvin : kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
