
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

app.post("/convert/binary", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body

    let decimal = parseInt(angka,2);
    let octal = parseInt(angka,2).toString(8);
    let hexa = parseInt(angka,2).toString(16);

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Binary : angka,
        Decimal : decimal,
        Octal : octal,
        Hexa : hexa

    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/convert/decimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body

    let binary = angka.toString(2);
    let octal = angka.toString(8);
    let hexa = angka.toString(16);

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Decimal : angka,
        Binary : binary,
        Octal : octal,
        Hexa : hexa

    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/convert/octal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body

    let binary = parseInt(angka,8).toString(2);
    let decimal = parseInt(angka,8);
    let hexa = parseInt(angka,8).toString(16);

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Octal : angka,
        Binary : binary,
        Decimal : decimal,
        Hexa : hexa
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/convert/hexa", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number(req.body.angka).toString(16); // mengambil nilai sisi dari body

    let binary = parseInt(angka,16).toString(2);
    let decimal = parseInt(angka,16);
    let octal = parseInt(angka,16).toString(8);

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Hexa : angka,
        Binary : binary,
        Decimal : decimal,
        Octal : octal

    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
