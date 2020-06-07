// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     // toggle nav 

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');

//         //animate links
//         navLinks.forEach((link, index) => {
//             // if(link.style.animation){
//             //     link.style.animation = ' '
//             // } else {
//                 link.style.animation = 
//                 `navLinkFade 0.5s ease backwards ${index / 7}s`;        
//             // }
        
//         });
        
//         //burger animation
//         burger.classList.toggle('toggle');
    
//     });   
// }

// navSlide();

// const navSlide = () => {
//     const menuBtn = document.querySelector('.toggle');
//     const menuItems = document.querySelector('.menu');
//     menuBtn.addEventListener('click',() => {
//         if(!menuItems) {
//             menuBtn.classList.add('active');
//             // menuItems = true;
//             link.style.animation =
//             `menuItemsFade 0.5s ease backwards ${index / 7}s`;
//         }
//         else {
//             menuBtn.classList.remove('active');
//             // menuItems = fasle;
//         } 

//     });
// }

// navSlide();