function sum(a, b) {
  sessionStorage.setItem('sum', a + b);
  return a + b;
}
export default sum;
