
// addEventListener to add a imation in cursor
var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr_blur.style.left = dets.x - 150 +"px"
    crsr_blur.style.top = dets.y - 150+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave',function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid  #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

//gsap code to add animation on navbar when scoll the backgroung color to deep black or deep shades and nav size small
gsap.to("#nav",{
    backgroundColor : "#000",
    height:"110px",
    duration:0.5,

    //main code which action when scroll
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

//gasp code to add animations that when scroll fadded background color will appear appearing
gsap.to("#main",{
    backgroundColor:"#000",
    //main code which action when scroll
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from('#about-us img, #about-us-in',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4, //one-by-one element show
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }
})

gsap.from('.card',{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1, //one-by-one element show
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})