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
    
    
    //step
    if(monsterHP >= 3){
			//綠血區域時
			times = 1
	    
			OneChance = 70;
			TwoChance = 30;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['波波(0016)','可達鴨(0054)','探探鼠(0504)'];
			
			SkillTwo.length = 1;
			SkillTwo = ['繼續前進'];
			
			SpecialSkill.length = 3;
			SpecialSkill = ['波波(0016)','可達鴨(0054)','探探鼠(0504)'];
			
      
      }else if(monsterHP < 3 && monsterHP >= 1){
			//黃血區域
		times = 1
	      
			OneChance = 40;
			TwoChance = 50;
			SpecialChance = 10;
			//
			
			//設定黃血攻擊模式
	SkillOne.length = 3;
			SkillOne = ['波波(0016)','可達鴨(0054)','探探鼠(0504)'];
			
			SkillTwo.length = 1;
			SkillTwo = ['繼續前進'];
			
			SpecialSkill.length = 3;
			SpecialSkill = ['波波(0016)','可達鴨(0054)','探探鼠(0504)'];
			
    
    }else if(monsterHP < 1 ){
			//紅血區域
			times = 1
	    
			OneChance = 0;
			TwoChance = 30;
			SpecialChance = 70;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['波波(0016)','可達鴨(0054)','探探鼠(0504)'];
			
			SkillTwo.length = 1;
			SkillTwo = ['繼續前進'];
			
			SpecialSkill.length = 3;
			SpecialSkill = ['波波(0016)','可達鴨(0054)','探探鼠(0504)'];
			
      
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
				AttackResult[i] = '\在草叢中遭遇了' +  SkillResult[i]+ ' !!' +'\
                 \n END';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] = '\平安無事的' +  SkillResult[i]+ ' 。' +'\
                 \n END';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] = '\在草叢中遭遇了' +  SkillResult[i]+ ' !! ' + '\
                  \n END';
		}
		
		
       let SKesult ='結果:\n'
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
