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
	    
			OneChance = 80;
			TwoChance = 20;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['傷害基數+100','傷害基數+50','裝備者HP+200','裝備者HP+500'];
			
			SkillTwo.length = 4;
			SkillTwo = ['傷害基數+300','傷害基數+500','裝備者HP+400','裝備者HP+1000'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['傷害基數+2000','傷害基數+1000','裝備者HP+2000','裝備者HP+4000'];
			
      
      }else if(stype == 1){
			//黃血區域
		times = 1
	      
			OneChance = 50;
			TwoChance = 45;
			SpecialChance = 5;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['傷害基數+100','傷害基數+50','裝備者HP+200','裝備者HP+500'];
			
			SkillTwo.length = 4;
			SkillTwo = ['傷害基數+300','傷害基數+500','裝備者HP+400','裝備者HP+1000'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['傷害基數+2000','傷害基數+1000','裝備者HP+2000','裝備者HP+4000'];
		
    
    }else if(stype == 2){
			//紅血區域
			times = 1
	    
			OneChance = 40;
			TwoChance = 40;
			SpecialChance = 20;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['傷害基數+100','傷害基數+50','裝備者HP+200','裝備者HP+500'];
			
			SkillTwo.length = 4;
			SkillTwo = ['傷害基數+300','傷害基數+500','裝備者HP+400','裝備者HP+1000'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['傷害基數+2000','傷害基數+1000','裝備者HP+2000','裝備者HP+4000'];
      
      }else if(stype == 3){
				//設定說明文內容
				rply.text ='目前\
				\n 還沒有EX強化';
				//
				
				return rply;//中斷+回傳值用
		}
      else{
				//設定說明文內容
				rply.text ='格式出問題了!\
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
				AttackResult[i] =  '\【數值追加】:' +  SkillResult[i]+ '\n';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] =  '\【數值追加】:' +  SkillResult[i]+ '\n';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] =  '\【數值追加】:' +  SkillResult[i]+ '\n';
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
    
