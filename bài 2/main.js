function numberTriangle(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        document.writeln("*");
      }
      document.writeln("<br>");
    }
  }

  numberTriangle(prompt())
