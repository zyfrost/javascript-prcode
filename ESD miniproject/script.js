const locationsList = document.getElementById('locations-list');

// Fetch tourist locations from the Flask API
fetch('/places')
  .then(response => response.json())
  .then(locations => {
    locations.forEach(location => {
      // Create a list item for each location
      const listItem = document.createElement('li');
      listItem.className = 'location-item';

      // Populate the list item with location details
      listItem.innerHTML = `
        <h3>${location.name}</h3>
        <p><strong>Description:</strong> ${location.description}</p>
        <p><strong>Location:</strong> ${location.location}</p>
      `;

      // Add the list item to the locations list
      locationsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error:', error));
