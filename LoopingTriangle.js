let i, j;
let pattern = "";
for (i = 0; i < 7; i++) {
  for (j = 0; j <= i; j++) {
    pattern += "#";
  }
  pattern += "\n";
}
console.log(pattern);
