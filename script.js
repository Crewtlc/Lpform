document.getElementById('trainForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const submitButton = document.querySelector('button[type="submit"]');

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;

    const cmsId = document.getElementById('cmsId').value;
    const lpName = document.getElementById('lpName').value;
    const hq = document.getElementById('hq').value;
    const trainNo = document.getElementById('trainNo').value;
    const locoNo = document.getElementById('locoNo').value;
    const signOnDateTime = document.getElementById('signOnDateTime').value;
    const currentStation = document.getElementById('currentStation').value;

    // Display the submitted data
    document.getElementById('result').innerHTML = `
        <p>CMS-ID: ${cmsId}</p>
        <p>Name of the LP: ${lpName}</p>
        <p>HQ: ${hq}</p>
        <p>Train No: ${trainNo}</p>
        <p>Loco No: ${locoNo}</p>
        <p>Sign On Date and Time: ${signOnDateTime}</p>
        <p>Current Station: ${currentStation}</p>
    `;

    // Optional: Re-enable the button after some time if necessary
    setTimeout(() => {
        submitButton.disabled = false;
    }, 5000); // Re-enable button after 3 seconds (optional)
});
