function show_menu_items(){
    document.getElementById("show_menu_overlay").style.display="block";
}

function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
}

//最新消息資訊
var newsInfo= [
    {
        id:1,
        title:'2023-10-20：新店資訊',
        image:'https://images.pexels.com/photos/6161503/pexels-photo-6161503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content:`即將開設新分店！我們非常興奮地宣布，糖露坊將擴展我們的美味甜點天地，即將在北區開設一家全新的分店。這個令人期待的擴張將讓更多人品嚐到我們獨特的甜點和美味點心。無論您是喜歡精緻蛋糕、口感豐富的鬆軟餅乾還是口味多樣的杯子蛋糕，我們將繼續為您提供最高品質和美味的選擇。
        在新分店的開幕之前，我們將為您準備一個驚喜，更多關於新店的詳細信息即將公布。請持續關注我們的官方網站和社交媒體平台，以確保您不會錯過任何重要消息。我們衷心感謝您的支持，並期待在新分店見面，與您一同分享糖露坊的美味和熱情。不久的將來，我們將在北區的某個角落與您相聚，為您帶來更多美味的瞬間！`

    },{
        id:2,
        title:'2023-10-30：開設甜點教室',
        image:'https://images.pexels.com/photos/6061396/pexels-photo-6061396.jpeg',
        content:`糖露坊為您帶來甜點教室！我們一直以來都致力於為您提供最美味、最精緻的甜點體驗，現在，我們想與您分享更多。我們引以為傲的糕點師傅們將開設甜點教室，讓您深入了解甜點的世界。
        <br>
        在我們的甜點教室中，您將有機會學習到如何創造精湛的蛋糕、曲奇餅乾、杯子蛋糕以及各種美味點心。不論您是否是一位經驗豐富的廚師，或者完全沒有烹飪經驗，我們的課程都適合所有水平的參與者。
        <br>
        我們將提供專業的指導，讓您掌握甜點製作的技巧和訣竅。您將有機會親手製作各種口味和風格的甜點，並在一個愉快的環境中與其他甜點愛好者交流分享。無論是想要為特殊場合自製甜點，還是純粹出於對烹飪的熱愛，我們的甜點教室將為您打開一扇美味的大門。
        <p>請密切關注我們的官方網站和社交媒體，以獲取有關甜點教室課程、時間表和報名信息的更新。我們迫不及待地期待著與您一起探索糖露坊的甜點魔法，並一同創造甜蜜的回憶！</p>`

    },
    {
        id:3,
        title:'2023-11-02：產學合作',
        image:'https://images.pexels.com/photos/6061848/pexels-photo-6061848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content:`糖露坊與當地高中展開合作計劃！我們將支持年輕廚師的培訓，並為學生提供甜點藝術的機會。這個合作計劃旨在培養新一代的烘焙與糕點大師，並激發年輕學生對烹飪和糕點製作的熱情。<br>
    
        在糖露坊，我們深知糕點藝術的獨特之處，以及它在培養創造力和烹飪技能方面的重要性。因此，我們將開設專門的烘焙課程，向學生們傳授製作精緻蛋糕、杯子蛋糕、曲奇餅乾和各種甜點的秘訣和技巧。學生們將有機會親自動手，參與糕點的製作過程，並與我們的專業糕點師傅互動學習。<br>

        我們相信這個合作將為年輕一代提供一個獨特的學習機會，幫助他們培養創造力、領導力和烹飪技能。同時，糖露坊也將為學生們提供實踐經驗和展示他們創作的機會。我們期待著與當地高中的合作，共同營造美味、創意和激情的烘焙世界。讓我們一起探索、創造，為未來的糕點烹飪帶來更多的甜蜜時光！<br>`

    }
    ,
    {
        id:4,
        title:'2023-11-10：新品上市！',
        image:'https://images.pexels.com/photos/5650634/pexels-photo-5650634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content:`全新秋之夢系列即將上市啦！這個系列將帶給大家滿滿秋天的美味，不管是在晨光中、還是在夜晚的星光下，都能成為你親近的好朋友。我們特別推薦搭配一杯熱奶茶，讓那溫暖的茶香與秋日微涼的氣氛完美結合。這一系列的點心將帶給你難忘的秋日味覺體驗，讓你陶醉在深秋的浪漫氛圍中。<br>
    
        無論你是愛濃郁巧克力、順口的焦糖，還是堅果的熱情，我們的秋之夢系列絕對能滿足你的味蕾。每一口都像是一個秋天的故事，充滿了這個季節特有的風味。<br><br>

        請緊盯我們的官方網站和門市，以獲得更多有關秋之夢系列的詳情和上市日期。我們迫不及待要和大家一起迎接這個美麗的秋天，讓糖露坊的獨特烘焙魔法為你的秋天增添更多色彩和美味。準備好要來一場秋之夢的味覺之旅了嗎？讓我們一起迎接這美好季節的到來吧！`

    },
    {
        id:5,
        title:'2023-11-25：團隊規模再擴大',
        image:'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content:`我們的團隊又擴大了！非常感謝我們優秀的員工，經過精心的培訓，他們將為您帶來更卓越的服務和美味的甜點體驗。這些充滿熱情和專業的夥伴們，將確保您在糖露坊的每次光臨都充滿了歡樂和滿足。<br>
    
        我們深深明白，良好的服務和美味的糕點不僅僅是食材和技巧，更是我們團隊成員的用心和熱情。他們將全情投入，讓您在每一次造訪中都感到賓至如歸。<br>
        
        因此，糖露坊感謝每一位員工的貢獻，並期待著為您獻上更多精彩、美味的瞬間。無論您是我們的老朋友還是新朋友，我們將一如既往地以台灣的熱情，歡迎您在我們的糖露坊共度美好時光。感謝您的支持，讓我們一同創造更多美味的回憶！`

    }
    , {
        id:6,
        title:'2024-1-02：經典甜點回歸！',
        image:'https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content:` 糖露坊經典蛋糕系列再度回歸！我們深情回顧過去的經典蛋糕，再次將它們呈現在您的餐桌上，重新設計和升華，以滿足您對美味的無限追求。這些經典蛋糕如同美好的回憶，總是令人難以忘懷，現在，您可以再次品味到那份經典的風味。<br>
    
        我們的廚師們用心將這些經典蛋糕重新演繹，保留了最原汁原味的口感，同時注入了更多創意和獨特的風味。每一口都是味蕾的享受，是對糕點藝術的極致追求。<br>

        而更令人興奮的是，即將在聖誕節到來之際，我們將推出全新的節慶新品，為這個充滿溫馨和喜悅的時刻增添更多色彩。敬請密切關注我們的官方網站和門市，以獲得有關新品的詳細信息和上市日期。<br><br>

        糖露坊感謝您一直以來的支持，讓我們能夠不斷創新、為您呈現更多美味的驚喜。期待與您一同度過這個充滿美味和歡樂的季節！`

    }
]

for (var i = 0; i < newsInfo.length; i++) {
    var news = `
        <div class="news">
            <div class="news_title">${newsInfo[i].title}</div>
            <img class="img_news" src="${newsInfo[i].image}">
            <div class="content">${newsInfo[i].content}</div>
        </div>`;

    $('#newsContent').append(news);
    
    
    $('#newsContent').find('.news_title').eq(i).append(`<div id="div_${i+1}"></div>`);
}
