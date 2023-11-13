function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  
    locoScroll.on("scroll", ScrollTrigger.update);
  
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
  }
  init();


function page1Animation() {
    let t1 = gsap.timeline({
        duration: 1.2,
        stagger: 0.3,

    })

    t1.from("#page-1>#nav", {
        scale: 0,
        stagger: 1,

    })
    t1.from("#hero-content>h1", {
        y: "-100%",
        delay: 2,
    })
}


function page5Animation() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page-5",
            scroller: "#main",
            // markers: true,
            start: "top 10%",
            end: "top -200%",
            scrub: 2,
            // pin: true,
        },
    });

    t2.to("#page-5-header>#page-5-contend-1", {
        transform: "translateX(-50%)",
      });
}

page1Animation();
page5Animation();