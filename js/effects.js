// shake effect on index page
//window.addEventListener('DOMContentLoaded', () => {
//   const container = document.querySelector('.container');
//   container.classList.add('shake');
//  });

// shake and redirect effect on button
  function shakePageAndRedirect() {
    const container = document.querySelector('.container');
    container.classList.add('shake');
  
    // Remove the shake class after a short delay
    setTimeout(() => {
      container.classList.remove('shake');
      
      // Redirect to the next page
      window.location.href = "next-page.html";
    }, 1000);
  }
  
  // Get the button element
  const button = document.getElementById('path1');
  
  // Add a click event listener to the button
  button.addEventListener('click', shakePageAndRedirect);
  
  setTimeout(function() {
    window.location.href = "./grove1.html"; // Replace with the desired URL for the redirect
  }, 1000); // Increase the delay to 1000 milliseconds (1 second)
  