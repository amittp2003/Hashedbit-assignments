// Get references to all DOM elements
const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeBtn = document.getElementById('colorchange');
const fontSizeSlider = document.getElementById('fontsize');
const italicBtn = document.getElementById('italic');
const underlineBtn = document.getElementById('underline');
const boldBtn = document.getElementById('bold');
const fontList = document.getElementById('list');
const getStyleBtn = document.getElementById('getstyle');
const cssProps = document.getElementById('css-props');

// Color change button click handler
colorChangeBtn.addEventListener('click', () => {
    const color = colorBox.value;
    textContainer.style.color = color;
});

// Font size slider change handler
fontSizeSlider.addEventListener('input', () => {
    textContainer.style.fontSize = fontSizeSlider.value + 'px';
});

// Style buttons click handlers
italicBtn.addEventListener('click', () => {
    textContainer.style.fontStyle = 
        textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

underlineBtn.addEventListener('click', () => {
    textContainer.style.textDecoration = 
        textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

boldBtn.addEventListener('click', () => {
    textContainer.style.fontWeight = 
        textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Font family change handler
fontList.addEventListener('change', () => {
    textContainer.style.fontFamily = fontList.value;
});

// Get CSS properties button handler
getStyleBtn.addEventListener('click', () => {
    let cssText = '';
    
    // Color
    if (textContainer.style.color) {
        cssText += `color: ${textContainer.style.color}; `;
    }
    
    // Font size
    if (textContainer.style.fontSize) {
        cssText += `font-size: ${textContainer.style.fontSize}; `;
    }
    
    // Font family
    if (textContainer.style.fontFamily) {
        cssText += `font-family: ${textContainer.style.fontFamily}; `;
    }
    
    // Text decoration (underline)
    if (textContainer.style.textDecoration === 'underline') {
        cssText += 'text-decoration: underline; ';
    }
    
    // Font style (italic)
    if (textContainer.style.fontStyle === 'italic') {
        cssText += 'font-style: italic; ';
    }
    
    // Font weight (bold)
    if (textContainer.style.fontWeight === 'bold') {
        cssText += 'font-weight: bold; ';
    }
    
    // Display CSS properties
    cssProps.textContent = cssText.trim();
});