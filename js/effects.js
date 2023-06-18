// shake effect on index page
window.addEventListener('DOMContentLoaded', () => {
   const container = document.querySelector('.container.shaky');
  container.classList.add('shake');
  });

  function shiftBackground(direction) {
   var body = document.body;
   var currentPosition = body.style.backgroundPosition;
   var positionX = 0; // Initial X position
   var positionY = 0; // Initial Y position
 
   // Parse the current position values
   var matches = currentPosition.match(/(-?\d+)px (-?\d+)px/);
   if (matches && matches.length === 3) {
     positionX = parseInt(matches[1]);
     positionY = parseInt(matches[2]);
   }
 
   // Adjust the position based on the direction
   if (direction === 'up') {
     positionY -= 100; // Shift up by 10 pixels
   } else if (direction === 'down') {
     positionY += 100; // Shift down by 10 pixels
   } else if (direction === 'left') {
     positionX -= 100; // Shift left by 10 pixels
   } else if (direction === 'right') {
     positionX += 100; // Shift right by 10 pixels
   }
 
   // Set the new background position
   body.style.backgroundPosition = positionX + 'px ' + positionY + 'px';
 }
 