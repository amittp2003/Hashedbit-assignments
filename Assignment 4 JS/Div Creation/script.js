function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');
    
    // Set the width and height with 'px' unit
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    
    // Set the text content
    newDiv.textContent = text;
    
    // Get the container div
    const container = document.getElementById('container');
    
    // Append the new div to the container
    container.appendChild(newDiv);
}
createDiv(100, 50, "Hello World");