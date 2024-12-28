// 1. Display even numbers from 1 to 100
function displayEvenNumbers() {
    console.log("\n=== Test 1: Even Numbers from 1 to 100 ===");
    let evenNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    console.log("First 5 numbers:", evenNumbers.slice(0, 5));
    console.log("Last 5 numbers:", evenNumbers.slice(-5));
    console.log("Total even numbers found:", evenNumbers.length);
    return evenNumbers;
}

// 2. Calculator function using switch
function calculate(num1, num2, operation) {
    console.log(`\n=== Test 2: Calculator (${num1} ${operation} ${num2}) ===`);
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation";
    }
    console.log("Result:", result);
    return result;
}

// 3. Tax calculation function
function findTax(salary) {
    console.log(`\n=== Test 3: Tax Calculation for salary ${salary} ===`);
    let taxRate;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            return "Invalid salary amount";
    }
    
    const taxAmount = salary * taxRate;
    const result = {
        salary: salary,
        taxRate: `${taxRate * 100}%`,
        taxAmount: taxAmount,
        netSalary: salary - taxAmount
    };
    console.log("Tax Details:", result);
    return result;
}

// 4. Sum of products of corresponding digits
function sumOfProductsOfDigits(n1, n2) {
    console.log(`\n=== Test 4: Sum of Products (${n1}, ${n2}) ===`);
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    const maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    
    let sum = 0;
    console.log("Step by step calculation:");
    
    for (let i = 0; i < maxLength; i++) {
        const product = parseInt(str1[i]) * parseInt(str2[i]);
        sum += product;
        console.log(`${str1[i]} × ${str2[i]} = ${product}`);
    }
    
    console.log("Final sum:", sum);
    return sum;
}

// Run all tests
console.log("RUNNING ALL TESTS");
console.log("=================");

// Test 1: Even Numbers
displayEvenNumbers();

// Test 2: Calculator
calculate(10, 5, 'add');
calculate(10, 5, 'subtract');
calculate(10, 5, 'multiply');
calculate(10, 5, 'divide');
calculate(10, 0, 'divide'); // Test division by zero

// Test 3: Tax Calculator
findTax(400000);  // Should be 0% tax
findTax(750000);  // Should be 10% tax
findTax(1200000); // Should be 20% tax
findTax(2000000); // Should be 30% tax

// Test 4: Sum of Products
sumOfProductsOfDigits(6, 34);     // Should be 24 (6×4 + 0×3)
sumOfProductsOfDigits(234, 456);  // Should be 32 (2×4 + 3×5 + 4×6)