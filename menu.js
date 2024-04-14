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

//甜點的menu
function showDessertMenu() {
    var button = document.getElementById("dessertMenu");
    var menu = document.getElementById("dessertMenuBtn");
    var bgcolor = document.getElementById('dessertMenuLayout'); 
    var overlay = document.getElementById("overlay");   
    if (button.innerHTML === "CLOSE") {
        button.innerHTML = "MENU";
        menu.style.display = "none"; 
        bgcolor.style.backgroundColor='transparent';
        overlay.style.display = "none"; 
    } else {
        button.innerHTML = "CLOSE";
        menu.style.display = "block"; 
        bgcolor.style.backgroundColor='snow';
        overlay.style.display = "block"; 
        
    }
}

//商品資訊
var dessertItems = [
    {
        id:1,
        title:'港式月餅',
        image:'https://images.pexels.com/photos/9863598/pexels-photo-9863598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'香滑蓮蓉，酥皮融合，港式月餅，一口幸福滋味。',
        price:50,
        category:'新上市'
    },
    {
        id:2,
        title:'鳳凰酥',
        image:'https://images.pexels.com/photos/9593945/pexels-photo-9593945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'金黃鳳凰，黃金內餡，咬一口，滿口香甜，絕對上癮！',
        price:48,
        category:'新上市'
    },
    {
        id:3,
        title:'巧音甜蜜樂章',
        image:'https://images.pexels.com/photos/3740196/pexels-photo-3740196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'美味的巧克力蛋糕，每一層都滿載著濃郁的巧克力口感。',
        price:35,
        category:['人氣商品', '蛋糕']
    },
    {
        id:4,
        title:'莓果夢露杯',
        image:'https://images.pexels.com/photos/11981166/pexels-photo-11981166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'草莓奶油杯，夢幻滋味，仙境口感與色彩盡在一口。',
        price:42,
        category:'人氣商品'
    },
    {
        id:5,
        title:'莓巧悅',
        image:'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'結合新鮮莓果和濃郁巧克力，帶來極致甜蜜。',
        price:420,
        category:['人氣商品', '蛋糕']
    }
    ,{
        id:6,
        title:'糖露仙女蛋糕',
        image:'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'粉紅夢幻風味，為您帶來甜美愉悅的口感饗宴。',
        price:580,
        category:'蛋糕'
    }
    ,{
        id:7,
        title:'水果蛋糕',
        image:'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'新鮮新鮮櫻桃與巧克力的搭配，帶給你甜而不膩的享受！',
        price:550,
        category:'蛋糕',
        
    },
    {
        id:8,
        title:'經典巧克力蛋糕',
        image:'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'濃郁巧克力風味，絲滑口感，每一口都是甜蜜的享受，散發著經典的誘人魅力。',
        price:500,
        category:'蛋糕'
    },
    {
        id:9,
        title:'翠綠抹茶邦德',
        image:'https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'品味和平衡交織，翠綠抹茶邦德融合濃郁抹茶風味，帶來甜蜜的優雅享受。',
        price:450,
        category:'蛋糕'
    },
    {
        id:10,
        title:'櫻桃百利甜塔派',
        image:'https://images.pexels.com/photos/5419040/pexels-photo-5419040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'擁有多層酥皮、濃郁百利甜餡和新鮮櫻桃的經典法式塔派。',
        price:120,
        category:'塔派類'
    },
    {
        id:11,
        title:'草莓塔',
        image:'https://images.pexels.com/photos/9403582/pexels-photo-9403582.jpeg',
        description:'奶香草莓塔，濃情味美，香脆塔皮，一試難忘的甜蜜誘人。',
        price:60,
        category:'塔派類'
    },
    {
        id:12,
        title:'抹茶拿鐵',
        image:'https://images.pexels.com/photos/4552171/pexels-photo-4552171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'綠茶抹茶融合成的濃郁拿鐵，帶來茶香和咖啡的完美平衡。',
        price:75,
        category:'飲料'
    },
    {
        id:13,
        title:'水果優格杯',
        image:'https://images.pexels.com/photos/4841828/pexels-photo-4841828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'新鮮水果、優格、蜂蜜，健康選擇，美味兼具營養。',
        price:45,
        category:'其他'
    },
    {
        id:14,
        title:'夢幻雲朵鬆餅',
        image:'https://images.pexels.com/photos/67024/pexels-photo-67024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'蓬鬆鬆餅，奶油果醬交融，柔滑香甜，每一口都是絕妙的雲朵般美味享受，賦予味蕾無窮陶醉。',
        price:42,
        category:'其他'
    },
    {
        id:15,
        title:'經典馬卡龍',
        image:'https://images.pexels.com/photos/586830/pexels-photo-586830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'令人心動的多彩馬卡龍，每一口都是繽紛嘉年華的饗宴。',
        price:42,
        category:'其他'
    }
    ,{
        id:16,
        title:'拿鐵',
        image:'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'慵懶享受，濃郁拿鐵。',
        price:50,
        category:'飲料'
    },{
        id:17,
        title:'美式',
        image:'https://images.pexels.com/photos/7578179/pexels-photo-7578179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'純粹享受，美式風情。',
        price:35,
        category:'飲料'
    }
    ,{
        id:18,
        title:'水果派',
        image:'https://images.pexels.com/photos/1157835/pexels-photo-1157835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'豐富多彩的口味饗宴，每一口都是驚喜。',
        price:75,
        category:'塔派類'
    }
    ,{
        id:19,
        title:'珍珠奶茶',
        image:'https://images.pexels.com/photos/6412830/pexels-photo-6412830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description:'香醇的奶香與茶香完美結合，珍珠入口滑順，口感饱滿，每一口都帶來濃郁的奶茶風味。',
        price:50,
        category:'飲料'
    }
]

