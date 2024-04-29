document.addEventListener('DOMContentLoaded', function() {
  const smoothLinks = document.querySelectorAll('.smooth-link');

  smoothLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        gsap.to(target, {duration:2.5, fontStyle: 'italic', ease: "power3.in", y: -250, color: '#666'});

    });

    link.addEventListener('mouseleave', function() {
        gsap.to(target, {duration: 2.5, fontStyle: 'normal', ease: "power3.in", y: -250, color: 'blue'});
    });
  });
});
