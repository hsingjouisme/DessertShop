var cartItemsContainer = document.getElementById("cartList");
var cart = JSON.parse(localStorage.getItem("cart")) || []; // 讀取購物籃中的商品資訊
var cartItems = {};
var totalPrice = 0; 

// 顯示購物籃內容
function displayCartItems() {

    var sweetDessertsButton = document.createElement("button");
    sweetDessertsButton.textContent = "back to MENU";
    sweetDessertsButton.className = 'dessertBtn';
    sweetDessertsButton.onclick = function() {
        window.location.href = "menu.html";
    };

    if (cart.length === 0) {

        var emptyCartMessage = document.createElement("p");
        emptyCartMessage.textContent = "您的購物籃目前沒有東西喔! 快去逛逛吧:)";
        cartItemsContainer.appendChild(emptyCartMessage);

        cartItemsContainer.appendChild(sweetDessertsButton);
        
        return;
    }

    // 將購物籃中商品及其數量存儲在物件中
    cart.forEach(function(item) {
        if (!cartItems[item.title]) {
            cartItems[item.title] = {
                product: item,
                quantity: 1
            };
        } else {
            cartItems[item.title].quantity++;
        }
    });

    // 清空購物籃內容
    cartItemsContainer.innerHTML = '';

    // 顯示每個商品及其數量
    for (var itemName in cartItems) {
        var item = cartItems[itemName].product;
        var quantity = cartItems[itemName].quantity;

        var itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <div class="product">
                <img src="${item.image}">
                <div class='productItem'>${item.title}</div>
                <div class='productItem'>$${item.price}</div>
                <div class='productItem'> 
                    <div class='decrease' onclick="decreaseQuantity('${item.title}')">-</div>
                    <span class="quantity">${quantity}</span>
                    <div class="add" onclick="addQuantity('${item.title}')">+</div>
                </div>
                <div class='productItem'>$${item.price * quantity}</div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        // 累加計算總價
        totalPrice += item.price * quantity;
    }

    // 顯示總價
    var totalElement = document.createElement("p");
    totalElement.textContent = "總金額：$" + totalPrice;
    totalElement.id = "totalPrice"; 

    var totalPriceContainer = document.getElementById("totalPriceContainer");
    totalPriceContainer.innerHTML = ""; 
    totalPriceContainer.appendChild(totalElement); 
    cartItemsContainer.appendChild(sweetDessertsButton);


}

//使用者動態調整數量
function decreaseQuantity(itemName) {
    if (cartItems[itemName]) {
        cartItems[itemName].quantity--; 

        // 更新數量狀況
        var quantityElement = document.querySelector(`.cart-item[data-item="${itemName}"] .quantity`);
        if (quantityElement) {
            quantityElement.textContent = cartItems[itemName].quantity;
        }

        // 更新總金額
        totalPrice -= cartItems[itemName].product.price;
        var totalElement = document.getElementById("totalPrice");
        if (totalElement) {
            totalElement.textContent = "總金額：$" + totalPrice;
        }

        // 商品數量小於0的時候，刪除該商品
        if (cartItems[itemName].quantity === 0) {
            delete cartItems[itemName];
            
            var itemElement = document.querySelector(`.cart-item[data-item="${itemName}"]`);
            if (itemElement) {
                itemElement.remove();
            }
        }

        // 購物籃內商品都刪除後，顯示「您的購物籃目前沒有東西喔! 快去逛逛吧:)」
        if (Object.keys(cartItems).length === 0) {
            var emptyCartMessage = document.createElement("p");
            emptyCartMessage.textContent = "您的購物籃目前沒有東西喔! 快去逛逛吧:)";
            cartItemsContainer.appendChild(emptyCartMessage);

            var totalPriceContainer = document.getElementById("totalPriceContainer");
            totalPriceContainer.innerHTML = ""; 
        }
    }
}

function addQuantity(itemName) {
    if (cartItems[itemName]) {
        cartItems[itemName].quantity++; // 增加商品數量
        

        // 更新數量狀況
        var quantityElement = document.querySelector(`.cart-item[data-item="${itemName}"] .quantity`);
        if (quantityElement) {
            quantityElement.textContent = cartItems[itemName].quantity;
        }

        // 更新總金額
        totalPrice += cartItems[itemName].product.price;
        var totalElement = document.getElementById("totalPrice");
        if (totalElement) {
            totalElement.textContent = "總金額：$" + totalPrice;
        }

        // 更新 localStorage 中的購物籃數據
        localStorage.setItem("cart", JSON.stringify(Object.values(cartItems).map(item => item.product)));

    }
}










// 在頁面載入時顯示購物籃內容
window.onload = function() {
    displayCartItems();
};
