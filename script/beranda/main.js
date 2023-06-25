window.addEventListener('DOMContentLoaded', function() {
    var mainImage = document.getElementById('photoPost');
    
    if (window.innerWidth <= 769) {
      mainImage.innerHTML = '<i class="bi bi-images"></i>';
    }
  });
  
