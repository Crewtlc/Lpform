const scriptURL = 'https://script.google.com/macros/s/AKfycbzy3eKUOgHlx32MDoyk6Jk_yyfGSKhFU6UpQymqf9i7KjsytJpRyM2dTgDFiKoZoqwAVw/exec'

const form = document.forms['lpForm']

form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the default form submission

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    alert("Thank you! Your form is submitted successfully.");
    window.location.reload();  // Reload the page after form submission
  })
  .catch(error => console.error('Error!', error.message));
});
