//one
//create a random color
const generateRGBColor = () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    const rgb = r+","+g+","+b;
    console.log(rgb);
    return rgb;
}
//two
//set the element to change to a varibale
let element = document.getElementsByTagName('h1')[0];

//three
//write a function that changes the variable style to the random color
function changeColor (element) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let newColor = generateRGBColor();
            resolve (element.style.color = "rgb("+newColor+")");
        },500)
    })
}

async function makeFlashy (what){
    for(let x = 0; x<10000;x++) {
    await changeColor(what);
    }
}

makeFlashy(element);


//six
//export this function

//seven
//import this function

//eight 
//inititalize this function on page load

//nine (extra)
//initialize this functino for the footer, after the footer element is generated using the koken() function;