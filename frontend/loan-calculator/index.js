// Monthly Payment= (1−(1+Monthly Interest Rate) −Number of Payments) /(Total Loan ×Monthly Interest Rate)

// Monthly Interest Rate = Annual Interest Rate / 12
// Number of Payments = Loan Tenure in years * 12
document.getElementById("loan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input
  const totalLoan = parseFloat(document.getElementById("total-loan").value);
  const annualInterest = parseFloat(
    document.getElementById("annual-interest").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  // Calculate monthly payment
  const monthlyInterestRate = annualInterest / 12 / 100;
  const numberOfPayments = tenure * 12;
  const monthlyPayment =
    (totalLoan * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  // Display result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Monthly Loan Amount: $${monthlyPayment.toFixed(
    2
  )}`;
});
