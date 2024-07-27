const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var timeout;

function circleChaptaKaro(){
    
// define default scale value
var xscale=1;
var yscale=1;
 var xprev=0;
 var yprev=0;

    window.addEventListener("mousemove", function(dets){
       
        clearTimeout(timeout);

       var xdiff=dets.clientX-xprev;
       var ydiff=dets.clientY-yprev;

       xprev=dets.clientX;
       yprev=dets.clientY;

       xscale = gsap.utils.clamp(0.8,1.2,xdiff);
       yscale = gsap.utils.clamp(0.8,1.2,ydiff);

       circleMouseFollower(xscale,yscale);

       timeout = setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
       },100);

    //    console.log(xdiff,ydiff);
        })
}



function firstPageAnimation(){
    var t1 = gsap.timeline()
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.3,
        expo:Expo.easeInOut
    })

     .to(".boundingelem",{
        y:'0',
        expo:Expo.easeInOut,
        duration:1.3,
        delay:-1,
        stagger:0.2
        
    })

    .from("#herofooter",{
        y:'-10',
        opacity:0,
        duration:1.3,
        delay:-1,
        expo:Expo.easeInOut
    })
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circleMouseFollower();
firstPageAnimation();
circleChaptaKaro();

document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });


    elem.addEventListener("mousemove",function(dets){
      diff =dets.clientY- elem.getBoundingClientRect().top
       diffrot = dets.clientX - rotate;
       rotate = dets.clientX;
        gsap.to(elem.querySelector("img") ,{
            opacity: 1,
            ease: Power4,
            top:diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 2),
        });
    });
});

var Menubar=document.querySelector("#navMenu");
Menubar.addEventListener('click')



