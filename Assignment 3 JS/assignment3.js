// Q1: Remove states starting with vowels
function filterStates() {
    console.log("\n=== Q1: Filter States ===");
    const states = ["Andhra Pradesh", "Bihar", "Gujarat", "Odisha", "Kerala", "Maharashtra", "Uttar Pradesh"];
    const filteredStates = states.filter(state => !/^[aeiouAEIOU]/.test(state));
    console.log("Original states:", states);
    console.log("States without vowel start:", filteredStates);
    return filteredStates;
}

// Q2: Reverse words in string
function reverseWords(str) {
    console.log("\n=== Q2: Reverse Words ===");
    const result = str.split(' ').reverse().join(' ');
    console.log("Original string:", str);
    console.log("Reversed words:", result);
    return result;
}

// Q3: String manipulation using splice
function modifyString(str) {
    console.log("\n=== Q3: Modify String ===");
    const arr = str.split('');
    arr.splice(3, 0, 'ONE');
    arr.splice(5, 0, 'SIA');
    console.log("Original string:", str);
    console.log("Modified string:", arr.join(''));
    return arr.join('');
}

// Q4: Count consonants and vowels
function countLetters(str) {
    console.log("\n=== Q4: Count Letters ===");
    const vowels = str.toLowerCase().match(/[aeiou]/g) || [];
    const consonants = str.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g) || [];
    console.log("String:", str);
    console.log("Vowels:", vowels.length, "Consonants:", consonants.length);
    return { vowels: vowels.length, consonants: consonants.length };
}

// Q5: Replace words in sentence
function correctWord(string, wrong, correct) {
    console.log("\n=== Q5: Replace Words ===");
    const result = string.replace(wrong, correct);
    console.log("Original:", string);
    console.log("Replaced:", result);
    return result;
}

// Q6: Filter numbers greater than 5
function filterNumbers(arr) {
    console.log("\n=== Q6: Filter Numbers ===");
    const result = arr.filter(num => num > 5);
    console.log("Original array:", arr);
    console.log("Numbers > 5:", result);
    return result;
}

// Q7: Calculate student averages
function calculateAverages(students) {
    console.log("\n=== Q7: Student Averages ===");
    const result = students.map(student => ({
        name: student.name,
        average: Math.round(student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length)
    }));
    console.log("Result:", result);
    return result;
}

// Q8: Repeated sum of digits
function sumDigitsUntilSingle(num) {
    console.log("\n=== Q8: Sum Digits ===");
    let result = num;
    while (result > 9) {
        result = String(result).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    console.log("Number:", num, "Final digit:", result);
    return result;
}

// Q9: Count words in paragraph
function countWords(paragraph) {
    console.log("\n=== Q9: Count Words ===");
    const wordCount = paragraph.trim().split(/\s+/).length;
    console.log("Paragraph:", paragraph);
    console.log("Word count:", wordCount);
    return wordCount;
}

// Q10: Reverse string
function reverseString(str) {
    console.log("\n=== Q10: Reverse String ===");
    const result = str.split('').reverse().join('');
    console.log("Original:", str, "Reversed:", result);
    return result;
}

// Q11: Calculate student subject averages
function calculateSubjectAverages(students) {
    console.log("\n=== Q11: Subject Averages ===");
    const result = Object.entries(students).map(([key, value]) => ({
        [key]: {
            average: Math.round(
                Object.values(value).reduce((acc, curr) => acc + curr, 0) / 
                Object.keys(value).length
            )
        }
    }));
    console.log("Result:", result);
    return result;
}

// Run all tests
console.log("RUNNING ALL TESTS");
console.log("=================");

// Test Q1
filterStates();

// Test Q2
reverseWords("I love my India");

// Test Q3
modifyString("INDIA");

// Test Q4
countLetters("This is a test string with many characters");

// Test Q5
correctWord("I love programing", "programing", "programming");

// Test Q6
filterNumbers([1,2,3,9,10,7,5,4,3]);

// Test Q7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];
calculateAverages(students);

// Test Q8
sumDigitsUntilSingle(456);

// Test Q9
countWords("This is a sample paragraph that contains multiple words for testing.");

// Test Q10
reverseString("Hello");

// Test Q11
const studentSubjects = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
calculateSubjectAverages(studentSubjects);