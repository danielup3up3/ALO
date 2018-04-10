var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //1000G
                let Rulistheart = [];  //風之魂石
                let Rulistspade = [];  //鮮紅緞帶
                let Rulistclubs = [];  //純淨靈魂
                let RulistJOKER = [];  //SSR武器
    
    var diamondChance = 0;//C獲得率
    var heartChance = 0;//B獲得率
    var spadeChance = 0;//A獲得率
    var clubsChance = 0;//S獲得率
    var JOKERChance = 0;//SS獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '青銅'){
			//設定基本變數
      
			//出現卡片
                        times = 3;
      
			diamondChance = 50;
			heartChance = 30;
			spadeChance = 10;
			clubsChance = 0;
			JOKERChance = 0;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['風之魂石*1','風之魂石*1','風之魂石*1','風之魂石*1','1000G'];
			
			Rulistheart.length = 5;
			Rulistheart = ['風之魂石*2','風之魂石*2','風之魂石*3','風之魂石*3','風之魂石*5'];
			
			Rulistspade.length = 9;
			Rulistspade = ['鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*2','鮮紅緞帶*2','鮮紅緞帶*2','鮮紅緞帶*3'];
      
      Rulistclubs.length = 8;
			Rulistclubs = ['純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*2','純淨靈魂*3'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['SSR靈木御劍(風)'];
      
      
      
     } else if(pokercard == '白銀'){
				times = 5;
        
     diamondChance = 0;
			heartChance = 0;
			spadeChance = 70;
			clubsChance = 30;
			JOKERChance = 0;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['風之魂石*1','風之魂石*1','風之魂石*1','風之魂石*1','1000G'];
			
			Rulistheart.length = 5;
			Rulistheart = ['風之魂石*2','風之魂石*2','風之魂石*3','風之魂石*3','風之魂石*5'];
			
			Rulistspade.length = 9;
			Rulistspade = ['鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*2','鮮紅緞帶*2','鮮紅緞帶*2','鮮紅緞帶*3'];
      
      Rulistclubs.length = 8;
			Rulistclubs = ['純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*2','純淨靈魂*3'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['SSR靈木御劍(風)'];
			
     
     
      } else if(pokercard == '黃金'){
				times = 7;
        
     diamondChance = 0;
			heartChance = 0;
			spadeChance = 0;
			clubsChance = 90;
			JOKERChance = 10;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['風之魂石*1','風之魂石*1','風之魂石*1','風之魂石*1','1000G'];
			
			Rulistheart.length = 5;
			Rulistheart = ['風之魂石*2','風之魂石*2','風之魂石*3','風之魂石*3','風之魂石*5'];
			
			Rulistspade.length = 9;
			Rulistspade = ['鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*1','鮮紅緞帶*2','鮮紅緞帶*2','鮮紅緞帶*2','鮮紅緞帶*3'];
      
      Rulistclubs.length = 8;
			Rulistclubs = ['純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*1','純淨靈魂*2','純淨靈魂*3'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['SSR靈木御劍(風)'];
      
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
				GachaResult[i] = '\【道具】' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\【道具】' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\【道具】' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\【道具】' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\【武器】' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='掉落結果:\n'
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
