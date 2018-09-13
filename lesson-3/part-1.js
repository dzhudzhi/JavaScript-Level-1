let i = 2;
while (i <= 100) {
    console.log(i++);
    for (j = 2; j <= i; j++) {
        if (i == j) console.log(i)
        if ((i % j) == 0) break;
    }
}