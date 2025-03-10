gsap.to(".nav",{
    backgroundColor :"black",
    height:"100px",
    duration: 0.7,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers: true,
        start: "top -9%",
        end: "top -11%",
        scrub: 3

    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers: true,
        start: "top -20%",
        end: "top -100%",
        scrub: 2
    }
})
gsap.from(".page3 img, .about-us",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers: true,
        start: "top 70%",
        end: "top 68%",
        scrub: 3
    }
})
gsap.from(".cards",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers: true,
        start: "top 65%",
        end: "top 62%",
        scrub: 4
    }
})

gsap.from("#colon_1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon_1",
        scroller:"body",
        // markers: true,
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
})
gsap.to("#colon_2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon_2",
        scroller:"body",
        // markers: true,
        start:"top 95%",
        end: "top 83%",
        scrub:4
    }
})

gsap.to(".page5 h1",{
    y:-66,
    scrollTrigger:{
        trigger:".page5 h1",
        scroller:"body",
        // markers: true,
        start:"top 75%",
        end: "top 73%",
        scrub: 3
    }
})


var crscr =document.querySelector(".cursor")
var crscr_b=document.querySelector(".cursor-back")

document.addEventListener("mousemove",function(hilo){
    crscr.style.left= hilo.x+"px";
    crscr.style.top= hilo.y+"px";
    crscr_b.style.left= hilo.x-200+"px";
    crscr_b.style.top= hilo.y-200+"px";
})

var h4all= document.querySelectorAll(".nav h4")
 h4all.forEach(function(node){
    node.addEventListener("mouseenter",function(){
        crscr.style.scale=4;
        crscr.style.border="1px solid greenyellow";
        crscr.style.backgroundColor= "transparent";
    })
    node.addEventListener("mouseleave",function(){
        crscr.style.scale=1;
        // crscr.style.border="0px solid greenyellow";
        crscr.style.backgroundColor= "greenyellow";
    }) 
 })


