let t1 = gsap.timeline();

t1.from("#nav>h1", {
  y: -50,
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
gsap.from("#nav2>h1", {
  y: -50,
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
t1.from("hr", {
  x: -2500,
  duration: 1,
  stagger: 0.7,
});

t1.from(".textBody h1", {
  x: -1000,
  y: -200,
  duration: 1,
  stagger: 0.7,
});

gsap.to("#page2 > .img_box >img", {
  width:"100%",
  duration: 3,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body" ,
    markers: true,
    start : "top -5%",
    end : "top -35%",
    scrub: 4,
    pin:true,
  },
});

gsap.to("#page3 > span", {
  transform: "translateX(-36%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body" ,
    markers: true,
    start : "top -5%",
    end : "top -35%",
    scrub: 4,
    pin:true,
  },
})
