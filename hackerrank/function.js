function factorial(n) {
  let fact = n;
  if (n > 1)
    for (let i = n - 1; i >= 1; i--)
      fact *= i;
  return fact;
}

console.log(factorial(4))