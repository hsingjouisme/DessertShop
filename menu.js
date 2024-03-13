    function show_menu_items(){
        document.getElementById("show_menu_overlay").style.display="block";
    }

    function off_menu_overlay(){
        document.getElementById("show_menu_overlay").style.display="none";
    } 

//點選dessert_menu_btn，可以跳到指定位置，且不會被上方menu擋住 
function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    var dessert_menu_layout_height = document.getElementById('dessert_menu_layout').offsetHeight;

    if (targetSection) {
        // 調整滾動位置，減去 dessert_menu_layout的高度
        window.scroll({
        top: targetSection.offsetTop - dessert_menu_layout_height,
        behavior: 'smooth'
        });
    }
}


//在購物籃icon顯示現在購物籃總數量

const productButtons = document.querySelectorAll('.add_btn');
const cartCountDisplay = document.getElementById('cartCount');

function addToCart(itemName, price) {
    let num = parseInt(cartCountDisplay.innerText);
    num++;
    cartCountDisplay.innerText = num;
}

productButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.dataset.itemName;
        const price = parseInt(this.dataset.price);
        localStorage.removeItem('cartCount'); // 清除本地存儲的購物籃數量
    });
});

window.onload = function() {
    cartCountDisplay.innerText = 0; // 在網頁加載時重置購物籃數量為0
};

