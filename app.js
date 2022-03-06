// select element
const element = (selector) => {
    return document.querySelector(selector)
}
let productName = element('#product-name')
let prductPrice = element('#product-price')

// click event function
const saveDataToLocalStr = () => {
    let products = element('#products');
    products.innerHTML = "";
    let data = getItem();
    data[productName.value] = prductPrice.value;
    let dataConvert = JSON.stringify(data);
    localStorage.setItem('product', dataConvert);
    displyToUI(data);

    productName.value = "";
    prductPrice.value = "";

}

// display poduct in UI 
const displyToUI = (data) => {
    let products = element('#products');
    console.log(data);
    for (const key in data) {
        console.log(key, data[key]);

        let li = document.createElement("li");
        li.innerText = `${key} : ${data[key]}`;
        products.appendChild(li)

    }

}


// get data 
const getItem = () => {
    let prdct = localStorage.getItem('product');
    let productObj;
    if (prdct) {
        productObj = JSON.parse(prdct);
    } else {
        productObj = {}
    }
    return productObj;
}

// display poduct form local store 
const displayItemFromLocalStr = () => {
    let cart = getItem();
    displyToUI(cart);
}

displayItemFromLocalStr();

const deleteData = () => {
    localStorage.removeItem('product');
    element('#products').innerHTML = "";
}

