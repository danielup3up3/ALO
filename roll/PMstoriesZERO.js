var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(step) {
  

		
		if(step == '第一節'){
    
			rply.text =  '【第一章:The Begining】\
          \n 玩家:我的名字叫做___，是一名10歲的少年 \
					\n 今天是我要出發的旅行的日子，沒錯...我的目標是!!\
          \n 媽媽:(敲)你這傻孩子，都已經睡過頭了 還不趕快出門。\
          \n 玩家:阿!!!!都已經這個時間了...\
          \n (實驗室)\
          \n 助手:遊佐博士剛剛已經出發去101道路觀察了，不過一直還沒回來。\
          \n \
					\n 章節Clear  \
          \n 繼續請輸入 冒險的開始 第二節。';
				//
				
				return rply;//中斷+回傳值用
      
      
      
     } else if(step == '第二節'){
				rply.text =  rply.text =  '(101道路) \
					\n 玩家: ...遊佐博士在哪呢。\
          \n 話說那是?\
          \n (你看到了前方有一隻波波在攻擊博士)\
          \n 博士:快救我啊!\
          \n 玩家:...我要怎麼做，我沒神奇寶貝阿\
          \n 博士:在旁邊...我的袋子裡有!\
          \n \
					\n 章節Clear  \
          \n 如要繼續請輸入 冒險的開始 第三節。';
				//
				
				return rply;//中斷+回傳值用
        
         } else if(step == '第三節'){
				rply.text =  rply.text =  '(袋子中裝了3顆寶貝球) \
					\n 玩家: 先選一個救博士吧。\
          \n (請選擇一個神奇寶貝)\
          \n (小火龍/傑尼龜/妙蛙種子)。\
          \n 選擇完後進入戰鬥(戰鬥代碼0016)\
          \n \
					\n 章節Clear  \
          \n 篇章Clear  【Reward】: 地區地圖 第一隻PM，一般寶貝球10顆。';
				//
				
				return rply;//中斷+回傳值用
      
			
     
     
      //設定說明文
     }
		else{//設定說明文內容
				rply.text ='error code:001 無法找到'+ step + '這個章節\
				\n 請重新輸入';
				//
				
				return rply;//中斷+回傳值用
		
			
      
     
     
      }
     
    }
    

////////////////

module.exports = {
	main
};
