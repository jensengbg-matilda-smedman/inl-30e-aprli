/* Show all products */
function showInfo(items) {
    let productItems = document.querySelector('#productItems');

    for(item of items) {    
        let itemElem = document.createElement('div');
        itemElem.classList.add('item');
        itemElem.innerHTML +=
            '<p>Name: ' + item.Name + '</p>' + 
            '<p>Price: ' + item.Price + '</p>' + 
            '<p>Size: ' + item.Size + '</p>' + 
            '<img src="'+ item.imgUrl +'">' + 
            '<button class="addButton" value='+ item.id +'>Buy!</button>';
        
        productItems.append(itemElem);
    }
    addToCart();
}

async function getProducts() {
    const url = 'http://localhost:3000/products';
    const response = await fetch(url, {method: 'GET'});
    const data = await response.json();
    showInfo(data);
}

getProducts();


/* Add product to cart */
async function addItem(id) {
    console.log(id);
    const url = `http://localhost:3000/products/addItem/${id}`;
    const response = await fetch(url, {method: 'POST'});
    const data = await response.json();
}

function addToCart() {
    let addButton = document.querySelectorAll('.addButton'); 
    
    for(let i = 0; i < addButton.length; i++) {
        addButton[i].addEventListener('click', () => {
            addItem(addButton[i].value);
        });
    }
}