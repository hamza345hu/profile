// scroll to top for website...........................................
let up=document.querySelector('.up');
window.onscroll=function () {
 if (window.scrollY>=300) {
    up.style.display="block"
} else {
    up.style.display="none" 
}   
}
up.addEventListener('click',function () {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    })
})
// add class active to nav link......................................................
let navLink=document.querySelectorAll('.nav-link');
navLink.forEach(function (ele) {
    ele.addEventListener('click',function linkActive() {
        navLink.forEach(function (e) {
            if (e.classList.contains('navLink-active')) {
                e.classList.remove('navLink-active')
            }
        });
        ele.classList.add('navLink-active')
    })
})
// change mode....................................................
let mode= document.querySelector('.mode')
let ball= document.querySelector('.mode .ball')
let aColor=[]
  
//get from local storage
if (localStorage.getItem('websiteColor')) {
    aColor=JSON.parse(localStorage.getItem('websiteColor'))
    setP(aColor[0],aColor[1],aColor[2],aColor[3])
    //ball.style.transition= 0+'s'
    // خاصية تنطي لون الخلفية للعنصر الي اريدة
    let m=window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
    if(m==='rgb(255, 255, 255)') {
        ball.classList.add('move') 
     }  
}
//mode event
mode.addEventListener('click',()=>{
    // خاصية تنطي لون الخلفية للعنصر الي اريدة
    let bodyBackground=window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
    // change to light mode
     if (bodyBackground=='rgb(23, 26, 28)'){
        ball.classList.add('move')
         aColor=[];
         setP('#ffffff','#e7e2e1','#171a1c','#ff274b')
     } 
    // go back to dark mode
     if(bodyBackground==='rgb(255, 255, 255)') {
        ball.classList.remove('move')
        aColor=[];
        setP('#171a1c','#22282a','#ffffff','#ff274b') 
     }
     // add to local storage
    localStorage.setItem('websiteColor',JSON.stringify(aColor))
})
function setP(c1,c2,c3,c4) {
    document.documentElement.style.setProperty('--bgColor-1',c1)
    document.documentElement.style.setProperty('--bgColor-2',c2)
    document.documentElement.style.setProperty('--light-color',c3)
    document.documentElement.style.setProperty('--primary-color',c4) 
    aColor.push(c1,c2,c3,c4)
}

//################################################################################
// let about=document.querySelector(".about");
// let aboutText=document.querySelector(".about-text");
// window.onscroll=function () {
//     if (window.scrollY >= about.offsetTop) {
//         aboutText.style.right= 0;
//     }}

