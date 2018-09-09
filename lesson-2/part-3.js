let a, b;
a = 1;
b = -2;

if ((a >= 0) && (b >= 0)) {
    console.log("Разность");
    console.log(a - b);
} else if ((a < 0) && (b < 0)) {
    console.log("Произведение");
    console.log(a * b);
} else {
    console.log("Сумма");
    console.log(a + b);
}