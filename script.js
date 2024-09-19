const scriptURL = 'https://script.google.com/macros/s/AKfycbzuwd6-28tsBLr54oMBdjREG1CePacIS8Ua4n9rT1zsDybBQFNQApUpjBRbf5hK5K56Fg/exec'

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
