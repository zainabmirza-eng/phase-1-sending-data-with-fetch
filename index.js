function submitData(name, email) {
    // Define the URL to which the request will be sent
    const url = 'http://localhost:3000/users';
    
    // Create the request body as an object and then stringify it
    const requestBody = JSON.stringify({
        name: name,
        email: email
    });

    // Use the fetch API to make the POST request
    return fetch(url, {
        method: 'POST', // Specify the request method
        headers: {
            'Content-Type': 'application/json', // Specify the content type of the request
            'Accept': 'application/json' // Specify the type of response expected
        },
        body: requestBody // Include the request body
    })
    .then(response => {
        // Check if the response status indicates success (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        console.log('Success:', data); // Log the response data

        // Find the new ID and append it to the DOM
        const newId = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Log any errors

        // Append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}