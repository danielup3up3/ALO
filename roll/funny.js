var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 占卜&其他
////////////////////////////////////////


function BStyleFlagSCRIPTS() {
let rplyArr = ['\
「這種粗枝濫造的陷阱，狗才會掉進去」', '\
「幸運女神一定是在我這邊！」', '\
「這回合結束，遊戲也結束了。」', '\
「撐完這10秒就有數不盡的公車了。」', '\
「放心吧，我們2人在一起沒有突破不了的困境」', '\
「我一定會回來的（必ず帰る！）」', '\
「啊啊啊，要贏啦，我終於要贏啦」', '\
「這就是高端玩家不合理的地方」', '\
「能遇見你真是太好了。」', '\
「我終於…為你們報仇了！」', '\
「等到一切結束後，我有些話想跟妳說！」', '\
「這段時間我過的很開心啊。」', '\
把自己的武器借給其他人，然後說「待一切結束後記得還給我。」', '\
「真希望這場與你之間的決戰可以永遠持續下去。」', '\
「這是我女友的照片，很可愛吧？」', '\
「要像一個乖孩子一樣等著我回來」', '\
「對方只有一個人，大家一起上啊」', '\
「我就不信，這麼多人還殺不了他一個！」', '\
「幹，幹掉了嗎？（やったのか？）」', '\
「身體好輕」', '\
「我不會讓任何人死的。」', '\
「我已經天下無敵了~~」', '\
「這傢伙看起來真弱啊」', '\
「不管你是誰，這就是最終奧義。這一招我只會演示一次，你看好了！」', '\
「從來沒有人能逃過我的劍。」', '\
「騙人的吧，我們不是朋友嗎？」', '\
「我的策略已經完美到毫無破綻啦」'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}
	
function randomReply() {
let rplyArr = ['\
聽說吹捧深海的話就能升級成為vip喔', '\
這位玩家，你今天看起來有點不幸呢。 \n（幫你點開轉蛋頁面）', '\
嘿，噁男，你是不是在期待摸我的頭，就會莫名地噴出一堆愛心？。', '\
……', '\
就算是導航妖精，我也是很忙的', '\
wwwwwwwwwwwwwwwww', '\
今天的天氣真好呢，對吧？。', '\
好棒ㄛ，3點了！（拿出蟹堡）', '\
野', '\
怎麼了嗎？', '\
作為一名世界線觀測者，還真不容易呢', '\
叫我幹嘛？（看起來超級不爽）', '\
(>﹏<)', '\
抽抽抽！買買買！', '\
人家身體有點不舒服呢。'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}



function C8763(){

	rply.text = 'スターバーストストリーム!! -99999';

	return rply;

}

function menu(){

	rply.text = ' 【世界樹】 \
			    \n\
			    \n 「呼叫指令:世界樹」\
                   \n 【招募】\
			    \n\
			    \n 「呼叫指令:夥伴招募」\
                   \n 【活動公告】\
			    \n\
			    \n 「呼叫指令:公告」\
                   \n 【副本】空中浮游城艾恩葛朗特\
			    \n\
			    \n 「尚未開放」\
		\n 【商店】\
			    \n\
			    \n 「尚未開放」';

	return rply;
	
}


function ya(){

	rply.text = '格';

	return rply;
	
}

function zA(){

	rply.text = '斷';

	return rply;
	
}

function randomLuck(TEXT) {
let rplyArr = ['超吉','超級上吉','大吉','吉','中吉','小吉','吉','小吉','吉','吉','中吉','吉','中吉','吉','中吉','小吉','末吉','吉','中吉','小吉','末吉','中吉','小吉','小吉','吉','小吉','末吉','中吉','小吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}
	
	
////////////////////////////////////////
//////////////// Funny
////////////////////////////////////////
/* 猜拳功能 */
function RockPaperScissors(HandToCal, text) {
	let returnStr = '';
	if (HandToCal.match(/石頭|布|剪刀|1|2|3/) != null) {
	let aHand = ['石頭','布','剪刀'];
	HandToCal = aHand[Math.floor((Math.random() * (aHand.length)) + 0)];
	}
	var hand = rollbase.FunnyDice(3); // 0:石頭 1:布 2:剪刀

	switch (hand) {
	case 0: //石頭
		returnStr = '我出石頭！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '哼哼你輸惹';
		else if (HandToCal.match(/石頭|2/) != null) returnStr += '看來我們不相上下阿';
		else if (HandToCal.match(/布|3/) != null) returnStr += '你好像有點強！';
		else returnStr += '欸不對喔你亂出！';

		break;

	case 1: //布
		returnStr = '我出布！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '讓你一次而已啦！';
		else if (HandToCal.match(/布|2/) != null) returnStr += '原來平手...沒什麼嘛！';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '哈哈你看看你！';
		else returnStr += '別亂出阿會壞掉的';

		break;

	case 2: //剪刀
		returnStr = '我出剪刀！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '平手 (  艸)';
		else if (HandToCal.match(/布|2/) != null) returnStr += '贏了 (｀・ω・´)b';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '輸惹 ゜。。゜(ノД‵)ノ・゜';
		else returnStr += '亂出打你喔 (｀・ω・´)凸';

		break;

	default:
		returnStr = '我出的是...欸不對你沒出喔！\n';
		break;
	}

	rply.text = returnStr;
	return rply;
}
////////////////////////////////////////
//////////////// PM資訊
////////////////////////////////////////
function popo(){
	rply.text = 'Lv.5 波波(圖鑑代碼0016)\
\n 捕獲成功率:(75-剩餘HP)% \
				\n HP 22/22 ';
	return rply;
}

function duckya(){
	rply.text = 'Lv.8 可達鴨(圖鑑代碼0054)\
\n 捕獲成功率:(60-剩餘HP)% \
				\n HP 28/28 ';
	return rply;
}

function tantan(){
	rply.text = 'Lv.3 探探鼠(圖鑑代碼0504)\
\n 捕獲成功率:(80-剩餘HP)% \
				\n HP 18/18 ';
	return rply;
}


////////////////////////////////////////
//////////////// 怪物資訊
////////////////////////////////////////
 
function Hari(){
	rply.text = 'Lv.5 火精靈侍衛A(怪物代碼001\
				\n HP 1000/1000 \
	\n \
        \n 我方HP為1800 ，當受到敵人攻擊時需宣告自己的剩餘血量 宣告方式 "當前血量/最大血量" \
	\n 現在試著攻擊吧 ，請輸入"普通斬擊" 給予對手200點傷害後，再輸入指令【回合結束(代碼) (敵人剩餘血量) \
	\n 像這次就要輸入: "回合結束001 800" 非常抱歉怪物的剩餘血量需要由玩家方來計算，試著輸入看看吧! ';
	return rply;
}

function Hari2(){
	rply.text = 'Lv.5 火精靈侍衛B(怪物代碼002\
				\n HP 2000/2000 ';
	return rply;
}


function Gbear(){
	rply.text = 'Lv.50 吉貝爾(怪物代碼003\
				\n HP 10000/10000 ';
	return rply;
}

function Event1(){
	rply.text = 'Lv.50 細劍少女靜奈normal(怪物代碼997\
				\n HP 50000/50000 ';
	return rply;
}

function Event2(){
	rply.text = 'Lv.80 細劍少女靜奈hard(怪物代碼998\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}

function Event3(){
	rply.text = 'Lv.90 細劍少女靜奈veryhard(怪物代碼999\
				\n HP 5,000,000/5,000,000 \
	\n 怒氣槽0/4 ';
	return rply;
}

function KAZEBOSSEASY(){
	rply.text = 'Lv.50 風王芬里爾(風) (怪物代碼2001\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}

function SkyEasy(){
	rply.text = 'Lv.50 奧伯龍(光) (怪物代碼1001\
				\n HP 5,000,000/5,000,000 ';
	return rply;
}



function easyKaze(){
	rply.text = 'Lv.25 風之世界樹守衛(怪物代碼011\
				\n HP 6,000/6,000 ';
	return rply;
}

function easyKazeBoss(){
	rply.text = 'Lv.30 BOSS神樹劍士(怪物代碼013\
				\n HP 200,000/200,000 ';
	return rply;
}

function Lv1SAOKaze(){
	rply.text = 'Lv.20 迷宮風妖(怪物代碼101\
				\n HP 8,000/8,000 ';
	return rply;
}

function Lv1SAOKazeBoss(){
	rply.text = 'Lv.30 BOSS涅里梅斯(怪物代碼111\
				\n HP 60,000/60,000 ';
	return rply;
}

function Lv1SAOFire(){
	rply.text = 'Lv.20 炙熱野狼(怪物代碼102\
				\n HP 8,000/8,000 ';
	return rply;
}

function Lv1SAOFireBoss(){
	rply.text = 'Lv.30 BOSS武士之魂(怪物代碼122\
				\n HP 60,000/60,000 ';
	return rply;
}

function Lv1SAOWater(){
	rply.text = 'Lv.20 蒼之遺魂(怪物代碼103\
				\n HP 8,000/8,000 ';
	return rply;
}

function Lv1SAOWaterBoss(){
	rply.text = 'Lv.30 BOSS焚海(怪物代碼133\
				\n HP 60,000/60,000 ';
	return rply;
}

function Lv1SAODark(){
	rply.text = 'Lv.20 黑夜小僧(怪物代碼104\
				\n HP 8,000/8,000 ';
	return rply;
}

function Lv1SAODarkBoss(){
	rply.text = 'Lv.30 BOSS赤夜巨靈(怪物代碼144\
				\n HP 60,000/60,000 ';
	return rply;
}

function Lv1SAOSoil(){
	rply.text = 'Lv.20 石像魔(怪物代碼105\
				\n HP 8,000/8,000 ';
	return rply;
}

function Lv1SAOSoilBoss(){
	rply.text = 'Lv.30 BOSS詛咒石魔(怪物代碼155\
				\n HP 60,000/60,000 ';
	return rply;
}

function Lv1SAONone(){
	rply.text = 'Lv.20 虛無鏡魔(怪物代碼106\
				\n HP 8,000/8,000 ';
	return rply;
}

function Lv1SAONoneBoss(){
	rply.text = 'Lv.30 BOSS阿爾法(怪物代碼166\
				\n HP 60,000/60,000 ';
	return rply;
}



//////////////////////////////////////
function Lv2SAOKaze(){
	rply.text = 'Lv.50 迷宮風妖(怪物代碼201\
				\n HP 50,000/50,000 ';
	return rply;
}

function Lv2SAOKazeBoss(){
	rply.text = 'Lv.50 BOSS涅里梅斯(怪物代碼211\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}

function Lv2SAOFire(){
	rply.text = 'Lv.50 炙熱野狼(怪物代碼202\
				\n HP 50,000/50,000 ';
	return rply;
}

function Lv2SAOFireBoss(){
	rply.text = 'Lv.50 BOSS武士之魂(怪物代碼222\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}

function Lv2SAOWater(){
	rply.text = 'Lv.50 蒼之遺魂(怪物代碼203\
				\n HP 50,000/50,000 ';
	return rply;
}

function Lv2SAOWaterBoss(){
	rply.text = 'Lv.50 BOSS焚海(怪物代碼233\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}

function Lv2SAODark(){
	rply.text = 'Lv.50 黑夜小僧(怪物代碼204\
				\n HP 50,000/50,000 ';
	return rply;
}

function Lv2SAODarkBoss(){
	rply.text = 'Lv.50 BOSS赤夜巨靈(怪物代碼244\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}

function Lv2SAOSoil(){
	rply.text = 'Lv.50 石像魔(怪物代碼205\
				\n HP 50,000/50,000 ';
	return rply;
}

function Lv2SAOSoilBoss(){
	rply.text = 'Lv.50 BOSS詛咒石魔(怪物代碼255\
				\n HP 1,000,000/1,000,000 ';
	return rply;
}





////////////////////////////////////////
//////////////// Tarot塔羅牌
////////////////////////////////////////
function MultiDrawTarot(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 3; i++) {
		if (i == 0) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '現在: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);
	}

	} else if (type == 2) //塞爾特大十字
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 10; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 10; i++) {
		if (i == 0) returnStr += '現況: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) {
		if (revs[i] == 0) //正位
			returnStr += '助力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '阻力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 2) returnStr += '目標: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 3) returnStr += '基礎: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 4) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 5) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 6) returnStr += '自我: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 7) returnStr += '環境: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 8) {
		if (revs[i] == 0) //正位
			returnStr += '希望: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '恐懼: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 9) returnStr += '結論: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

	}

	} else {

	if (text == null)
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}

function NomalDrawTarot(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}


function tarotRevReply(count) {
	let returnStr = '';

	if (count == 0) returnStr = '＋';
	if (count == 1) returnStr = '－';

	return returnStr;
	//return rply;
}


function tarotCardReply(count) {
	let returnStr = '';
	// returnStr = count + '愚者';
	if (count == 0) returnStr = '愚者';
	if (count == 1) returnStr = '魔術師';
	if (count == 2) returnStr = '女祭司';
	if (count == 3) returnStr = '女皇';
	if (count == 4) returnStr = '皇帝';
	if (count == 5) returnStr = '教皇';
	if (count == 6) returnStr = '戀人';
	if (count == 7) returnStr = '戰車';
	if (count == 8) returnStr = '力量';
	if (count == 9) returnStr = '隱者';
	if (count == 10) returnStr = '命運之輪';
	if (count == 11) returnStr = '正義';
	if (count == 12) returnStr = '吊人';
	if (count == 13) returnStr = '死神';
	if (count == 14) returnStr = '節制';
	if (count == 15) returnStr = '惡魔';
	if (count == 16) returnStr = '高塔';
	if (count == 17) returnStr = '星星';
	if (count == 18) returnStr = '月亮';
	if (count == 19) returnStr = '太陽';
	if (count == 20) returnStr = '審判';
	if (count == 21) returnStr = '世界';
	if (count == 22) returnStr = '權杖一';
	if (count == 23) returnStr = '權杖二';
	if (count == 24) returnStr = '權杖三';
	if (count == 25) returnStr = '權杖四';
	if (count == 26) returnStr = '權杖五';
	if (count == 27) returnStr = '權杖六';
	if (count == 28) returnStr = '權杖七';
	if (count == 29) returnStr = '權杖八';
	if (count == 30) returnStr = '權杖九';
	if (count == 31) returnStr = '權杖十';
	if (count == 32) returnStr = '權杖侍者';
	if (count == 33) returnStr = '權杖騎士';
	if (count == 34) returnStr = '權杖皇后';
	if (count == 35) returnStr = '權杖國王';
	if (count == 36) returnStr = '聖杯一';
	if (count == 37) returnStr = '聖杯二';
	if (count == 38) returnStr = '聖杯三';
	if (count == 39) returnStr = '聖杯四';
	if (count == 40) returnStr = '聖杯五';
	if (count == 41) returnStr = '聖杯六';
	if (count == 42) returnStr = '聖杯七';
	if (count == 43) returnStr = '聖杯八';
	if (count == 44) returnStr = '聖杯九';
	if (count == 45) returnStr = '聖杯十';
	if (count == 46) returnStr = '聖杯侍者';
	if (count == 47) returnStr = '聖杯騎士';
	if (count == 48) returnStr = '聖杯皇后';
	if (count == 49) returnStr = '聖杯國王';
	if (count == 50) returnStr = '寶劍一';
	if (count == 51) returnStr = '寶劍二';
	if (count == 52) returnStr = '寶劍三';
	if (count == 53) returnStr = '寶劍四';
	if (count == 54) returnStr = '寶劍五';
	if (count == 55) returnStr = '寶劍六';
	if (count == 56) returnStr = '寶劍七';
	if (count == 57) returnStr = '寶劍八';
	if (count == 58) returnStr = '寶劍九';
	if (count == 59) returnStr = '寶劍十';
	if (count == 60) returnStr = '寶劍侍者';
	if (count == 61) returnStr = '寶劍騎士';
	if (count == 62) returnStr = '寶劍皇后';
	if (count == 63) returnStr = '寶劍國王';
	if (count == 64) returnStr = '錢幣一';
	if (count == 65) returnStr = '錢幣二';
	if (count == 66) returnStr = '錢幣三';
	if (count == 67) returnStr = '錢幣四';
	if (count == 68) returnStr = '錢幣五';
	if (count == 69) returnStr = '錢幣六';
	if (count == 70) returnStr = '錢幣七';
	if (count == 71) returnStr = '錢幣八';
	if (count == 72) returnStr = '錢幣九';
	if (count == 73) returnStr = '錢幣十';
	if (count == 74) returnStr = '錢幣侍者';
	if (count == 75) returnStr = '錢幣騎士';
	if (count == 76) returnStr = '錢幣皇后';
	if (count == 77) returnStr = '錢幣國王';
	if (count == 78) returnStr = '空白牌';
	return returnStr;
	//return rply;

}
////////////////////////////////////////
//////////////// choice 及SORT
////////////////////////////////////////
function choice(input,str) {
	let a = input.replace(str[0], '').match(/\S+/ig);
	rply.text = str[0] + '['+ a + '] → ' + a[rollbase.Dice(a.length)-1];
	return rply;
}

 function SortIt(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + ' → ['+ a + ']' ;
	return rply;
 }

module.exports = {
	BStyleFlagSCRIPTS,
	randomReply,
	randomLuck,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	easyKaze,
	easyKazeBoss,
	SortIt,
	tarotRevReply,
	choice,
	tarotCardReply,
	C8763,
	ya,
	menu,
	Hari,
	SkyEasy,
	Lv1SAOKaze,
	Lv1SAOKazeBoss,
	Lv1SAOFire,
	Lv1SAOFireBoss,
	Lv1SAOWater,
	Lv1SAOWaterBoss,
	Lv1SAODark,
	Lv1SAODarkBoss,
	Lv1SAOSoil,
	Lv1SAOSoilBoss,
	Lv1SAONone,
	Lv1SAONoneBoss,
	Gbear,
	Event1,
	Event2,
	Event3,
	popo,
	duckya,
	tantan,
	KAZEBOSSEASY,
	Lv2SAOKaze,
	Lv2SAOKazeBoss,
	Lv2SAOFire,
	Lv2SAOFireBoss,
	Lv2SAOWater,
	Lv2SAOWaterBoss,
	Lv2SAODark,
	Lv2SAODarkBoss,
	Lv2SAOSoil,
	Lv2SAOSoilBoss,
	Hari2,
	zA
};
