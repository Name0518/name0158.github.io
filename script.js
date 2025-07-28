const mouse = document.querySelector('.mainLanding')
const front = document.querySelector('.bubble1')
const back = document.querySelector('.bubble2')



const sensFront = 1000
const sensBack = 1000

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches){
mouse.addEventListener('mousemove', e=> {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
    translate(
        ${-x/sensFront}%,
         ${-y/sensFront}%
    )` ; 
    back.style.transform = `
    translate(
        ${
           x/sensBack
        }%, ${y/sensBack
}% ) ` ;
})
}
