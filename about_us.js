function show_menu_items(){
    document.getElementById("show_menu_overlay").style.display="block";
}

function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
}


//關於我們 的內容（左邊）
var introduction =[
    {
        img:'https://images.pexels.com/photos/4552170/pexels-photo-4552170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content:` <p style="padding-top:10px ;">糖露坊，位於新竹市糖果大道，是一個甜點愛好者的夢幻之地。我們的甜品店成立於民國100年，一直以來致力於為顧客提供最美味的糖點和甜點體驗。</p>
        
        
        <p>無論您是來自新竹還是其他地方，我們都歡迎您來糖露坊，一同享受繽紛的甜點和溫馨的環境。我們期待在未來的每一天，都為您帶來更多的驚喜和甜蜜回憶。</p>
        `
    }
]
for (var i=0; i < introduction.length; i++){
    var info=
    `<img src="${introduction[i].img}" class="info_img">
    <div class="info_content">${introduction[i].content}</div>     
    `;
    $('#introduction').append(info);
}

//關於我們 的內容(右邊)
var aboutConent =[
    {
        id:1,
        title:'品味的奇妙旅程',
        content:'走進糖露坊，您將被迷人的糖果色調和甜美的糕點香氣所包圍。我們的糕點師傅精心研發每一款甜品，以追求完美的口感和味道。無論是多層蛋糕、香醇巧克力、還是水果優格杯，每一道甜點都是品味的奇妙旅程。'
    }
    ,
    {
        id:2,
        title:'糖露坊的特色',
        content:`創意無限：我們引以為傲的是我們的創意。糖露坊的菜單總是充滿新意，不斷推陳出新，總有令人驚喜的驚喜等待著您。<br>
        夢幻彩虹：我們總是相信，彩虹的顏色代表著生活的美好。因此，您將在我們的甜點中找到各種彩虹色調，讓您的味蕾和視覺都享受到繽紛的盛宴。<br>
        新竹之愛：我們熱愛新竹，也將這份愛融入到我們的甜點中。我們使用當地的新鮮水果和優質的食材，讓您品味到新竹的美味。`
    }
    ,{
        id:3,
        title:'社區參與和未來計畫',
        content:`在糖露坊，我們深信社區參與的重要性。我們定期舉辦甜點工作坊，讓大家有機會親手製作美味的糖點，並分享甜蜜的時光。此外，我們計劃在未來擴展我們的糖露坊，開設更多分店，讓更多人品味到我們的美味。`
    }
]

for (var i = 0; i < aboutConent.length; i++) {
    var content =
        `<div class="title">${aboutConent[i].title}</div>
        <div class="content">${aboutConent[i].content}</div>`;
    $('#content').append(content);
}