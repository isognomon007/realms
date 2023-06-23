// Preload Background Images
function preloadBackgrounds() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'backgrounds.css';
  
    document.head.appendChild(link);
  }
  
  // Call the preloadBackgrounds function when the index page is loaded
  window.addEventListener('load', preloadBackgrounds);

  // Injects Navigation div
  var divNav = document.createElement('div');
  divNav.id = 'nav';
  
  var link = document.createElement('a');
  link.href = 'https://isognomon007.github.io/realms';
  link.textContent = 'Home';
  
  divNav.appendChild(link);
  document.body.appendChild(divNav);
  
  