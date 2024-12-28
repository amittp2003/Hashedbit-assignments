function sumOfProductsOfDigits(n1, n2) {
    // Convert numbers to strings and pad with zeros if necessary
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    // Make both strings equal length by padding with zeros
    const maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    
    let sum = 0;
    
    // Calculate product of corresponding digits and sum them
    for (let i = 0; i < maxLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    
    return sum;
}