const kookboek = {
    1: {
      naam: 'Paddenstoelen Pasta',
      ingredienten: ['pasta','paddenstoelen','citroen', 'creme fraiche', ],
      voorkeur: 'vega',
      kooktijd: 15,
      categorie: 'pasta',
      picture: "./resources/images/pasta-paddenstoelen.jpg"
      },
    2: {
      naam: 'Frisse Salade',
      ingredienten: ['sla', 'tomaat', 'ui'],
      voorkeur: 'vegan',
      kooktijd: 10, 
      categorie: 'salade',
      picture: "./resources/images/"
    },
    3: {
      naam: 'Shakshuka',
      ingredienten: ['rode punt paprika', 'ei', 'ui', '2 pakjes tomatenblokje','wortel','koriander', 'naanbrood', 'aioli'],
      voorkeur: 'vega',
      kooktijd: 20,
      categorie: 'vega',
      picture: "./resources/images/Shakshuka.jpg"

    }
    
  }

  const randomRecept = (boek) => {
    const recepten = Object.keys(boek);
     let index = Math.floor(Math.random()*recepten.length);
     let recept = recepten[2];
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
     
      setTimeout(logResult, 250);
      

    })  
  

  };
  


  function toonIngredienten (recept) {
    return new Promise((resolve, reject)=>{
      
      console.log('\nDe ingredienten zijn: ')
      setTimeout(()=>{
        
        console.log(recept.ingredienten);
        resolve ('\n\nTijd om te koken!')
      }, 250);
    })
    
    
    
  }
function hideDots(dots) {
    const numberOfDots = dots.length;
    for (let x = 0; x < numberOfDots; x++ ) {
        dots[x].style.display='none';
    }
    
}

function loadDot (dot) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve( dot.style.display='flex');
           
        }, 500)
    })
}


//app

const buttonElement = document.getElementById('laadReceptKnop');
const allDots = document.getElementsByClassName('dot');
const dot1 = document.getElementById('d1');
const dot2 = document.getElementById('d2');
const dot3 = document.getElementById('d3');

async function koken(){
    const firstP = document.getElementById('receptnaam');
    const ingredDiv = document.getElementById('ingredienten');
    const picture = document.getElementById('picture');
    const receptSectie = document.getElementById('recept');
    ingredDiv.innerHTML = '<div></div>';
    firstP.style.display = "none";
    picture.style.display= "none";

    hideDots(allDots);
    await loadDot(dot1);
    await loadDot(dot2);
    await loadDot(dot3);
    
    const boek = kookboek;
    const recept = await kiesRecept(boek);
    const ingred = await toonIngredienten(recept);
 
    firstP.style.display='grid';
    firstP.innerHTML = '<h3>'+ recept.naam + '</h3>';
    firstP.className = "receptNaam";

   // Make a container element for the list
   const listContainer = ingredDiv;

    //write ingredient array as list?
    const listElement = document.createElement('ul');
    listElement.className = "receptList";
    //loop trough the array.
    const listLength = recept.ingredienten.length;
    console.log(listLength)
    
    // Add it to the page
    document.getElementsByClassName('koekGrid')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    //add the listitems
    let listItem;
    for (let x = 0; x < listLength; x++) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = recept.ingredienten[x];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
    
    
    picture.innerHTML = `<img src=${recept.picture}>`;
    picture.style.display = 'grid';
    receptSectie.style.backgroundColor = 'white';
}



//button event listener to load 'koken'
buttonElement.addEventListener('click', koken);