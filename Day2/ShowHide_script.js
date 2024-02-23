const toggleButton = document.getElementById('toggleButton');
const myDiv = document.getElementById('myDiv');

toggleButton.addEventListener('click', function() {
  
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
});