for (var i = 0; i < dessertItems.length; i++) {
    if(dessertItems[i].category==='新上市'){
        var dessertInformation = `
            <div class="dessert">
                <img src="${dessertItems[i].image}" class="dessertImg">
                <div class="dessert_title">${dessertItems[i].title}</div>
                <p>${dessertItems[i].description}</p>
                <p>＄${dessertItems[i].price}</p>
                <button class="button add_btn" data-index="${i}">加入購物籃</button>
            </div>`;
        $('#newest').append(dessertInformation);
    }
    if (dessertItems[i].category.includes('人氣商品')){
        var dessertInformation = `
            <div class="dessert">
            <img src="${dessertItems[i].image}" class="dessertImg">
                <div class="dessert_title">${dessertItems[i].title}</div>
                <p>${dessertItems[i].description}</p>
                <p>＄${dessertItems[i].price}</p>
                <button class="button add_btn" data-index="${i}">加入購物籃</button>
            </div>`;
        $('#popular').append(dessertInformation);
    }
    if (dessertItems[i].category.includes('蛋糕')){
        var dessertInformation = `
            <div class="dessert">
            <img src="${dessertItems[i].image}" class="dessertImg">
                <div class="dessert_title">${dessertItems[i].title}</div>
                <p>${dessertItems[i].description}</p>
                <p>＄${dessertItems[i].price}</p>
                <button class="button add_btn" data-index="${i}">加入購物籃</button>
            </div>`;
        $('#cake').append(dessertInformation);
    }
    else if(dessertItems[i].category==='塔派類'){
        var dessertInformation = `
            <div class="dessert">
            <img src="${dessertItems[i].image}" class="dessertImg">
                <div class="dessert_title">${dessertItems[i].title}</div>
                <p>${dessertItems[i].description}</p>
                <p>＄${dessertItems[i].price}</p>
                <button class="button add_btn" data-index="${i}">加入購物籃</button>
            </div>`;
        $('#tart').append(dessertInformation);
    } 
    else if(dessertItems[i].category==='飲料'){
        var dessertInformation = `
            <div class="dessert">
            <img src="${dessertItems[i].image}" class="dessertImg">
                <div class="dessert_title">${dessertItems[i].title}</div>
                <p>${dessertItems[i].description}</p>
                <p>＄${dessertItems[i].price}</p>
                <button class="button add_btn" data-index="${i}">加入購物籃</button>
            </div>`;
        $('#drink').append(dessertInformation);
    } 
    else{
        var dessertInformation = `
            <div class="dessert">
            <img src="${dessertItems[i].image}" class="dessertImg">
                <div class="dessert_title">${dessertItems[i].title}</div>
                <p>${dessertItems[i].description}</p>
                <p>＄${dessertItems[i].price}</p>
                <button class="button add_btn" data-index="${i}">加入購物籃</button>
            </div>`;
        $('#other').append(dessertInformation);
    } 
}

var cartCount = localStorage.getItem('cartCount') || 0;
var countElement = document.getElementById('cartCount');
countElement.textContent = cartCount;

var addButtons = document.querySelectorAll('.add_btn');

addButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var index = this.getAttribute('data-index'); 
        addToCart(dessertItems[index]); // 將商品添加到購物籃中
        cartCount++; 
        countElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount);      
    });
});

function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem("cart")) || []; // 確保取得購物籃內容
    cart.push(product); // 將商品加入購物籃
    localStorage.setItem("cart", JSON.stringify(cart)); // 將更新後的購物籃存回 localStorage
}
