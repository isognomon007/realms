// Preload Background Images
function preloadBackgrounds() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'backgrounds.css';
  
    document.head.appendChild(link);
  }
  
  // Call the preloadBackgrounds function when the index page is loaded
  window.addEventListener('load', preloadBackgrounds);
  