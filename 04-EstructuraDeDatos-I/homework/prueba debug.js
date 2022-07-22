
function nFactorial(n) {
  if (n==0 || n==1) return 1
  else if (n < 0) return 0;
  else return n * nFactorial(n-1);
}

nFactorial(6);