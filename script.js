var products = ["item1", "item2", "item3"];
var prices = [100, 200, 300];

//  read

function readProducts() {
    products.forEach(function (item, i) {
        console.log("item: " + " => " + (i+1))
        console.log("price: " + " => " + prices[i])
    });
}
readProducts();

// add

function addProduct() {
    var product = prompt("enter product name");
    var price = prompt("enter product price");

   console.log(products.push(product));
   console.log(prices.push(price));
}

addProduct()

// delete

function removepruduct() {
    var index = +prompt("enter product number")

    console.log(products.splice(index, 1));
    console.log(prices.splice(index, 1));
}

removepruduct()

// update 

function updateproduct() {
    var index = +prompt("enter product number");
    var newProduct = +prompt("enter new product name");
    var newPrice = +prompt("enter new product price");

    console.log(products[index] = newProduct);
    console.log(prices[index] = newPrice);
}

updateproduct();