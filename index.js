function show_menu_items(){
    document.getElementById("show_menu_overlay").style.display="block";
}

function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
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
    <div class="news">
        <a href="${newsItem[i].target}"><img class="news_img" src="${newsItem[i].img}"></a>
        
        <div class="img_text">${newsItem[i].title}</div>
    </div>    
    `;
    $('#newsItem').append(news)
}