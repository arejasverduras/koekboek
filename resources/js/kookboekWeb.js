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
      ingredienten: ['sla', 'tomaat', 'avocado'],
      voorkeur: 'vegan',
      kooktijd: 10, 
      categorie: 'salade',
      picture: "./resources/images/bord-geen-fotores.png"
    },
    3: {
      naam: 'Shakshuka',
      ingredienten: ['rode punt paprika', 'ei', 'ui', '2 pakjes tomatenblokje','wortel','koriander', 'naanbrood', 'aioli'],
      voorkeur: 'vega',
      kooktijd: 20,
      categorie: 'exotisch',
      picture: "./resources/images/Shakshuka.jpg"

    },
    4: {
      naam: 'Omnia Groente met Kip',
      ingredienten: ['Zoete Aardappel','Broccoli','Kip','Knoflook','Olijfolie','Peper en Zout'],
      voorkeur: 'vlees',
      kooktijd: 60,
      categorie: 'oven',
      picture: "./resources/images/bord-geen-fotores.png",
      instructie: ['Snijd de zoete aardappel in plakjes, en de Brocolli in kleine roosjes', 'Doe olijfolie in de Omnia','Leg de kip als eerste in de Omnia','Bedek met de zoete aardappelschijfjes en de brocollie roosjes', 'Snijd wat knoflook in kleine stukjes en verdeel','Zet de omnia op het vuur en plaats het deksel erop. Wacht 40min. Houd de pan zoveel mogelijk dicht','Je kunt dit gerecht ook in een gewone oven maken. Gebruik dan een ovenschaal.']
    },
    5: {
      naam: 'Zalm Broccoli Pasta',
      ingredienten: ['Zalmsnippers', 'Brocolli', 'Ui', 'Knoflook', 'Slagroom', 'Italiaanse Kruiden', 'Pasta'],
      voorkeur: 'vis',
      kooktijd: 15,
      categorie: 'pasta',
      picture: "",
      instructie: ['Zet water op voor de pasta',
                  'Knoflook & ui in de koekenpan', 
                  'Voeg de brocolli toe', 
                  'Snijd de zalm in zalmsnippers en voeg toe',
                  'Voeg de italiaanse kruiden toe',
                  'Als het water kookt, doe je de pasta erin',
                'Voeg de slagroom toe',
              'Zet de saus op een laag vuur, deze is nu klaar',
              'Voeg de pasta toe aan de saus als deze klaar is. Roer door en serveer. Eet smakelijk!' ]
    }
    
  }

  const randomRecept = (boek, id) => {
    const recepten = Object.keys(boek);
    let receptIndex ="";
    do {
    let index = Math.floor(Math.random()*recepten.length);
    receptIndex = recepten[index];
    }
    while (receptIndex === id);
     const receptObject = boek[receptIndex];
     receptObject.current = receptIndex;
     console.log('current: '+ receptObject.current);
     return receptObject;
    
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

const pageTitle = document.getElementById('title');

async function koken(){
 
    hideDots(allDots);
    await loadDot(dot1);
    await loadDot(dot2);
    await loadDot(dot3);
    

    const boek = kookboek;
 
let recept = ""

const existingHiddenID = document.getElementsByClassName('hiddenId')[0];
if (existingHiddenID){
  let currentIndex = existingHiddenID.innerHTML;
  console.log('hiddenID: '+currentIndex);
  recept = randomRecept(boek,currentIndex);
  //remove the existingHiddenId from the page
  document.getElementsByClassName('koekGrid')[0].removeChild(existingHiddenID);
} else {
    
recept = randomRecept(boek); 
}
    
//remove existing elements on reload

  const existingFooter = document.getElementsByClassName('footer')[0];
  if (existingFooter){
    document.getElementsByClassName('koekGrid')[0].removeChild(existingFooter);
  }

    const bestaat = document.getElementsByClassName('meelGrid')[0];
    if (bestaat) {
      document.getElementsByClassName('koekGrid')[0].removeChild(bestaat);
    }

    const removePrevDiv = document.getElementsByClassName('prevDiv')[0];
    if (removePrevDiv){
      document.getElementsByClassName('koekGrid')[0].removeChild(removePrevDiv);
    }

    const removeNext = document.getElementsByClassName('nextButton')[0];
    if (removeNext){
    document.getElementsByClassName('koekGrid')[0].removeChild(removeNext);
    }

    //GENERATE && ADD THE SELECTED RECEPeh TO THE GRID

      /*

  const elementMakerFromArray = (constname, elementType, classname, parentNodeClass) =>{
    let arrayLength = constname.length;
    
    for (let x = 0; x < arrayLength; x++){
      
      // let element = constname[x];
      // console.log(element);
      let element = document.createElement(elementType[x]);
      element.className = classname[x];
      // constNamesArray.push(element);
      let parent = parentNodeClass[x];
      let parentNode = document.getElementsByClassName(parent)[0];

      parentNode.appendChild(element);
    }
  }
*/  
  //generate HTML elements & add them to the page
    const elementMaker = (elementType, classname, parentNodeClass, id, content, backgroundPicture) =>{
   
      let element = document.createElement(elementType);
      element.className = classname;

      let parent = parentNodeClass;
      let parentNode = document.getElementsByClassName(parent)[0];

      if (id) {
        element.id = id;
      }

      if (content) {
        element.innerHTML = content;
      }

      if (backgroundPicture) {
        element.style.backgroundImage = "url("+backgroundPicture+")";
      }

      parentNode.appendChild(element);
      return element;
    
  }

   //Generate & Add listItems
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

  //Call functions to Add elements
  //add meelGrid + elements  
  const hiddenID = elementMaker('p','hiddenId','koekGrid',null,recept.current);

  const prevDiv = elementMaker('div','prevDiv','koekGrid',null,'<h1>KOEKBOEK!</h1>');

  const meelGrid = elementMaker('div', 'meelGrid', 'koekGrid');
//add next button 
const nextButton = elementMaker('button','nextButton','koekGrid',null,'NEXT!');

  const meelH2 = elementMaker('h2','receptNaam','meelGrid',null,recept.naam);
  const meelPicture = elementMaker('div','meelPicture','meelGrid','meelPicture',null,recept.picture);
  
  //add receptGrid + elements
  const receptGrid = elementMaker('div','receptGrid','meelGrid');
  const metaContainer = elementMaker('div','metaContainer','receptGrid');
  
  //improve this later (make subobject for metadata, then loop over it to add it)
  //add the metadata
  const categorieElement = elementMaker('p','categorieElement','metaContainer',null,recept.voorkeur);
  const kooktijdElement = elementMaker('p','kooktijdElement','metaContainer',null,recept.kooktijd);

  //Make container elements for the lists 'ingredienten, instructies'
  const ingredientenContainer = elementMaker('div','listHolder ingredientenHouder','receptGrid');
  const instructiesContainer = elementMaker('div','listHolder instructiesHouder','receptGrid');  

  //add listheaders
  const ingredientenTitel = elementMaker('h3','ingredientenTitel','ingredientenHouder',null,'Ingredienten');
  const instructieTitel = elementMaker('h3','instructieTitel','instructiesHouder',null,'Instructies');

  //add the list elements
  const ingredientenLijst = elementMaker('ul','ingredientenLijst','ingredientenHouder');
  const instructieLijst = elementMaker('ol','instructieLijst','instructiesHouder');


    //call the listmaker
    addItemsToListFromArrayFromObject(recept.ingredienten, ingredientenLijst);
    addItemsToListFromArrayFromObject(recept.instructie, instructieLijst);

  const footer = elementMaker('div','footer','koekGrid');
  const footerMessage = elementMaker('h4','footerMessage','footer',null,'Eet smakelijk!');

//scroll into view
const scrollTo = document.getElementsByClassName('meelGrid')[0];
scrollTo.scrollIntoView({behavior:"smooth"});


  //makeFlashy!
  makeFlashy(footerMessage);

  // function maakReceptFlashy (){
  //   const getReceptNaam = document.getElementsByClassName('receptNaam')[0];
  // makeFlashy(getReceptNaam);
  // }

  // meelGrid.addEventListener('click', maakReceptFlashy);

  
  // buttonElement.addEventListener('click', makeFlashy(pageTitle));



function nextKoken (){
  //remove next button     
  document.getElementsByClassName('koekGrid')[0].removeChild(nextButton);
  console.log(recept);

  const scrollTarget = document.getElementsByClassName('waitingContainer')[0];
  scrollTarget.scrollIntoView({behavior:"smooth"});
  koken();
}


  nextButton.addEventListener('click',nextKoken);
}

//button event listener to load 'koken'
buttonElement.addEventListener('click', koken);
