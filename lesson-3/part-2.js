let i = 0;
do {
    if (i == 0) console.log(`${i} - это ноль`)
    else if ((i % 2) == 0) console.log(`${i} - это четное`)
    else console.log(`${i} - это нечетное`)
    i++;
} while (i <= 10)