var cartItemsContainer = document.getElementById("cartList");
var cart = JSON.parse(localStorage.getItem("cart")) || []; // 讀取購物籃中的商品資訊
var cartItems = {};
var totalPrice = 0; 
var cartCount = localStorage.getItem('cartCount') || 0; //讀取localStorage裡面的購物籃商品總數

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

    if (quantity > 0) {
        var itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <div class="product">
                <img src="${item.image}">
                <div class='productItem'>${item.title}</div>
                <div class='productItem'>$${item.price}</div>
                <div class='productItem'> 
                    <div class='decrease' onclick="decreaseQuantity('${item.title}')">-</div>
                    <span class="quantity" id="quantity_${itemName}">${quantity}</span>
                    <div class="add" onclick="addQuantity('${item.title}')">+</div>
                </div>
                <div class='productItem' id="itemTotal_${itemName}">$${item.price * quantity}</div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        // 累加計算總價
        totalPrice += item.price * quantity;
    } else {
        // 如果商品數量為零，則從 DOM 中移除相應的 HTML 元素
        var itemElementToRemove = document.getElementById(`cartItem_${itemName}`);
        if (itemElementToRemove) {
            itemElementToRemove.parentNode.removeChild(itemElementToRemove);
        }
    }
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
        // 確保商品數量不會小於等於零
        if (cartItems[itemName].quantity > 1) {
            cartItems[itemName].quantity--; // 減少商品數量
        } else {
            // 如果數量為1，則從購物籃中刪除該品項
            delete cartItems[itemName];
            // 從 DOM 中移除相應的 HTML 元素
            var itemElementToRemove = document.getElementById(`cartItem_${itemName}`);
            if (itemElementToRemove) {
                itemElementToRemove.parentNode.removeChild(itemElementToRemove);
            }
        }

        // 更新本地存儲
        localStorage.setItem("cart", JSON.stringify(Object.values(cartItems).map(item => item.product)));

        // 更新數量狀況
        var quantityElement = document.getElementById(`quantity_${itemName}`);
        if (quantityElement) {
            quantityElement.textContent = cartItems[itemName] ? cartItems[itemName].quantity : 0;
            updateCartCount();
        }

        // 更新單品價格
        var itemTotalElement = document.getElementById(`itemTotal_${itemName}`);
        if (itemTotalElement) {
            // 當商品數量為0時，將單品價格設置為0
            itemTotalElement.textContent = cartItems[itemName] ? `$${cartItems[itemName].product.price * cartItems[itemName].quantity}` : '$0';
        }

        // 更新總金額
        updateTotalPrice();
    }
}

function addQuantity(itemName) {
    if (cartItems[itemName]) {
        cartItems[itemName].quantity++; // 增加商品數量

        // 更新本地存儲
        localStorage.setItem("cart", JSON.stringify(Object.values(cartItems).map(item => item.product)));

        // 更新數量狀況
        var quantityElement = document.getElementById(`quantity_${itemName}`);
        if (quantityElement) {
            quantityElement.textContent = cartItems[itemName].quantity;
            updateCartCount();
        }

        // 更新單品價格
        var itemTotalElement = document.getElementById(`itemTotal_${itemName}`);
        if (itemTotalElement) {
            itemTotalElement.textContent = `$${cartItems[itemName].product.price * cartItems[itemName].quantity}`;
        }

        // 更新總金額
        updateTotalPrice();
    }
}


//更新總金額
function updateTotalPrice() {
    totalPrice = 0;
    for (var itemName in cartItems) {
        totalPrice += cartItems[itemName].product.price * cartItems[itemName].quantity;
    }
    // 確保總金額不會為負值
    if (totalPrice < 0) {
        totalPrice = 0;
    }
    var totalElement = document.getElementById("totalPrice");
    if (totalElement) {
        totalElement.textContent = "總金額：$" + totalPrice;
    }
}

// 在頁面載入時顯示購物籃內容
window.onload = function() {
    displayCartItems();
};


function updateCartCount() {
    var totalQuantity = 0;
    for (var itemName in cartItems) {
        totalQuantity += cartItems[itemName].quantity;
    }

    var cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalQuantity;
    }

    localStorage.setItem('cartCount', totalQuantity);
}