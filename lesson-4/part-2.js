let basket = [
    {
        name: "Холодильник", 
        price:100, 
        quantity: 3
    },
    {
        name: "Телевизор", 
        price:200, 
        quantity: 2
    },
    {
        name: "Пылесос", 
        price:150, 
        quantity: 4
    }
];

function countBasketPrice(basket) {
    return basket.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}

console.log(countBasketPrice(basket));