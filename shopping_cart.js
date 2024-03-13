window.onload = function() {


     // 總金額的 CSS 樣式調整
     var totalPriceElement = document.createElement('div');
     totalPriceElement.textContent = '總金額：$' + totalPrice;
     totalPriceElement.style.lineHeight='80px';
     totalPriceElement.style.textAlign='right';
     totalPriceElement.style.fontSize='20px';
     totalPriceElement.style.color='brown';
     cartList.appendChild(totalPriceElement);
};
