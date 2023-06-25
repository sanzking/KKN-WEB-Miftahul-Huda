window.addEventListener('DOMContentLoaded', function() {
    var headerImage = document.getElementById('headerImage');
    
    if (window.innerWidth <= 769) {
      headerImage.src = 'images/image-header-mobile.jpg';
    }
  });
  