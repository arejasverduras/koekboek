const randomRecept = (boek) => {
    const recepten = Object.keys(boek);
     let index = Math.floor(Math.random()*2);
     let recept = recepten[index];
     return recept;
    
   }

function kiesRecept (boek) {
    return new Promise((resolve, reject)=>{
      console.log('\nHet boek wordt opengeslagen');
      console.log('\nHet bloek bladert uit zichzelf');
      console.log('\nVanavond eten we: ');
      const result = randomRecept(boek);
      
      
      const logResult = ()=> {
      console.log('\n\n'+result + '!');
      const receptObject = boek[result];
      resolve (receptObject);
    }
     
      setTimeout(logResult, 1000);
      

    })  
  

  };
  


  function toonIngredienten (recept) {
    return new Promise((resolve, reject)=>{
      
      console.log('\nDe ingredienten zijn: ')
      setTimeout(()=>{
        
        console.log(recept.ingredienten);
        resolve ('\n\nTijd om te koken!')
      }, 2000);
    })
    
    
    
  }

  module.exports = { kiesRecept, randomRecept, toonIngredienten};