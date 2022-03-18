const kookboek = {
    1: {
      naam: 'Paddenstoelen Pasta',
      ingredienten: ['pasta','paddenstoelen','citroen', 'creme fraiche', ],
      voorkeur: 'vega',
      kooktijd: 15,
      categorie: 'pasta',
      picture: "./resources/images/pasta-paddenstoelen.jpg", 
      instructie: ['Maak de paddenstoelen schoon door het vuil eraf te vegen met een keukenpapiertje.', 'Snijd de paddenstoelen in stukjes', 'Kook ondertussen de pasta', 'Verhit olijfolie in de koekenpan en bak de paddenstoelen met een beetje zout']
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
 

    hideDots(allDots);
    await loadDot(dot1);
    await loadDot(dot2);
    await loadDot(dot3);
    
    const boek = kookboek;
    const recept = await kiesRecept(boek);
    const ingred = await toonIngredienten(recept);
    
    const bestaat = document.getElementById('meelGrid');
    if (bestaat) {
      document.getElementsByClassName('koekGrid')[0].removeChild(bestaat);
    }


    //GENERATE && ADD THE SELECTED RECEPT TO THE GRID

    // make a container element 'meelGrid'
    const meelGrid = document.createElement('div');
    meelGrid.className = 'meelGrid';
    meelGrid.id = 'meelGrid';
  

    //make h2 'receptnaam'
    const meelh2 = document.createElement('h2');
    meelh2.id = 'receptNaam'
    meelh2.innerHTML = '<h2>'+ recept.naam + '</h2>';

    //make meelPicture
    // const meelPicture = document.createElement('img');
    // meelPicture.id = 'meelPicture';
    // meelPicture.src = `${recept.picture}`;

    const meelPicture = document.createElement('div');
    meelPicture.id = 'meelPicture';
    meelPicture.style.backgroundImage = "url("+recept.picture+")";


    //make ReceptGrid
    const receptGrid = document.createElement('div');
    receptGrid.className ='receptGrid';

    // Make a container element for the list 'Ingredienten'
    const ingredientenContainer = document.createElement('div');
    ingredientenContainer.className = 'listHolder ingredientenHouder';

    //Make a container element for the list 'Instructies'
    const instructiesContainer = document.createElement('div');
    instructiesContainer.className = 'listHolder instructiesHouder';

  //add a metadata container
  const metaContainer = document.createElement('div');
  metaContainer.className = 'metaContainer';

        
    //add the metadata

    //improve this later (make subobject for metadata, then loop over it to add it)
    const categorieElement = document.createElement('p');
    categorieElement.className = 'categorieElement';
    categorieElement.innerHTML = recept.voorkeur;
    
    const kooktijdElement = document.createElement('p');
    kooktijdElement.className = 'kooktijdElement';
    kooktijdElement.innerHTML = recept.kooktijd ;

    //add listheaders
const ingredientenTitel = document.createElement('h3');
ingredientenTitel.className = 'ingredientenTitel';
ingredientenTitel.innerHTML = 'Ingredienten';

const instructieTitel = document.createElement('h3');
instructieTitel.className = 'instructieTitel';
instructieTitel.innerHTML = 'Instructies';

    //add the list for ingredienten
    const ingredientenLijst = document.createElement('ul');
    ingredientenLijst.className = 'ingredientenLijst';

    //add the list for Instructies
    const instructieLijst = document.createElement('ul');
    instructieLijst.className = 'instructieLijst';
    
    //listitems will be generated later
  

    //add elements to koekGrid
    document.getElementsByClassName('koekGrid')[0].appendChild(meelGrid);
    
    //add meelGrid elements
    meelGrid.appendChild(meelh2);
    meelGrid.appendChild(meelPicture);
    meelGrid.appendChild(receptGrid);
    
    //add receptGrid elememts
    receptGrid.appendChild(metaContainer);
    receptGrid.appendChild(ingredientenContainer);
    receptGrid.appendChild(instructiesContainer);

    // add the meta data tot the appropriate container
 
    metaContainer.appendChild(categorieElement);
    metaContainer.appendChild(kooktijdElement);
  
    // add the listTitels
    ingredientenContainer.appendChild(ingredientenTitel);
    instructiesContainer.appendChild(instructieTitel);

    //add listItems <ul> (ingredienten, instructies)
    ingredientenContainer.appendChild(ingredientenLijst);
    instructiesContainer.appendChild(instructieLijst);
  

    //ingredienten generate list

    //add the listItems INSTRUCTIES

    const addItemsToListFromArrayFromObject = (sourceArray, list) => {
      if (!sourceArray) {
        const errorMessage = 'Deze lijst bestaat nog niet!';
        const errorP = document.createElement('p');
        errorP.innerHTML = errorMessage;
        list.appendChild(errorP);
        return;
      }
      
      let listItem;
      const listLength = sourceArray.length;
      for (let x=0; x <listLength; x++){
        // create an item for each one
        listItem = document.createElement('li');

        //add the item text
        listItem.innerHTML = sourceArray[x];

        //add listItem to the listElement
        list.appendChild(listItem);

      }
    }
    addItemsToListFromArrayFromObject(recept.ingredienten, ingredientenLijst);
    addItemsToListFromArrayFromObject(recept.instructie, instructieLijst);
}



//button event listener to load 'koken'
buttonElement.addEventListener('click', koken);