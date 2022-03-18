const kookboek = require('./recepten.js');
const {kiesRecept, toonIngredienten} = require('./functies.js');




// console.log(kookboek);
// kiesRecept(kookboek);
async function koken(boek){
    const recept = await kiesRecept(boek);
    const ingred = await toonIngredienten(recept);
    console.log(ingred);

    

}

koken(kookboek);