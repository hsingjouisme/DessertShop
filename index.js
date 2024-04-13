function show_menu_items(){
    document.getElementById("show_menu_overlay").style.display="block";
}

function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
}

//popular
var popularItem =[
    {
        title:'莓果夢露杯',
        content:'草莓奶油杯，夢幻滋味，仙境口感與色彩盡在一口。',
        img:'https://images.pexels.com/photos/11981166/pexels-photo-11981166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'menu.html#popular'
    },
    {
        title:'巧音甜蜜樂章',
        content:'美味的巧克力蛋糕，每一層都滿載著濃郁的巧克力口感。',
        img:'https://images.pexels.com/photos/3740196/pexels-photo-3740196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'menu.html#popular'
    },
    {
        title:'莓巧悅',
        content:'結合新鮮莓果和濃郁巧克力，帶來極致甜蜜。',
        img:'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'menu.html#popular'
    }
]
for(var i=0;i<popularItem.length;i++){
    var popular=
    `<a href="${popularItem[i].target}" class='target'>
    <div class="popularItem" data-aos="fade-up">
    <img class="popular_img" src="${popularItem[i].img}">
    <h4 class="popular_title">${popularItem[i].title}</h4>
    <div>${popularItem[i].content}</div>
    </div>
    </a>
    `;
    $('#popularLayout').append(popular)
}

//News
var newsItem =[
    {
        title:'2023-10-20：新店資訊',
        img:'https://images.pexels.com/photos/6161503/pexels-photo-6161503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'news.html#div_1'
    },
    {
        title:'2023-10-30：開設甜點教室',
        img:'https://images.pexels.com/photos/6061396/pexels-photo-6061396.jpeg',
        target:'news.html#div_2'
    },
    {
        title:'2023-11-02：產學合作',
        img:'https://images.pexels.com/photos/6061848/pexels-photo-6061848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'news.html#div_3'
    },
    {
        title:'2023-11-10：新品上市！',
        img:'https://images.pexels.com/photos/5650634/pexels-photo-5650634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'news.html#div_4'
    },
    {
        title:'2023-11-25：團隊規模再擴大',
        img:'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'news.html#div_5'
    },
    {
        title:' 2024-1-02：經典甜點回歸！',
        img:'https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        target:'news.html#div_6'
    },
]

for(var i=0;i< newsItem.length; i++){
    var news=`
    <div class="news" data-aos="fade-down">
        <a href="${newsItem[i].target}"><img class="news_img" src="${newsItem[i].img}"></a>
        
        <div class="img_text">${newsItem[i].title}</div>
    </div>    
    `;
    $('#newsItem').append(news)
}