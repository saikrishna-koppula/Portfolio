 // Get modal elements
 const projectsModalContainer = document.getElementById('projectsModalContainer');
 const projectsShowMoreBtn = document.getElementById('projectsShowMoreBtn');
 const projectsCloseBtn = document.getElementById('projectsCloseBtn');

 // Show the modal when the button is clicked
 projectsShowMoreBtn.onclick = function () {
     projectsModalContainer.style.display = 'flex'; // Show the modal with flexbox
     document.body.classList.add('no-scroll'); // Prevent scrolling on the body
 }

 // Close the modal when the close button is clicked
 projectsCloseBtn.onclick = function () {
     projectsModalContainer.style.display = 'none'; // Hide the modal
     document.body.classList.remove('no-scroll'); // Allow scrolling on the body
 }

 // Optional: Close modal when clicking outside of the modal content
 window.onclick = function (event) {
     if (event.target === projectsModalContainer) {
         projectsModalContainer.style.display = 'none'; // Hide the modal
         document.body.classList.remove('no-scroll'); // Allow scrolling on the body
     }
 }