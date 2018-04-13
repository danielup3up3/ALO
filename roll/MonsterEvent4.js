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
    
    
    //靜奈HP 怒氣槽 0/2
    if(monsterHP = 1){
			//綠血區域時
			times = 1
	    
			OneChance = 70;
			TwoChance = 30;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['四倍痛擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['風之歌'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['月舞風華'];
			
      
      }else if(monsterHP = '滿格'){
			//紅血區域
			times = 1
	    
			OneChance = 0;
			TwoChance = 0;
			SpecialChance = 100;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['四倍痛擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['風之歌'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['月舞風華'];
      
      }else if(monsterHP = '擊敗'){
				//設定說明文內容
				rply.text ='BOSS靜奈被擊敗了\
				\n 全隊獲得了2000EXP及1000G';
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
				AttackResult[i] = '\靜奈使用了' +  SkillResult[i]+ ' 造成了7000點風屬性傷害' +'\
                 \n END';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] = '\靜奈使用了' +  SkillResult[i]+ ' 造成了5000點風屬性全體傷害 ' +'\
                 \n END';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] = '\靜奈使用了' +  SkillResult[i]+ ' 造成了99999999點風屬性全體傷害並恢復自己99999999點HP。怒氣槽歸0。' + '\
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
