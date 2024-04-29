document.addEventListener('DOMContentLoaded', function() {
  const smoothLinks = document.querySelectorAll('.smooth-link');

  smoothLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      link.classList.add('italic');
    });

    link.addEventListener('mouseleave', function() {
      link.classList.remove('italic');
    });
  });
});
