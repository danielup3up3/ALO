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
    
    
    //芬里爾HP 1,000,000/1,000,000
    if(monsterHP >= 750000){
			//綠血區域時
			times = 1
	    
			OneChance = 100;
			TwoChance = 0;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['風王之怒'];
			
			SkillTwo.length = 1;
			SkillTwo = ['機構樹海'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['夜之降臨'];
			
      
      }else if(monsterHP < 750000 && monsterHP >= 400000){
			//黃血區域
		times = 1
	      
			OneChance = 0;
			TwoChance = 90;
			SpecialChance = 10;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['風王之怒'];
			
			SkillTwo.length = 1;
			SkillTwo = ['機構樹海'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['夜之降臨'];
			
		
    
    }else if(monsterHP < 400000 && monsterHP > 0){
			//紅血區域
			times = 1
	    
			OneChance = 25;
			TwoChance = 25;
			SpecialChance = 50;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['風王之怒'];
			
			SkillTwo.length = 1;
			SkillTwo = ['機構樹海'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['夜之降臨'];
			
      
      }else if(monsterHP = '擊敗'){
				//設定說明文內容
				rply.text ='BOSS芬里爾被擊敗了\
				\n 全隊獲得了10000EXP及5000G';
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
				AttackResult[i] = '\芬里爾使用了' +  SkillResult[i]+ ' 造成了2000點風屬性全體傷害' +'\
                 \n END';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] = '\芬里爾使用了' +  SkillResult[i]+ ' 造成了3000點風屬性傷害並恢復自身10萬HP。 ' +'\
                 \n END';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] = '\芬里爾使用了' +  SkillResult[i]+ ' 將下次自己的傷害轉化為闇屬性' + '\
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
