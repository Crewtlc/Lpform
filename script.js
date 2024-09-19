const scriptURL = 'https://script.google.com/macros/s/AKfycbxF_AIxLav2H_5PUgpdYBL-LVAtdfJVscV0IDjn68pGU8KJ-T2ElLxBATtGVJVTbT4J/exec'
const form = document.forms['lpForm']

form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the default form submission

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    alert("Your details have been recorded, and you will be relieved soon.");
    window.location.reload();  // Reload the page after form submission
  })
  .catch(error => console.error('Error!', error.message));
});
