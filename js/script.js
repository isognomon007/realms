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
    buttonTag.disabled = true; // Disable the current button
  }
});

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////  NAVIGATION  ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

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




////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////  COUNTER  ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Function to handle the backpack button click event (this happens once on click)
function handleBackpackClick() {
  // Set the flag in sessionStorage to indicate the button was clicked
  sessionStorage.setItem('backpackClicked', 'true');
}

//////////////////////////////////////////////////////////////////////////////////////////
// If BACKPACK button was clicked in a previous session:
//////////////////////////////////////////////////////////////////////////////////////////
if (sessionStorage.getItem('backpackClicked')) {
  // Show a message indicating that the button was clicked
  console.log('Backpack button was clicked.');

 // Show the 'nav' element:
  var navElement = document.getElementById('nav');
  navElement.style.display = 'block';

  // Clear the session
  function clearSession() {
    sessionStorage.clear();
    var button = document.getElementById('clear');
    button.style.display='none'; // Hide the button
    sessionStorage.clear();
    console.log('Session cleared!');
  }
}
//////////////////////////////////////////////////////////////////////////////////////////

// Checks if backpack button has been clicked:
if (sessionStorage.getItem('backpackClicked')) {
  // Create "clearsession" div
  var divClear = document.createElement('div');
  divClear.id = 'clearsession';

  // Create "clear" button 
  var button = document.createElement('button');
  button.id = 'clear';
  button.textContent = 'Clear Session';
  button.onclick = clearSession;

  // Append button to div
  divClear.appendChild(button);

  // Append divClear to body
  document.body.appendChild(divClear);
}

//////////////////////////////////////////////////////////////////////////////////////////

// Add event listener to the backpack button
var backpackButton = document.getElementById('backpack');
if (backpackButton) {
  backpackButton.addEventListener('click', handleBackpackClick);
}

//////////////////////////////////////////////////////////////////////////////////////////
function startOver() {
  // Clear the session
  sessionStorage.clear();
  
  // Redirect to a specific URL
  window.location.href = '/realms';
}

///// testing:

// Fetch HTML content from a specific page - try this after it's working again, this is the HTML fetch code
 fetch('/realms/bag.html')
  .then(response => response.text())
  .then(html => {
    // Create a temporary container element
    const container = document.createElement('div');
    container.innerHTML = html;

    // Extract the desired content from the source page
    const extractedContent = container.querySelector('#content-to-extract');

    // Insert the extracted content into the target page
    const targetContainer = document.getElementById('nav');
    targetContainer.appendChild(extractedContent);
  })
  .catch(error => {
    console.error('Error fetching HTML:', error);
  });

  //
  
