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

app.post("/bmi", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)

    let bmi = berat / (tinggi ** 2)
    let status 
    if (bmi >= 30){
        status = "Kegemukan(Obesitas)";
    }
    else if (bmi < 30 && bmi >= 25){
        status = "Kelebihan Berat Badan";
    }
    else if (bmi < 25 && bmi >= 18.5){
        status = "Normal";
    }
    else {
        status = "Kekurangan Berat Badan";
    }


    let response = {
        berat: berat,
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
