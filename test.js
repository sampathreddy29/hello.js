<!DOCTYPE html>
<html>
<head>
  <title>Sum of multiples</title>
</head>
<body>

<h3>Enter values</h3>

<label>Factors (comma separated):</label><br>
<input type="text" id="factors" placeholder="2,3"><br><br>

<label>Multiples (comma separated):</label><br>
<input type="text" id="multiples" placeholder="4,5,6,7,8,9"><br><br>

<button onclick="calculate()">Calculate</button>

<script>
function summ(f, m) {
  let sum = 0;

  for (let i of m) {
    for (let j of f) {
      if (i % j === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}

function calculate() {
  const factorsInput = document.getElementById("factors").value;
  const multiplesInput = document.getElementById("multiples").value;

  const f = factorsInput.split(',').map(Number);
  const m = multiplesInput.split(',').map(Number);

  let result = summ(f, m);

  alert("Result is: " + result);
}
</script>

</body>
</html>
