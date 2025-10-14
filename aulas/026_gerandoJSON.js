const fs = require('fs');

const boldo = {
    "nome": "boldo",
    "idade": 16,
    "altura": 1.82,
    "hobies": [
        "basquete",
        "jogar"
    ]

}
const json = JSON.stringify(boldo);
fs.writeFileSync('./aulas/026_gerandoJSON.json', JSON.stringify(boldo));
