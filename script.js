document.addEventListener('DOMContentLoaded', function() {
  const smoothLinks = document.querySelectorAll('.smooth-link');

  smoothLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      gsap.to(link, {duration: 0.5, fontStyle: 'italic', color: '#666'});
    });

    link.addEventListener('mouseleave', function() {
      gsap.to(link, {duration: 0.5, fontStyle: 'normal', color: '#333'});
    });
  });
});
