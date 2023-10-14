// Function to handle the "Like" button click
function like() {
    // Get the like count element
    const likeCountElement = document.getElementById("likeCount");

    // Extract the current like count
    const currentLikes = parseInt(likeCountElement.innerText);

    // Increment the like count
    const newLikes = currentLikes + 1;

    // Update the like count element with the new count
    likeCountElement.innerText = `${newLikes} like(s)`;
}
