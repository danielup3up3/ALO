var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(step) {
  

		
		if(step == '第一步'){
    
			rply.text =  '【選擇性別】 \
					\n 可以選擇的性別有\
          \n 男生跟女生。\
					\n 選擇後請輸入 新手登入 第二步。';
				//
				
				return rply;//中斷+回傳值用
      
      
      
     } else if(step == '第二步'){
				rply.text =  '【選擇種族】 \
					\n 可以選擇的種族有\
          \n 風精靈:長處為高速行動，能使用風屬性的攻擊魔法，且可邊攻擊對手邊恢復自己\
          \n 火精靈:長處為多支援武器使用與高輸出攻擊，能使用火屬性的攻擊魔法與基本的回復HP的魔法。\
          \n 水精靈:長處為回復魔法與buff型魔法。\
          \n 大地精靈:長處為耐久力及弱體抗性。\
          \n 貓妖:長處為馴化魔獸、高敏捷。\
          \n 守衛精靈:長處為掉寶加成與幻象魔法。\
          \n 音樂精靈:長處為樂器演奏及歌唱，能透過音樂迷惑與操縱怪物。\
          \n 小矮妖:長處為武器生產與道具製作。\
					\n 闇精靈:長處為暗襲與闇屬性多段攻擊。\
          \n 選擇後請輸入 新手登入 戰鬥教學。';
          
				//
				
				return rply;//中斷+回傳值用
      
			
     
     
      //設定說明文
			else if(step == null){
				
				//設定說明文內容
				rply.text =  '【角色創建】\
					\n 歡迎來到Alfheim Online\                 
                                        \n 請先輸入"新手登入 第一步"';
				//
				
				return rply;//中斷+回傳值用
			
      
      }else{//設定說明文內容
				rply.text ='error code:001 無法找到跟'+ step + '字元有關的指令\
				\n 請重新輸入';
				//
				
				return rply;//中斷+回傳值用
		
			
      
     
     
      }
     
    }
    

////////////////

module.exports = {
	main
};
