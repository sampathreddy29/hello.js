function summ(f, m) {
  let sum = 0;

  for (let i of m) {
    for (let j of f) {
      if (!isNaN(i) && !isNaN(j) && j !== 0 && i % j === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}

function calculate() {
  let f = document.getElementById("factors").value
            .split(',')
            .map(x => Number(x.trim()));

  let m = document.getElementById("multiples").value
            .split(',')
            .map(x => Number(x.trim()));

  let result = summ(f, m);

  alert("Result is: " + result);
}
