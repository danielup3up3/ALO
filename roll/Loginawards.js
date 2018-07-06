var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 登入轉輪
	function main(BunusType,LoginDays) {
		
		///基本變數
		let BonusListN = [];//普通獎勵
		let BonusListR = [];//高級獎勵
		let BonusListP = [];//完美獎勵
  
                var BonusChanceN = 0;//普通獎勵獲得率
		var BonusChanceR = 0;//高級獎勵獲得率
		var BonusChanceP = 0;//完美獎勵獲得率
		var BonusDayRate = 0;//高居獎勵獲得成長率
		var BonusRateMaxDay = 0;//成長率最大天數
    
    ///確定登入獎勵類別
		
		if(BunusType == 0){
			//設定基本變數
			
			BonusChanceN = 60;
			BonusChanceR = 30;
			BonusChanceP = 10;
			BonusDayRate = 5;
			BonusRateMaxDay = 7;
			//
			
			//設定獎勵內容
			BonusListN.length = 1;
			BonusListN = ['50圓'];
			
			BonusListR.length = 1;
			BonusListR = ['100圓'];
			
			BonusListP.length = 1;
			BonusListP = ['緣分碎片x1'];
			
			//
			
			//設定說明文
			if(LoginDays == null){
				
				//設定說明文內容
				rply.text = '【登入獎勵】 通常每日登入\
					\n每日登入的獎勵有\
					\n 50G\
					\n 100G\
					\n 跟星輝石*1喔~\
					\n 每多連續登入一天，後面2項涵蓋的機率就會越多，請不要中斷持續登入吧！\
					\n\
					\n 想領取獎勵的話，請輸入 登入 ' + BunusType + ' 登入天數喔！';
				//
				
				return rply;//中斷+回傳值用
				
			}
			
		}else if(BunusType == 1101211){
			//設定基本變數
			
			BonusChanceN = 60;
			BonusChanceR = 30;
			BonusChanceP = 10;
			BonusDayRate = 5;
			BonusRateMaxDay = 7;
			//
			
			//設定獎勵內容
			BonusListN.length = 3;
			BonusListN = ['10G','50G','87G'];
			
			BonusListR.length = 3;
			BonusListR = ['100G','1000G','10000G'];
			
			BonusListP.length = 2;
			BonusListP = ['擊風劍士-艾恩','奧術降神-亞洛'];
			
			//
			
			//設定說明文
			if(LoginDays == null){
				
				//設定說明文內容
				rply.text = ' GM用鬧爆登入測試';
				//
				
				return rply;//中斷+回傳值用
				
			}
			
		}else if(BunusType == null){
				//設定說明文內容
				rply.text = '【登入目錄】目前遊戲中的每日一覽表 \
				\n\
				\n 在這裡可以確認目前的每日登入有哪些喔\
				\n  0 【登入獎勵】 通常每日登入\
				\n\
				\n 如果想看詳細登入內容，請輸入 登入 登入編號 喔！';
				//
				
				return rply;//中斷+回傳值用
		}else{
				//設定說明文內容
				rply.text ='找不到編號['+ BunusType + ']的每日登入喔\
				\n\
				\n【登入目錄】目前遊戲中的每日一覽表 \
				\n\
				\n 在這裡可以確認目前的每日登入有哪些喔\
				\n  0 【登入獎勵】 通常每日登入\
				\n\
				\n 如果想看詳細登入內容，請輸入 登入 登入編號 喔！';
				//
				
				return rply;//中斷+回傳值用
		}

		

		 
		if(isNaN(LoginDays) == true){
			//設定說明文內容
				rply.text = '請用半形阿拉伯數字表示天數喔';
				//
				return rply;//中斷+回傳值用
		}
		if(LoginDays >= BonusRateMaxDay) LoginDays = BonusRateMaxDay; //判斷天數超過最大天數時，變成最大天數

		//機率成長
		BonusChanceN -= (BonusDayRate*LoginDays*2);
		BonusChanceR += (BonusDayRate*LoginDays);
		BonusChanceP += (BonusDayRate*LoginDays);
		//
		 
		 
		 
		 
		//分析結果
                var temp = rollbase.Dice(100); 
		if(temp > BonusChanceR + BonusChanceP){
			rply.text = '登入獎勵結果:\
				\n 恭喜獲得普通獎勵 ' + BonusListN[Math.floor((Math.random() * (BonusListN.length)) + 0)] + ' ！';
		}else if(temp <=BonusChanceR + BonusChanceP && temp >BonusChanceR ){
			rply.text = '登入獎勵結果:\
				\n 恭喜獲得高級獎勵 ' + BonusListR[Math.floor((Math.random() * (BonusListR.length)) + 0)] + ' ！';
		}else if(temp <= BonusChanceP){
			rply.text = '登入獎勵結果:\
				\n 恭喜獲得完美獎勵 ' + BonusListP[Math.floor((Math.random() * (BonusListP.length)) + 0)] + ' ！';
		}
		
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};
