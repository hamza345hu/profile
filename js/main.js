
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

// let about=document.querySelector(".about");
// let aboutText=document.querySelector(".about-text");
// window.onscroll=function () {
//     if (window.scrollY >= about.offsetTop) {
//         aboutText.style.right= 0;
//     }
// }
