var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 
	function main(stype) {
		
		let AttackResult = [];//結果
		let SkillResult = [];
		var times = 0;//出貨量

  
    let SkillOne = [];//技能1
		let SkillTwo = [];//技能2
		let SpecialSkill = [];//特殊技能
    
    var OneChance = 0;//技能1機率
		var TwoChance = 0;//技能2機率
		var SpecialChance = 0;//特殊技能機率
    
   
    if(stype == 0){
			//綠血區域時
			times = 1
	    
			OneChance = 99;
			TwoChance = 1;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['3000G','強化石(中)','銀之鍵x1','風之殘頁'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】神樹武=永恆之槍','【SR】神樹武=護城盾劍','【SR】神樹武=神照之杖','【SR】神樹武=絕嵐之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】風迷宮武=暴風之槍','【SSR】風迷宮武=守護盾劍','【SSR】風迷宮武=恩惠之杖','【SSR】迷宮武=狂嵐之劍'];
			
      
      }else if(stype == 1){
			//黃血區域
		times = 1
	      
			OneChance = 50;
			TwoChance = 45;
			SpecialChance = 5;
			//
			
			SkillOne.length = 4;
			SkillOne = ['5000G','強化石(中)','銀之鍵x3','翠風之頁'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】神樹武=永恆之槍','【SR】神樹武=護城盾劍','【SR】神樹武=神照之杖','【SR】神樹武=絕嵐之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】風迷宮武=暴風之槍','【SSR】風迷宮武=守護盾劍','【SSR】風迷宮武=恩惠之杖','【SSR】迷宮武=狂嵐之劍'];
		
    
    }else if(stype == 2){
			//紅血區域
			times = 1
	    
			OneChance = 40;
			TwoChance = 40;
			SpecialChance = 20;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['10000G','強化石(中)','銀之鍵x5','神樹啟示'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】神樹武=永恆之槍','【SR】神樹武=護城盾劍','【SR】神樹武=神照之杖','【SR】神樹武=絕嵐之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】風迷宮武=暴風之槍','【SSR】風迷宮武=守護盾劍','【SSR】風迷宮武=恩惠之杖','【SSR】迷宮武=狂嵐之劍'];
      
      }else if(stype == 3){
				//設定說明文內容
				rply.text ='目前\
				\n 還沒有EX獎勵';
				//
				
				return rply;//中斷+回傳值用
		}
      else{
				//設定說明文內容
				rply.text ='錯誤002:輸入格式錯誤\
				\n 請確認後重試一次，如果仍有問題請通報Bug給GM知道';
				//
				
				return rply;//中斷+回傳值用
		}
		
		 var temp = 0;
		AttackResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			AttackResult[i] = '\n';
			
		}
    
    
    
    //分析行動
               
    for(var i=0; i< times;i++){
		temp = rollbase.Dice(100);

		if(temp > TwoChance + SpecialChance){
    
			SkillResult[i] = SkillOne[Math.floor((Math.random() * (SkillOne.length)) + 0)];
				AttackResult[i] =  '\【道具】:' +  SkillResult[i]+ '\n';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] =  '\【武器】:' +  SkillResult[i]+ '\n';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] =  '\【武器】:' +  SkillResult[i]+ '\n';
		}
		
		
       let SKesult ='箱子內容:\n'
		for(var i = 0;i<times;i++){
			SKesult = SKesult + AttackResult[i];
		}
		
		
		rply.text = SKesult;
		
		return rply;
    
		
		
		
	}
	
		
		
		
	}
////////////////

module.exports = {
	main
};
