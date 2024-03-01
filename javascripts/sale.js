
const priceElement = document.getElementById('product');
const numberElement = document.getElementById('number');
let purchases = [];

const products = [
    {
        id: 1,
        name: "Mezcla original 200 g ¥ 500",
        price: 500,
    },
    {
        id: 2,
        name: "Mezcla original 500 g ¥ 900",
        price: 900,
    },
    {
        id: 3,
        name: "Mezcla especial 200 g ¥ 700",
        price: 700,
    },
    {
        id: 4,
        name: "Mezcla especial 500 g, 1.200 yenes",
        price: 1200,
    },

];

function calc() {
    let sum = subtotal();
    let shippingFee = calcPostageForPurchase(sum);

    window.alert(`${display()}\nEl subtotal es: ${sum}\nEl coste de envío es de: ${shippingFee} yenes.\nEl total es de: ${sum + shippingFee} yenes`);

    purchases = [];
    priceElement.value = '';
    numberElement.value = '';
}

function calcPostageForPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 2000) {
        return 500;
    } else {
        return 250;
    }

}

function add() {
    const productId = parseInt(priceElement.value)
    const product = products.find(item => item.id == productId);
    const number = parseInt(numberElement.value);

    let purchase = {
        product,
        number
    }
   
    const existingPurchase = purchases.find(item => item.product.id === purchase.product.id);

    if (existingPurchase) {
        existingPurchase.number += number;
    } else {
        purchases.push(purchase);
    }

    window.alert(`\n${display()}\nsubtotal ${subtotal()} yenes`)

}

function subtotal() {
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.product.price * purchase.number;
    }, 0);
}

function display() {
    return purchases.map(purchase => {
        return `${purchase.product.name} yenes por ${purchase.number} items`
    }).join('\n')
    
}