
// addEventListener to add a imation in cursor
var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr_blur.style.left = dets.x - 150 +"px"
    crsr_blur.style.top = dets.y - 150+"px"
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
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:"2"
    }
})