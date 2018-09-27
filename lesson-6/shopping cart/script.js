var catalog = {
    items: [
        {
            id: '0',
            name: 'cheese',
            price: 145,
            src: 'img/cheese.png'
        },
        {
            id: '1',
            name: 'tomato',
            price: 50,
            src: 'img/tomato.png'
        },
        {
            id: '2',
            name: 'potato',
            price: 30,
            src: 'img/potato.png'
        },
        {
            id: '3',
            name: 'onion',
            price: 25,
            src: 'img/onion.png'
        }
    ],
    render: function() {
        for (let i = 0; i < this.items.length; i++) {
            let product = this.items[i];
            let section = document.createElement('section');
            let name = product.name;
            let price = product.price;
            section.innerHTML = '<span>Product name: ' + name + '<br>'
                + 'Price: ' + price;
            section.id = name;

            document.body.appendChild(section);

            let input = document.createElement('input');
            input.type = 'button';
            input.value = 'Add to cart';
            input.id = name + '-input';

            input.addEventListener('click', function() {
                cart.addProduct(product);
            });

            section.appendChild(input);
        }
    }
};

var cart = {
    items: [],
    totalPrice: 0,
    totalAmount: 0,
    addProduct: function(product) {
        console.log(product);
        this.items.push(product);
        this.calculate();
        this.render();
    },
    calculate: function() {
        this.totalAmount = 0;
        this.totalPrice = 0;

        for (let i = 0; i < this.items.length; i++) {
            this.totalPrice += this.items[i].price;
            ++this.totalAmount;
        }
    },
    render: function() {
        var element = document.getElementById('total-price');

        element.innerHTML = this.totalPrice;
    }
};

window.addEventListener('load', function() {
    catalog.render();
});