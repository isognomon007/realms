// Preload Background Images
function preloadImagesFromCSS(cssUrl) {
  fetch(cssUrl)
    .then(response => response.text())
    .then(cssText => {
      const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g;
      const imageUrls = cssText.match(urlRegex);

      if (imageUrls) {
        imageUrls.forEach(imageUrl => {
          const url = imageUrl.match(/url\(['"]?([^'")]+)['"]?\)/)[1];
          const image = new Image();
          image.src = url;
        });
      }
    })
    .catch(error => {
      console.error(`Failed to preload images from CSS: ${error}`);
    });
}

// Call the preloadImagesFromCSS function with your CSS file URL
preloadImagesFromCSS('https://isognomon007.github.io/realms/css/backgrounds.css');

  
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

/////////// EVERYTHING BELOW IS NAV RELATED ///////////

// Function to create a new backpack item
function createBackpackItem(imageSrc, overlayText) {
  var backpackItem = document.createElement('div');
  backpackItem.classList.add('backpack-item');
  
  var imageLink = document.createElement('a');
  imageLink.href = '#';
  imageLink.addEventListener('click', function() {
    toggleOverlay(overlayText);
  });
  
  var image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Backpack Item';
  
  imageLink.appendChild(image);
  backpackItem.appendChild(imageLink);
  
  return backpackItem;
}

// Function to toggle the overlay
function toggleOverlay(overlayText) {
  var overlay = document.getElementById('overlay');
  
  if (overlay) {
    overlay.remove();
  } else {
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    
    var overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay-content');
    
    var overlayTextElement = document.createElement('p');
    overlayTextElement.textContent = overlayText;
    
    overlayContent.appendChild(overlayTextElement);
    overlay.appendChild(overlayContent);
    
    overlay.addEventListener('click', function() {
      overlay.remove();
    });
    
    document.body.appendChild(overlay);
  }
}

// Append the backpack items to the #nav element within the #content element
var contentElement = document.getElementById('content');
var navElement = document.createElement('div');
navElement.id = 'nav';

var backpackItem1 = createBackpackItem('https://lh3.google.com/u/6/d/1BkvSarSc1XXyjkpFEBBBSqy2MrbW7kIF=w2682-h1224-iv1', 'This is your backpack item 1.');
// var backpackItem2 = createBackpackItem('https://example.com/path/to/image2.jpg', 'This is your backpack item 2.');

navElement.appendChild(backpackItem1);
navElement.appendChild(backpackItem2);
contentElement.appendChild(navElement);
