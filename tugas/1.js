

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


// end-point "/bujur_sangkar" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let s = Number(req.body.sisi) // mengambil nilai sisi dari body

    let luaspermukaan = 6 * (s*s)
    let volume = s * s * s

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: s,
        luaspermukaan: luaspermukaan,
        volume : volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bujur_sangkar" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)

    let luaspermukaan = 2 * ((p*l) + (l*t) + (p*t))
    let volume = p * l * t

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        luaspermukaan: luaspermukaan,
        volume : volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/bujur_sangkar" dengan method POST
app.post("/kerucut", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let t = Number(req.body.tinggi)
    let r = Number(req.body.jarijari)
    let pi = 3.14
    let s = ((r**2) + (t**2)) **0.5
    let luaspermukaan = (pi * r**2) + (pi * r * s)
    let volume = 1/3 * pi * (r**2) * t

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: t,
        jarijari: r,
        pi: pi,
        sisimiring: s,
        luaspermukaan: luaspermukaan,
        volume : volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/bujur_sangkar" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let t = Number(req.body.tinggi)
    let r = Number(req.body.jarijari)
    let pi = 3.14

    let luaspermukaan = 2*pi*r*(r+t)
    let volume = pi * r**2 * t

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: t,
        jarijari: r,
        pi: pi,
        luaspermukaan: luaspermukaan,
        volume : volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

