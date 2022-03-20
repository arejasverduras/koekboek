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

let color = generateRGBColor();

//two
//set the element to change to a varibale
let element = document.getElementsByTagName('h1')[0];

//three
//write a function that changes the variable style to the random color
const changeColor = (element,color)=>{
    element.style.color = "rgb("+color+")";
}

changeColor(element,color);

//four
//write a loop that keeps repeating this function
for (let x = 0;x>0;x++) {
    setTimeout(changeColor,500);
}


//five
// create a delay between loop iterations

//six
//export this function

//seven
//import this function

//eight 
//inititalize this function on page load

//nine (extra)
//initialize this functino for the footer, after the footer element is generated using the koken() function;