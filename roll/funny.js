var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 占卜&其他
////////////////////////////////////////


function BStyleFlagSCRIPTS() {
let rplyArr = ['\
「你的風湧是不可能骰出來的」', '\
「這種粗枝濫造的陷阱，狗才會掉進去」', '\
「幸運女神一定是在我這邊！」', '\
「這回合結束，遊戲也結束了。」', '\
「撐完這10秒就有數不盡的公車了。」', '\
「好想再跟威爾一起並肩作戰啊…」', '\
「放心吧，夏洛可醬，我們2人在一起沒有突破不了的困境」', '\
「我一定會回來的（必ず帰る！）」', '\
「接下吧，我最後的奧術波浪!」', '\
「啊啊啊，要贏啦，我終於要贏啦」', '\
「這就是高端玩家不合理的地方」', '\
「啊啊…為什麼會在這種時候、想起了堤恩村的事呢？」', '\
「能遇見你真是太好了。」', '\
「我終於…為你們報仇了！」', '\
「等到一切結束後，我有些話想跟妳說！」', '\
「這段時間我過的很開心啊。」', '\
把自己的武器借給其他人，然後說「待一切結束後記得還給我。」', '\
「真希望這場與你之間的決戰可以永遠持續下去。」', '\
「我們三個人要永永遠遠在一起喔！亞洛…」', '\
「這是我女友的照片，很可愛吧？」', '\
「請告訴他/她，我永遠愛他/她」', '\
「聽好，在我回來之前絕不要亂走動哦（いいか、俺が帰ってくるまでここを動くんじゃないぞ）」', '\
「要像一個乖孩子一樣等著我回來」', '\
「我去去就來（先に行って、すぐ戻るから）」', '\
「快逃！(逃げろう！/早く逃げろう！)」', '\
「對方只有一個人，大家一起上啊」', '\
「我就不信，這麼多人還殺不了他一個！」', '\
「幹，幹掉了嗎？（やったのか？）」', '\
「身體好輕」', '\
「可惡！你給我看著！（逃跑）」', '\
「躲在這裡就應該不會被發現了吧。」', '\
「我不會讓任何人死的。」', '\
「可惡！原來是這麼回事！」', '\
「跑這麼遠應該就行了。」', '\
「我已經甚麼都不怕了（もう何も恐くない）」', '\
「這XXX是什麼，怎麼之前沒見過（なんだこのXXX、見たことないな）」', '\
「什麽聲音……？就去看一下吧（:「何の音だ？ちょっと見てくる」', '\
「是我的錯覺嗎？/果然是錯覺/錯覺吧/可能是我（看/聽）錯了」', '\
「不愧是艾菲卡斯登之鬼呢！」', '\
「蘭恩大人，武運昌隆」', '\
「我已經天下無敵了~~」', '\
「這傢伙看起來真弱啊」', '\
「不管你是誰，這就是夜見流派的最終奧義。這一招我只會演示一次，你看好了！」', '\
「瞬殺○末日斬夜」', '\
「從來沒有人能逃過我的電子光劍。」', '\
「就讓你看看夜見流的精髓吧。」', '\
「接下我最後的奧術波浪吧！」', '\
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
你知道雪止其實是女孩身嗎？', '\
wwwwwwwwwwwwwwwww', '\
今天的天氣真好呢，對吧？。', '\
好棒ㄛ，3點了！（拿出蟹堡）', '\
野', '\
告訴你一個秘密，其實人家…（臉紅）', '\
怎麼了嗎？我正在看書呢（拿下眼鏡）', '\
作為一名世界線觀測者，還真不容易呢', '\
我在吃吉拿棒呢，你也要一起吃嗎？', '\
叫我幹嘛？（看起來超級不爽）', '\
(>﹏<)', '\
抽抽抽！買買買！', '\
人家今天身體有點不舒服呢。'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function C8763(){

	rply.text = 'スターバーストストリーム';

	return rply;

}

function ya(){

	rply.text = '格';

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
	SortIt,
	tarotRevReply,
	choice,
	tarotCardReply,
	C8763,
	ya
};
