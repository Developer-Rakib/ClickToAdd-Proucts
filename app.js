// select element
const element = (selector) => {
    return document.querySelector(selector)
}
let productName = element('#product-name')
let prductPrice = element('#product-price')

// click event function
const saveDataToLocalStr = () => {
    if (productName.value == "" || prductPrice.value == "") {
        return;
    }
    if (isNaN(productName.value) == false || isNaN(prductPrice.value) == true) {
        alert("enter valid input");
    } else {
        let products = element('#products');
        products.innerHTML = "";
        let data = getItem();
        data[productName.value] = prductPrice.value;
        let dataConvert = JSON.stringify(data);
        localStorage.setItem('product', dataConvert);
        displyToUI();
    }

    productName.value = "";
    prductPrice.value = "";

}

// display poduct in UI 
const displyToUI = () => {
    let data = getItem();
    let products = element('#products');
    for (const key in data) {
        let li = document.createElement("li");
        li.innerText = `${key}, Price : ${data[key]}`;
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
displyToUI();

// // display poduct form local store 
// const displayItemFromLocalStr = () => {
//     let cart = getItem();
//     displyToUI(cart);
// }

// displayItemFromLocalStr();


const deleteData = () => {
    localStorage.removeItem('product');
    element('#products').innerHTML = "";
}

