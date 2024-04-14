let t1 = gsap.timeline();

// t1.to("#div1" , {
//   x:400,
//   duration : 2,
//   backgroundColor:"#0d91f0",
//   scale : .8,  
// })

// t1.to("#div2" , {
//   x:400,
//   duration : 2,
//   backgroundColor:"#0d91f0",
//   scale : .5,  
//   rotate :180,
// })
t1.from("#nav>h1", {
  y:-50,
  duration:.8,
  delay:0.3,
  opacity: 0,
  stagger: 0.2, // delay between each animation (in seconds)
});
gsap.from("#nav2>h1", {
  y:-50,
  duration:.8,
  delay:0.3,
  opacity: 0,
  stagger: 0.2, // delay between each animation (in seconds)
});

t1.from(".textBody h1", {
  x:-1000,
  y:-200,
  duration:1,
  stagger:0.7,
})