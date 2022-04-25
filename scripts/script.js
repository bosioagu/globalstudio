
const imagenSlider = document.getElementById("imagen-slider");

console.log(imagenSlider.src)

const imgArray = ['../imagenes/img1.jpg','../imagenes/img2.jpg' , '../imagenes/img3.jpg' , '../imagenes/img4.jpg'];

let i = 0;

const slideShow = () =>{
    console.log(`Slideshow${i}`)
    imagenSlider.src = imgArray[i]
    i = ( i<imgArray.length-1) ? i+1 : 0;
}

const interval = () =>{
    console.log("interval")
    setInterval(slideShow,2000)
}




