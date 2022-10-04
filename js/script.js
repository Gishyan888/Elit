let i= 0;
let sliderImg= document.querySelector(".sliderimg");
let images= ['img1.jpg' ,'img2.jpg' ,'img3.jpg' ,'img4.jpg' ,'img5.jpg'];

function previous(){
    if (i <= 0 ) i= images.length;
    i--;
    return setImg();
}
function next(){
    if (i >=  images.length -1) i =-1 
    i++;
    return setImg();
}


function setImg(){
    return sliderImg.setAttribute('src' ,'slideImages/' + images[i]);
}