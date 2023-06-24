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

/////////// EVERYTHING BELOW IS BACKPACK RELATED ///////////

// Create the backpack object
var backpack = document.createElement('div');
backpack.id = 'backpack';
backpack.innerHTML = '<a href="#" onclick="toggleOverlay();"><img src="https://lh3.google.com/u/6/d/1BkvSarSc1XXyjkpFEBBBSqy2MrbW7kIF=w2682-h1224-iv1" alt="Backpack"></a>';

// Append the backpack object to the #nav element
var navElement = document.getElementById('nav');
navElement.appendChild(backpack);

// Function to toggle the overlay
function toggleOverlay() {
  var overlay = document.getElementById('overlay');
  
  if (overlay) {
    overlay.remove();
  } else {
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.innerHTML = '<div class="overlay-content"><p>This is your backpack.</p></div>';
    
    overlay.addEventListener('click', function() {
      overlay.remove();
    });
    
    document.body.appendChild(overlay);
  }
}


  
  