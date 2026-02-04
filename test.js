function summn(f,m) {
    let sum = 0;
    for (let i of m) {
        for (let j of f) {
            if (i % j == 0) {
                sum += i;
                break;
            }
        }
    }
    return sum
}
console.log(summn([2,3], [4, 5, 6, 7, 8, 9]))
function calculate() {
    // Get input values
    const factorsInput = document.getElementById("factors").value;
    const multiplesInput = document.getElementById("multiples").value;

    // Convert string → number array
    const factors = factorsInput.split(",").map(Number);
    const multiples = multiplesInput.split(",").map(Number);

    // Calculate sum
    const result = summn(factors, multiples);

    // Show output
    document.getElementById("result").textContent =
        "Result: " + result;
}
alert("sum");
