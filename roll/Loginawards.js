var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 登入轉輪
	function main(DrawPool) {
		
		///基本變數
		let GachaResult = [];//登入禮結果
    
    //獎勵
		let awardsList1 = [];//50G
		let awardsList2 = [];//100G
		let awardsList3 = [];//星輝石1顆
  
                var awardsChance1 = 0;//50G獲得率
		var awardsChance2 = 0;//100G獲得率
		var awardsChance3 = 0;//星輝石1顆獲得率
    
    ///確定連登狀態
		if(DrawPool == 1){
			awardsList1.length = 1;
			awardsList1 = ['50G'];
			awardsList2.length = 1;
			awardsList2 = ['100G'];
                        awardsList3.length = 1;
			awardsList3 = ['星輝石1顆'];
      
                        awardsChance1 = 60;
			awardsChance2 = 30;
			awardsChance3 = 10;
      
                if(DrawPool == 2){
			awardsList1.length = 1;
			awardsList1 = ['50G'];
			awardsList2.length = 1;
			awardsList2 = ['100G'];
                        awardsList3.length = 1;
			awardsList3 = ['星輝石1顆'];
      
                        awardsChance1 = 40;
			awardsChance2 = 40;
			awardsChance3 = 20;
      
                        if(DrawPool == 3){
			awardsList1.length = 1;
			awardsList1 = ['50G'];
			awardsList2.length = 1;
			awardsList2 = ['100G'];
                        awardsList3.length = 1;
			awardsList3 = ['星輝石1顆'];
      
                        awardsChance1 = 20;
			awardsChance2 = 40;
			awardsChance3 = 40;
}

                var temp = 0;
		GachaResult.length = 1;
		
		GachaResult[i] = '\n';

			temp = rollbase.Dice(100);

			if(temp >awardsChance2+awardsChance3){
				
				awarsdsResult[i] = awarsdsList1[Math.floor((Math.random() * (awarsdsList1.length)) + 0)];
				GachaResult[i] = '\獎勵:' +  awarsdsResult[i]+ '\n';
				
			}else if(temp <=awarsdsChance2+awarsdsChance3 && temp > characterChance3){
				
				awarsdsResult[i] = awarsdsList2[Math.floor((Math.random() * (awarsdsList2.length)) + 0)];
				GachaResult[i] = '\獎勵:' +  awarsdsResult[i]+ '\n';
				
		
			}else if(temp <= awardsChance3){
				
				awardsResult[i] = awarsdsList3[Math.floor((Math.random() * (awarsdsList3.length)) + 0)];
				GachaResult[i] = '\獎勵:' +  awarsdsResult[i]+ '\n';
				
			}
		//通常處理	
    
    
    
    let GResult ='登入獎勵結果:\n'
		}
		
		GResult = GResult + '\n--------------------\n總計獲得獎勵:\n';
		
		}
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};
