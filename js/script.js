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

  // Checks for buttons without an onclick event and adds a class:
  // Select all <button> tags on the page
  var buttonTags = document.querySelectorAll('button');

  // Iterate over the <button> tags
  buttonTags.forEach(function(buttonTag) {
    // Check if the onclick attribute is missing or empty
    if (!buttonTag.getAttribute('onclick')) {
      buttonTag.classList.add('inactive');
      button.disabled = true;
    }
  });

  
  