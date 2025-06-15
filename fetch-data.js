// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container where data will be shown
  const dataContainer = document.getElementById('api-data');

  // Step 4: Use try-catch for data fetching
  try {
    const response = await fetch(apiUrl); // Fetch data
    const users = await response.json();  // Parse JSON

    // Step 5: Clear any existing/loading message
    dataContainer.innerHTML = '';

    // Step 6: Create and populate the list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 7: Add list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 8: Handle any errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// Step 9: Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);