
let count = document.querySelector(".count");
let modalProduct = document.querySelector(".modal-product");


function updateProduct() {
    modalProduct.innerHTML = kardArray.map((item) => {
        return `
            <div class="modal-main"> 
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.price}</p>
                </div>
                <img src="${item.image}" alt="">
            </div>
        `;
    }).join("");
}


function updateCount () {
    count.innerHTML = kardArray.length
}


function addToKard (id) {
    let findProduct = products.find((x) => x.id == id);
    if (findProduct) {
        kardArray.push(findProduct);
        updateCount();
        updateProduct();
    }
}

let kard = document.querySelector("#kard");
let modal = document.querySelector(".modal");

let closeBtn = document.getElementById("close");
let modalBtn = document.querySelector(".modal-btn");


function openModal() {
    modal.style.display = "block";
}

kard.onclick = openModal;

function closeModal() {
    modal.style.display = "none";
}
modalBtn.onclick = closeModal;

function clearKard () {
    kardArray = [] 
    updateCount() 
    updateProduct() 
}
modalBtn.onclick = clearKard;


function closeModal() {
    modal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
}
closeBtn.onclick = closeModal;



let NEW = "https://dummyjson.com/products";
let result = document.querySelector(".result");
let kardArray = [];  // Корзинадагы товарлар

async function getProduct() {
    try {
        const res = await fetch(NEW);
        const data = await res.json();

        console.log(data);

        comeProduct(data.products);
    } catch (error) {
        console.log(error);
        result.innerHTML = "Not found";
    }
}

getProduct();

function comeProduct(data) {
    result.innerHTML = data.map((item) => {
        return `
            <div class="card" data-id="${item.id}">
                <img src="${item.thumbnail}" />
                <div class="btns">
                    <button class="btn" onclick="addToCart(${item.id})">ADD TO CART</button>
                </div>
                <div class="p">
                    <p>${item.brand}</p>
                    <p class="p1">${item.category}</p>
                    <p>${item.price}</p>
                </div>
            </div>`;
    }).join("");
}


function addToCart(id) {
    
    let findProduct = kardArray.find((x) => x.id === id);

    if (!findProduct) {
        let product = document.querySelector(`.card[data-id="${id}"]`);  
        let title = product.querySelector(".p").children[0].textContent; 
        let price = product.querySelector(".p").children[2].textContent; 
        let image = product.querySelector("img").src;

        let newProduct = { id, title, price, image }; 
        kardArray.push(newProduct);
        
    } 
    updateCart();  
}


function updateCart() {
//    корзинадагы товар жаныртуу
    const count = kardArray.length;
    document.querySelector(".count").textContent = count;
    
  
    const modalProduct = document.querySelector(".modal-product");
    modalProduct.innerHTML = kardArray.map((item) => {
        return `
            <div class="modal-main"> 
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.price}</p>
                </div>
                <img src="${item.image}" alt="">
            </div>`;
    }).join("");
}
