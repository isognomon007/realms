// Preload Background Images
function preloadBackgrounds() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'backgrounds.css';
  
    document.head.appendChild(link);
  }
  
  // Call the preloadBackgrounds function when the index page is loaded
  window.addEventListener('load', preloadBackgrounds);
  
// Bypass CDN
const username = 'isognomon007';
const repository = 'realms';
//const branch = 'main';
//const filePath = 'path/to/file.css';
const rawURL = `https://raw.githubusercontent.com/${username}/${repository}/`;
