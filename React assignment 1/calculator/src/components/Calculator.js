import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculate = (operation) => {
    // Clear previous errors
    setError('');
    
    // Validate inputs
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers');
      return;
    }
    
    // Perform calculation
    switch (operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          return;
        }
        setResult(number1 / number2);
        break;
      default:
        setError('Invalid operation');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Calculator</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => calculate('+')}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            +
          </button>
          <button
            onClick={() => calculate('-')}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            -
          </button>
          <button
            onClick={() => calculate('*')}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ×
          </button>
          <button
            onClick={() => calculate('/')}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ÷
          </button>
        </div>

        {error && (
          <div className="p-2 text-red-500 text-center">
            {error}
          </div>
        )}
        
        {result !== null && !error && (
          <div className="mt-4 p-4 bg-gray-50 rounded text-center">
            <span className="text-lg font-semibold">Result: </span>
            <span className="text-lg text-blue-600">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}