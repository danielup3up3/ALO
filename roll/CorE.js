var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 核心建造
	function main(Gmoney,StarStone,Decore) {
  
  ///基本變數(不要動)
		///基本變數
		let Gmoneylist = [];
                let Stonelist = [];
                let Decorelist = [];
    
    
    //判定
    
    if(Gmoney < 50 && Gmoney >= 10){
    
    Gmoneylist.length = 13;
    Gmoneylist = ['☆馬場優人','☆馬場優人','☆馬場優人','☆北村悟','☆北村悟','☆北村悟','☆☆加我見新之助','☆☆加我見新之助','☆☆加我見新之助','☆☆加我見新之助','☆☆加我見新之助','☆☆霧川瞳','☆☆☆赤木理香'];
    
    if(StarStone < 5 && StarStone >= 0){
    
    Stonelist.length = 13;
    Stonelist = ['☆馬場優人','☆馬場優人','☆馬場優人','☆☆馬場優人','☆☆☆☆無','☆北村悟','☆北村悟','☆北村悟','☆阿吉','☆☆☆姬神真司','☆☆☆☆無','☆☆☆☆無','☆☆☆☆無'];
    
    if(Decore <= 100 && Decore >= 10){
    
    Decorelist.length = 11;
    Decorelist = ['☆星宮葉純','☆星宮葉純','☆☆加我見新之助','☆☆菲露米雅','☆☆菲露米雅','☆☆菲露米雅','☆☆菲露米雅','☆☆☆☆☆無','☆☆☆赤木理香','☆☆☆赤木理香','☆☆☆冰室希兒'];
    
    }
    }
    
    
    }else if(Gmoney < 150 && Gmoney >= 50){
    
    Gmoneylist.length = 14;
    Gmoneylist = ['☆☆☆姬神真司','☆☆☆姬神真司','☆☆☆姬神真司','☆☆☆赤木理香','☆☆☆赤木理香','☆☆☆赤木理香','☆阿吉','☆阿吉','☆阿吉','☆☆菲露米雅','☆☆菲露米雅','☆☆菲露米雅','☆☆菲露米雅','☆☆☆☆☆無'];
    
    if(StarStone < 10 && StarStone >= 5){
    
    Stonelist.length = 9;
    Stonelist = ['☆☆☆冰室希兒','☆☆加我見新之助','☆☆加我見新之助','☆☆加我見新之助','☆☆☆☆無','☆☆☆☆無','☆☆霧川瞳','☆☆霧川瞳','☆☆霧川瞳'];
    
    if(Decore <= 250 && Decore > 100){
    
    Decorelist.length = 11;
    Decorelist = ['☆馬場優人','☆馬場優人','☆馬場優人','☆☆伏見瞬','☆☆☆赤木理香','☆☆☆海之加護','☆☆☆海之加護','☆阿吉','☆阿吉','☆阿吉','☆阿吉'];
    
    }
    }
    
    
     }else if(Gmoney < 300 && Gmoney >= 150){
    
    Gmoneylist.length = 13;
    Gmoneylist = ['☆☆伏見瞬','☆☆伏見瞬','☆☆伏見瞬','☆星宮葉純','☆星宮葉純','☆星宮葉純','☆星宮葉純','☆星宮葉純','☆星宮葉純','☆☆☆☆無','☆☆☆☆無','☆☆☆☆無','☆☆☆☆無'];
    
     if(StarStone >= 10){
    
    Stonelist.length = 7;
    Stonelist = ['☆星宮桃子','☆星宮桃子','☆星宮桃子','☆星宮葉純','☆星宮葉純','☆星宮葉純','☆☆☆☆無'];
    
     if(Decore > 250){
    
    Decorelist.length = 12;
    Decorelist = ['☆北村悟','☆北村悟','☆北村悟','☆北村悟','☆北村悟','☆☆霧川瞳','☆☆☆☆無','☆☆霧川瞳','☆☆霧川瞳','☆☆霧川瞳','☆☆霧川瞳','☆☆霧川瞳'];
    
    }
    }
    
    }else{
				//設定說明文內容
				rply.text ='素材投入量出錯，請按照規定輸入';
        
        return rply;//中斷+回傳值用
		}
    
    
    let CorEresult = [];

CorEresult.length = Gmoneylist.length + Stonelist.length  + Decorelist.length;

CorEresult = Gmoneylist.concat(Stonelist,Decorelist);


    
    rply.text = '太棒了！！\
		\n你獲得了核心「' + CorEresult[Math.floor((Math.random() * (CorEresult.length)))] + '」';
    
return rply;

    

	}
////////////////

module.exports = {
	main
};
