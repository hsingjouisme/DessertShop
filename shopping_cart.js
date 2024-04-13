// 顯示購物籃內容
function displayCartItems() {
    var cartItemsContainer = document.getElementById("cartList");
    var cart = JSON.parse(localStorage.getItem("cart")) || []; // 讀取購物籃中的商品資訊
    var cartItems = {};
    var totalPrice = 0; // 初始化總價為 0

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "您的購物籃目前沒有東西喔！快去逛逛吧:)";
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
                <div class='productItem'> ${quantity}</div>
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

}

// 在頁面載入時顯示購物籃內容
window.onload = function() {
    displayCartItems();
};
