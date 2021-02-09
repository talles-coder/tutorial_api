const express = require('express');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {   
    console.log("talles")    
    return res.json({"titulo": "Como criar API??????","numero": 0010});
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});