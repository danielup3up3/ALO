var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 
	function main(monsterHP) {
		
		let AttackResult = [];//結果
		let SkillResult = [];
		var times = 0;//Boss回合行動次數

  
    let SkillOne = [];//技能1
		let SkillTwo = [];//技能2
		let SpecialSkill = [];//特殊技能
    
    var OneChance = 0;//技能1機率
		var TwoChance = 0;//技能2機率
		var SpecialChance = 0;//特殊技能機率
    
    
    //涅里梅斯HP 1,000,000/1,000,000
    if(monsterHP >= 500000){
			//綠血區域時
			times = 1
	    
			OneChance = 70;
			TwoChance = 30;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['密林毒氣'];
			
			SkillTwo.length = 1;
			SkillTwo = ['樹妖之怒'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['巨木橫掃'];
			
      
      }else if(monsterHP < 500000 && monsterHP >= 100000){
			//黃血區域
		times = 1
	      
			OneChance = 40;
			TwoChance = 50;
			SpecialChance = 10;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['密林毒氣'];
			
			SkillTwo.length = 1;
			SkillTwo = ['樹妖之怒'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['巨木橫掃'];
			
		
    
    }else if(monsterHP < 100000 && monsterHP > 0){
			//紅血區域
			times = 1
	    
			OneChance = 0;
			TwoChance = 30;
			SpecialChance = 70;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['密林毒氣'];
			
			SkillTwo.length = 1;
			SkillTwo = ['樹妖之怒'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['巨木橫掃'];
      
      }else if(monsterHP = '擊敗'){
				//設定說明文內容
				rply.text ='BOSS涅里梅斯被擊敗了\
				\n 全隊獲得了20000EXP及10000G';
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
				AttackResult[i] = '\涅里梅斯使用了' +  SkillResult[i]+ ' 造成我方全體中毒3回合(每回合-200HP)重複使用時會刷新持續時間' +'\
                 \n END';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] = '\涅里梅斯使用了' +  SkillResult[i]+ ' 使自己下次風屬性傷害+100%(可疊加) ' +'\
                 \n END';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] = '\涅里梅斯使用了' +  SkillResult[i]+ ' 造成了全體1000點風屬性傷害' + '\
                  \n END';
		}
		
		
       let SKesult ='BOSS的回合:\n'
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
    
