let i, j;
pattern = "";
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0) {
      pattern += " ";
    } else {
      pattern += "#";
    }
  }
  pattern += "\n";
}
console.log(pattern);
