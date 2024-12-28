function findTax(salary) {
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
    return {
        salary: salary,
        taxRate: `${taxRate * 100}%`,
        taxAmount: taxAmount,
        netSalary: salary - taxAmount
    };
}
