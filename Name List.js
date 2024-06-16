let names = []; // Initialize an empty array to store names

// Function to handle the addition of names
function addName() {
    const name = document.getElementById('nameInput').value.trim(); // Get and trim then spaces from the input value
    if (name) {
        names.push(name); // Add name to the array
        names.sort(); // Sort names in ascending order
        // Display names as a list
        document.getElementById('nameList').innerHTML = names.join('<br>');
    }
    document.getElementById('nameInput').value = ''; // Clear the input field
}
