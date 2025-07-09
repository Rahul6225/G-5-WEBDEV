console.log("Hello World");

async function GetData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data); 
    const cart = document.getElementById('container');
    cart.innerHTML = "Hello world";
}

GetData();
