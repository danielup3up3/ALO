var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //C
                let Rulistheart = [];  //B
                let Rulistspade = [];  //A
                let Rulistclubs = [];  //S
                let RulistJOKER = [];  //SS
    
    var diamondChance = 0;//C獲得率
    var heartChance = 0;//B獲得率
    var spadeChance = 0;//A獲得率
    var clubsChance = 0;//S獲得率
    var JOKERChance = 0;//SS獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '迷宮'){
			//設定基本變數
      
			//出現卡片
                        times = 4;
      
			diamondChance = 35;
			heartChance = 30;
			spadeChance = 25;
			clubsChance = 9;
			JOKERChance = 1;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['裝備者屬性傷害+5%','傷害基數+100','裝備者HP+400','裝備需求等級-1','裝備者的HP歸0時給予敵人500點固定傷害'];
			
			Rulistheart.length = 5;
			Rulistheart = ['裝備者屬性傷害+10%','傷害基數+300','裝備者HP+600','裝備者技能MP消耗量-5','裝備者的HP歸0時給予敵人一發普攻傷害'];
			
			Rulistspade.length = 5;
			Rulistspade = ['裝備者屬性傷害+20%','傷害基數+500','裝備者HP+800','裝備者技能MP消耗量-10','裝備者的HP歸0時給予敵人一發普攻x3傷害'];
      
      Rulistclubs.length = 5;
			Rulistclubs = ['裝備者屬性傷害+30%','傷害基數+1000','裝備者HP+2000','裝備者技能MP消耗量-20','裝備者持續型技能效果持續回合+1'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['裝備者死亡時滿血滿魔復活一次(一場一次)'];
      
      
      
     } else if(pokercard == '世界樹'){
				times = 5;
        
     diamondChance = 35;
			heartChance = 30;
			spadeChance = 25;
			clubsChance = 9;
			JOKERChance = 1;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['裝備者屬性傷害+5%','傷害基數+100','裝備者HP+800','裝備需求等級-1','裝備者的HP歸0時給予敵人500點固定傷害'];
			
			Rulistheart.length = 5;
			Rulistheart = ['裝備者屬性傷害+10%','傷害基數+500','裝備者HP+1000','裝備者技能MP消耗量-5','裝備者的HP歸0時給予敵人一發普攻傷害'];
			
			Rulistspade.length = 5;
			Rulistspade = ['裝備者屬性傷害+20%','傷害基數+1000','裝備者HP+2000','裝備者技能MP消耗量-10','裝備者的HP歸0時給予敵人一發普攻x3傷害'];
      
      Rulistclubs.length = 5;
			Rulistclubs = ['裝備者屬性傷害+50%','傷害基數+2000','裝備者HP+2500','裝備者技能MP消耗量-20','裝備者持續型技能效果持續回合+1'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['裝備者死亡時滿血滿魔復活一次(一場一次)'];
      }
			
     
     
      //設定說明文
			else if(pokercard == null){
				
				//設定說明文內容
				rply.text =  '【武器鑑定】 \
					\n 可以選擇的鑑定武器有\
					\n 迷宮跟世界樹。\
					\n 規則:\
                                        \n 1.玩家選擇完基底武器後消耗一個相同的武器進行鑑定。\
                                        \n 2.武器需先達到最高強化等級才能進行鑑定，鑑定完後，武器的強化效果不會消失\
                                        \n 3.一旦鑑定後，武器就不能用道具清空重洗強化數值了，請注意。\
                                        \n 4.如果鑑定結果不滿意，可以在消耗一個相同的武器重新鑑定。\
                                        \n 5.每把武器排除第一次鑑定，最多只能重新鑑定9次';
				//
				
				return rply;//中斷+回傳值用
			
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ pokercard + '類型的鑑定喔!\
				\n 請選擇迷宮或世界樹';
				//
				
				return rply;//中斷+回傳值用
		
			
      
     
     
      }
     var temp = 0;
		GachaResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			GachaResult[i] = '\n';
			
		}
    
    for(var i=0; i< times;i++){
			temp = rollbase.Dice(100);

			if(temp <=diamondChance+heartChance+spadeChance+clubsChance+JOKERChance && temp >heartChance+spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistdiamond[Math.floor((Math.random() * (Rulistdiamond.length)) + 0)];
				GachaResult[i] = '\【C階】' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\【B階】' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\【A階】' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\【S階】' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\【SS階】' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='鑑定結果:\n'
		for(var i = 0;i<times;i++){
			GResult = GResult + GachaResult[i];
		}
		
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}

    
    

////////////////

module.exports = {
	main
};
