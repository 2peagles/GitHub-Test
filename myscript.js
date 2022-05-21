  alert ('Hello There!');
 
  const person = {
    name: 'Precious',
    age: 20
  };
  console.log(person);

let i = 0 ;
let images = [ ];
let time= 2000;

images[0] = './images/beach.jpg.jpg'; 
images[1] = './images/waterfall.jpg.jpg'; 

function changeImg ( ) {
  document.Slide.src = images [ i ];
  if (i < images.length - 1 ){
      i++;
  } else {
    i = 0;
  }
  setTimeout("changImg( )", time)
}

window.onload =changeImg;