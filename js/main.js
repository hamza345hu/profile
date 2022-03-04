//##################################################################
//box-sitting
// let boxSitting=document.querySelector('.box-sitting')
// let iconSitting=document.querySelector('.toggle i');
// iconSitting.onclick=()=>{
//     boxSitting.classList.toggle('open')
// }
// // color siting and Add to local storage
// let styleC=document.querySelectorAll('.style');

// styleC.forEach(function (s) {
//     s.classList.remove('active');
// })
// styleC.forEach(function(s,index){
//     let styleColors=Array.from(document.querySelectorAll(`.colors${index+1} .color`)); 
//     s.onclick=function () { 
//         styleActive();
//         switchColors('--bgColor-1', styleColors,0);
//         switchColors('--bgColor-2', styleColors,1);
//         switchColors('--primary-color', styleColors,2);
//         switchColors('--light-color', styleColors,3);
//         addLocal();
//     };
//     function styleActive() {
//         styleC.forEach((st)=>{
//             st.classList.remove('active');
//         })
//         s.classList.add('active');
//     }
//     function addLocal() {
//         let addArr=[];
//         for (let i = 0; i < styleColors.length; i++) {
//           addArr.push(styleColors[i].dataset.color);   
//         }
//         window.localStorage.setItem('colors',JSON.stringify(addArr)) 
//     };
//     //get from local storage
//     let getLocal=JSON.parse(window.localStorage.getItem('colors'));
//     document.documentElement.style.setProperty('--bgColor-1',getLocal[0]);
//     document.documentElement.style.setProperty('--bgColor-2',getLocal[1]);
//     document.documentElement.style.setProperty('--primary-color',getLocal[2]);
//     document.documentElement.style.setProperty('--light-color',getLocal[3]);
//     });
// function switchColors(cssColor,array,n) {
//     document.documentElement.style.setProperty(cssColor,array[n].dataset.color);
// }
//#############################################################################################
// scroll to top for website
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
//#############################################################################
// add class active to nav link.....
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
//##################################################################################
// mode
let mode= document.querySelector('.mode')
let ball= document.querySelector('.mode .ball')
let change=true;
mode.addEventListener('click',()=>{
    ball.classList.toggle('move')
     if (change) {
         change=false;
        setP('--bgColor-1','#ffffff')
        setP('--bgColor-2','#e7e2e1')
        setP('--light-color','#171a1c')
        setP('--primary-color','#ff274b')
     } 
     else {
        change=true;
        setP('--bgColor-1','#171a1c')
        setP('--bgColor-2','#22282a')
        setP('--light-color','#ffffff')
        setP('--primary-color','#ff274b')  
     }
})
function setP(v,c) {
    document.documentElement.style.setProperty(v,c)
}
//################################################################################
// let about=document.querySelector(".about");
// let aboutText=document.querySelector(".about-text");
// window.onscroll=function () {
//     if (window.scrollY >= about.offsetTop) {
//         aboutText.style.right= 0;
//     }}

