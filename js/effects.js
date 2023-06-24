// Shake Effect 
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container.shaky');
  if (container && container.classList.contains('shaky')) {
    container.classList.add('shake');
  }
});


  //Shift BG
  function shiftBackground(direction) {
   var body = document.body;
   var currentPosition = body.style.backgroundPosition;
   var positionX = 0; // Initial X position
   var positionY = 0; // Initial Y position
   var shiftAmount = 10; // Amount to shift in pixels
 
   // Parse the current position values
   var matches = currentPosition.match(/(-?\d+)px (-?\d+)px/);
   if (matches && matches.length === 3) {
     positionX = parseInt(matches[1]);
     positionY = parseInt(matches[2]);
   }
 
   // Adjust the position based on the direction
   if (direction === 'up') {
     positionY = Math.max(positionY - shiftAmount, -window.innerHeight); // Stop at the top edge
   } else if (direction === 'down') {
     positionY = Math.min(positionY + shiftAmount, 0); // Stop at the bottom edge
   } else if (direction === 'left') {
     positionX = Math.max(positionX - shiftAmount, -window.innerWidth); // Stop at the left edge
   } else if (direction === 'right') {
     positionX = Math.min(positionX + shiftAmount, 0); // Stop at the right edge
   }
 
   // Set the new background position
   body.style.backgroundPosition = positionX + 'px ' + positionY + 'px';
 }
 