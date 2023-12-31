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


  ///////////////////////////////////////////////////////////////////////////////////////
/*
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
var backpackItem2 = createBackpackItem('https://lh3.google.com/u/6/d/1BkvSarSc1XXyjkpFEBBBSqy2MrbW7kIF=w2682-h1224-iv1', 'This is your backpack item 2.');

navElement.appendChild(backpackItem1);
navElement.appendChild(backpackItem2);
contentElement.appendChild(navElement);

*/

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
 /*
  var navElement = document.getElementById('nav');
  navElement.style.display = 'block';
*/
 // Show the items element:
 //var itemsElement = document.getElementById('items');
 //itemsElement.style.display = 'block';

  // Clear the session
  function clearSession() {
    sessionStorage.clear();
    var button = document.getElementById('clear');
    button.style.display='none'; // Hide the button
    sessionStorage.clear();
    console.log('Session cleared!');
    window.location.href = '/realms/'; // Redirect to the root directory index page
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


  /////////////////////////////////////
  // Fetch HTML content from bag.html
  /////////////////////////////////////
  fetch('/realms/bag.html')
  .then(response => response.text())
  .then(html => {
    // Create a temporary container element
    const container = document.createElement('div');
    container.innerHTML = html;

    // Extract the desired content from the source page
    const extractedContent = container.querySelector('#items');

    // Insert the extracted content into the target page
    const targetContainer = document.getElementById('content');
    targetContainer.appendChild(extractedContent);
  })
  .catch(error => {
    console.error('Error fetching HTML:', error);
  });
  /////////////////////////////////////

} // End Checks if backpack button has been clicked

//////////////////////////////////////////////////////////////////////////////////////////

// Add event listener to the backpack button (used to set session)
var backpackButton = document.getElementById('backpack');
if (backpackButton) {
  backpackButton.addEventListener('click', handleBackpackClick);
}

//////////////////////////////////////////////////////////////////////////////////////////

// Reset button
function startOver() {
  // Clear the session
  sessionStorage.clear();
  // Redirect to a specific URL
  window.location.href = '/realms';
}



