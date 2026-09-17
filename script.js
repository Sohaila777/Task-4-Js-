let products = ["Product 1", "Product 2", "Product 3", "Product 4"];
let price = [100, 200, 300, 400];

// read

function displayProducts() {
  console.clear();
  if (products.length === 0) {
    alert("No Products Yet!");
  } else {
    products.forEach(function (el, index) {
      (console.log(index + 1 + " => " + "Product Name: " + el),
        console.log("Product price: " + price[index]));
    });
  }
}

// add

function addNewProduct() {
  let newProduct = prompt("enter new product name");
  let newPrice = +prompt("enter new product price");
  products.push(newProduct);
  price.push(newPrice);

  displayProducts();
}

// update

function updateProduct() {
  let productIndex = +prompt("enter product to update");
  let productUpdated = prompt("enter new product name to update");
  let productPriceUpdated = +prompt("enter new product price");

  products.splice(productIndex - 1, 1, productUpdated);
  price.splice(productIndex - 1, 1, productPriceUpdated);
  displayProducts();
}

// delete

function deleteProduct() {
  let productIndex = prompt("enter product to delete");
  products.splice(productIndex - 1, 1);
  displayProducts();
}

// reset

function deleteAllProducts() {
  products.splice(0, products.length);
  displayProducts();
}
