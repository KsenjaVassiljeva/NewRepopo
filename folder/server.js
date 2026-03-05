const exspress = require("exspress");
const app = exspress();

const PORT = process.env.PORT || 3000;

const NIMI = process.env.MY_NAME || "Tundmatu nimi (Viga!)";

app.get ('/api/info', (req, res) =>{
    res.status(200).json ({
        misioon: "Iseseisev deplomine edukas",
        meeskond: NIMI,
        aeg: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0 ', ()=>{
    console.log(`API Server töötab selle pordi peale:${PORT}`);
});