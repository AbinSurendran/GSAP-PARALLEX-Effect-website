// main.js
gsap.registerPlugin(ScrollTrigger);

// Smooth reveal on scroll
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Parallax effect for all images
gsap.utils.toArray("img").forEach(img => {
  gsap.to(img, {
    y: -30,
    ease: "none",
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});
