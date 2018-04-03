// Load `*.js` under roll directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync('./roll/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
	  var name = file.replace('.js', '');
	  exports[name] = require('../roll/' + file);
	}
  });

//用來呼叫骰組,新增骰組的話,要寫條件式到下面呼叫 
//格式是 exports.骰組檔案名字.function名
function parseInput(rplyToken, inputStr) {
	//console.log('InputStr: ' + inputStr);
	_isNaN = function(obj) 	{
	return isNaN(parseInt(obj));  
	}
	
	let msgSplitor = (/\S+/ig);	
	let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階

	//在下面位置開始分析trigger

	//普通ROLL擲骰判定在此	
	if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/\d+d+\d/)!=null) return exports.rollbase.nomalDiceRoller(inputStr,mainMsg[0],mainMsg[1],mainMsg[2]);

	//xBy>A 指令開始於此
	if (trigger.match(/^(\d+)(b)(\d+)$/i)!= null) return exports.advroll.xBy(trigger,mainMsg[1],mainMsg[2]);
	//xUy 指令開始於此	
	if (trigger.match(/^(\d+)(u)(\d+)$/i)!= null && isNaN(mainMsg[1])== false) return exports.advroll.xUy(trigger,mainMsg[1],mainMsg[2],mainMsg[3]);
	
	if (trigger.match(/^ccb$|^cc$|^ccn[1-2]$|^cc[1-2]$/)!= null && mainMsg[1]<=1000 )
	{		
	//ccb指令開始於此
	if (trigger == 'ccb'&& mainMsg[1]<=99) return exports.coc.coc6(mainMsg[1],mainMsg[2]);
	
	//cc指令開始於此
	if (trigger == 'cc'&& mainMsg[1]<=1000) return exports.coc.coc7(mainMsg[1],mainMsg[2]);
	//獎懲骰設定於此	
	if (trigger == 'cc1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'1',mainMsg[2]); 
	if (trigger == 'cc2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'2',mainMsg[2]);	
	if (trigger == 'ccn1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-1',mainMsg[2]);	
	if (trigger == 'ccn2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-2',mainMsg[2]);	
	}
			
	if (trigger.match(/(^cc7版創角$|^cc七版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build7char(mainMsg[1]);
	
	if (trigger.match(/(^cc6版創角$|^cc六版創角$)/) != null && mainMsg[1] != NaN )	return exports.coc.build6char(mainMsg[1]);
	
	if (trigger.match(/^coc7角色背景$/)!= null ) return exports.coc.PcBG();
  
	if (trigger.match(/^bothelp$|^bot幫助$/)!= null ) return exports.help.Help();
	
	
	//nc指令開始於此 來自Rainsting/TarotLineBot 
	if (trigger.match(/^[1-4]n[c|a][+|-][1-99]$|^[1-4]n[c|a]$/)!= null ) return exports.nc.nechronica(trigger,mainMsg[1]);

	//依戀
	if (trigger.match(/(^nm$)/) != null)	return exports.nc.nechronica_mirenn(mainMsg[1]);

	
	//wod 指令開始於此
	if (trigger.match(/^(\d+)(wd|wod)(\d|)((\+|-)(\d+)|)$/i)!= null)return exports.wod.wod(trigger,mainMsg[1]);

	//Dx3 指令開始於此
	if (trigger.match(/^(\d+)(dx)(\d|)(((\+|-)(\d+)|)((\+|-)(\d+)|))$/i)!= null)return exports.dx3.dx(trigger);

	//Fisher–Yates shuffle
 	//SortIt 指令開始於此
 	if (trigger.match(/排序/)!= null && mainMsg.length >= 3) return exports.funny.SortIt(inputStr,mainMsg);
 	if (trigger.match(/^d66$/)!= null ) return exports.advroll.d66(mainMsg[1]);
	if (trigger.match(/^d66s$/)!= null ) return exports.advroll.d66s(mainMsg[1]);

	
	//choice 指令開始於此
	if (trigger.match(/choice|隨機|選項|選1/)!= null && mainMsg.length >= 3) return exports.funny.choice(inputStr,mainMsg);
	
	//tarot 指令
	if (trigger.match(/tarot|塔羅牌|塔羅/) != null) {
		if (trigger.match(/^單張|^每日|^daily/)!= null) return exports.funny.NomalDrawTarot(mainMsg[1], mainMsg[2]);//預設抽 79 張
		if (trigger.match(/^時間|^time/)!= null) 	return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 1);
		if (trigger.match(/^大十字|^cross/)!= null) return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 2);
	}
	
	//FLAG指令開始於此
	if (trigger.match(/立flag|死亡flag/) != null) return exports.funny.BStyleFlagSCRIPTS() ;	
	
	//鴨霸獸指令開始於此
	if (trigger.match(/瑪姬娜醬|瑪姬娜/) != null) return exports.funny.randomReply() ;
	if (trigger.match(/C8763|星爆氣流斬/) != null) return exports.funny.C8763() ;
	if (trigger.match(/^野$/) != null) return exports.funny.ya() ;
	if (trigger.match(/^炸$/) != null) return exports.funny.zA() ;
	if (trigger.match(/運氣|運勢/) != null) return exports.funny.randomLuck(mainMsg) ; //占卜運氣	
	if (trigger.match(/^選單$/) != null) return exports.funny.menu() ;
	
	//遊戲公告指令
	if (trigger.match(/^公告$/) != null) return exports.GameInformation.main(mainMsg[1]) ;
	
	//抽角 魔導書
	if (trigger.match(/^夥伴招募$/) != null) return exports.gachaC.main(mainMsg[1],mainMsg[2]);	//角色降臨指令
	if (trigger.match(/^武器$/) != null) return exports.gachaB.main(mainMsg[1],mainMsg[2]);	//魔導書共鳴指令
	
	//登入
	if (trigger.match(/^登入$/) != null) return exports.Loginawards.main(mainMsg[1],mainMsg[2]);	//登入轉輪
	
	//核心
	if (trigger.match(/^核心建造$/) != null) return exports.CorE.main(mainMsg[1],mainMsg[2],mainMsg[3]);	

	//賭博拉霸
	if (trigger.match(/^星輝拉霸機$/) != null) return exports.GambleLaba.main(mainMsg[1]);

	//賭博拉霸
	if (trigger.match(/^撲克抽卡$/) != null) return exports.pokerone.main(mainMsg[1]);
	
	//比大小
	if (trigger.match(/^撲克比大小$/) != null) return exports.pokertwo.main(mainMsg[1]);
	
	//RoadXX猜拳
	if (trigger.match(/^猜拳$/) != null) return exports.roadXX.main(mainMsg[1]);
	
	if (trigger.match(/^新手登入$/) != null) return exports.newplayer.main(mainMsg[1]);
	
	//////////////////////////主線劇情彙整區////////////////////////////////
	
	//序章劇情
	if (trigger.match(/^序章劇情$/) != null) return exports.storiesZERO.main(mainMsg[1]);
	//第一章劇情
	if (trigger.match(/^第一章劇情$/) != null) return exports.storiesONE.main(mainMsg[1]);
	//第二章劇情
	if (trigger.match(/^第二章劇情$/) != null) return exports.storiesTWO.main(mainMsg[1]);
	//第三章劇情
	if (trigger.match(/^第三章劇情$/) != null) return exports.storiesTHREE.main(mainMsg[1]);
	
	
	//////////////////////////怪物資料彙整區////////////////////////////////
	
	//新手戰鬥
	if (trigger.match(/^新手戰鬥$/) != null) return exports.funny.Hari() ;
	
	if (trigger.match(/^戰鬥002$/) != null) return exports.funny.Hari2() ;
	
	if (trigger.match(/^戰鬥003|^吉貝爾easy/) != null) return exports.funny.Gbear() ;
	//風之世界樹守衛(初級)
	if (trigger.match(/^戰鬥011$/) != null) return exports.funny.easyKaze() ;
	//風之世界樹BOSS(初級)
	if (trigger.match(/^戰鬥013$/) != null) return exports.funny.easyKazeBoss() ;
	//SAO(1)
	if (trigger.match(/^戰鬥101$/) != null) return exports.funny.Lv1SAOKaze() ;
	if (trigger.match(/^戰鬥102$/) != null) return exports.funny.Lv1SAOFire() ;
	//SAO(1BOSS)
	if (trigger.match(/^戰鬥111$/) != null) return exports.funny.Lv1SAOKazeBoss() ;
	if (trigger.match(/^戰鬥122$/) != null) return exports.funny.Lv1SAOFireBoss() ;
	
	//////////////////////////怪物實戰設定區////////////////////////////////
	
	//哈里
	if (trigger.match(/^回合結束001$/) != null) return exports.MonsterHariTest.main(mainMsg[1]);
	if (trigger.match(/^回合結束002$/) != null) return exports.MonsterHariTest2.main(mainMsg[1]);
	if (trigger.match(/^回合結束003$/) != null) return exports.MonsterGbear.main(mainMsg[1]);
	//風之世界樹守衛(初級)
	if (trigger.match(/^回合結束011$/) != null) return exports.MonstereasyKaze.main(mainMsg[1]);
	//風之世界樹BOSS(初級)
	if (trigger.match(/^回合結束013$/) != null) return exports.MonstereasyKazeBoss.main(mainMsg[1]);
	//SAO(1)
	if (trigger.match(/^回合結束101$/) != null) return exports.MonLv1SAOKaze.main(mainMsg[1]);
	if (trigger.match(/^回合結束102$/) != null) return exports.MonLv1SAOFire.main(mainMsg[1]);
	//SAO(1BOSS)
	if (trigger.match(/^回合結束111$/) != null) return exports.MonLv1SAOKazeBoss.main(mainMsg[1]);
	if (trigger.match(/^回合結束122$/) != null) return exports.MonLv1SAOFireBoss.main(mainMsg[1]);
	
	
	
	
	////////////////////////BOXXXX///////////////////
	if (trigger.match(/^風迷宮武器箱$/) != null) return exports.KAZEBOX.main(mainMsg[1]);
	if (trigger.match(/^火迷宮武器箱$/) != null) return exports.FIREBOX.main(mainMsg[1]);
	
	/*tarot 指令
	if (trigger.match(/猜拳/) != null) {
		return RockPaperScissors(inputStr, mainMsg[1]);
	}
*/

  
}


module.exports = {
	parseInput:parseInput
};

