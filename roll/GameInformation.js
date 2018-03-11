var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲公告
function main(InformationN) {
	///確定公告狀態
	if(InformationN == 0){
		rply.text = '【降臨】限時角色卡池「貝爾洛斯」正式開始！ \
			    \n\
			    \n 「真紅一閃！夜見流劍法達人貝爾洛斯，颯爽登場！」\
			    \n 活動時間：3/7 20：00～3/20 23：59\
			    \n 透過特別降臨，獲得限定角色吧!\
			    \n\
			    \n Pick Up\
			    \n 超限定{☆☆☆☆☆}\
			    \n   真紅一閃=貝爾洛斯\
			    \n\
			    \n 提供降臨方式:\
			    \n 單抽 5顆星輝石\
			    \n 十連 50顆星輝石\
			    \n\
			    \n 輸入 降臨 1 內容 即可確認降臨會登場的全部角色\
			    \n 想要降臨的話 請輸入 降臨 1 降臨方式(單抽,十連)\
			    \n';
	}else if(InformationN == 1){
		rply.text = '【共鳴】限時魔導書卡池「貝爾洛斯」正式開始！ \
			    \n\
			    \n 「真紅一閃！夜見流劍法達人貝爾洛斯，颯爽登場！」\
			    \n 活動時間：3/7 20：00～3/20 23：59\
			    \n 透過特別共鳴，獲得限定魔導書吧!\
			    \n\
			    \n 提供共鳴方式:\
			    \n 單抽 5顆星輝石\
			    \n 十連 50顆星輝石\
			    \n\
			    \n 輸入 共鳴 1 內容 即可確認降臨會登場的全部角色\
			    \n 想要共鳴的話 請輸入 共鳴 1 共鳴方式(單抽,十連)\
			    \n';
	}else if(InformationN == 2){

		 rply.text = '【活動】「貓咪爭奪戰：復甦之刻」慶祝活動 \
				\n\
				\n 第一彈：階級衝刺3/3～3/20\
				\n 期間階級提升到指定段位，將會獲得額外獎勵。\
				\n 同時於3/10日前完成角色登錄，將可額外獲得10粒星輝石！\
				\n\
				\n 第二彈：限時抽卡池「真紅一閃」開放！3/8～3/20\
				\n 限時卡池開放，掌握夜見流的劍術達人登場！\
				\n 新增6名角色，部分新增角色將不會在活動結束後加入常駐卡池。\
				\n\
				\n 第三彈：財富滾滾來！3/6～3/10\
				\n 在活動結束時，所有玩家將可獲得等同累積階級經驗2倍數量的G！趁此機會快快賺取G吧！\
				\n\
				\n 第四彈：王者封賞3/15\
				\n 在活動結束時，階級經驗累積前5名的玩家，將可獲得特別獎賞！\
				\n 第一名：星輝石5粒\
				\n 第二名：星輝石4粒\
				\n 第三名：星輝石3粒、100G\
				\n 第四名：星輝石3粒\
				\n 第五名：星輝石2粒\
				\n\
				\n 第五彈：限時PU「邪鬼夜劍」！3/8～3/20\
				\n 活動期間PU4☆「邪穢鬼毒=魑魅魍魎」降臨率翻倍!!!(同期4☆)，同時5☆提升至2%！\
  				\n';
	}else if(InformationN == 3){
		 rply.text = '【重要】 創角流程 \
				\n 登錄辦法：\
				\n\
				\n 1.給GM自己想要使用的暱稱\
				\n 2.GM登錄完成後抽取御三家\
				\n   輸入 降臨 0 首抽 取得御三家\
				\n 3.抽取完成後獲得100G作為起始資金';

	}else if(InformationN == 4){
		 rply.text = '【活動】 第一季貓爭競技賽開戰！\
				\n 與其他玩家戰鬥，獲得符合資格的獎賞吧！\
				\n\
				\n\
				\n 參賽時間：\
				\n 即日起～3/31\
				\n\
				\n 參賽資格：\
				\n 所有已登錄的玩家皆可參賽。\
				\n ※尚未登錄者請找GM登錄(施又齊、深海、雨君)\
				\n\
				\n 參賽辦法：\
				\n\
				\n 與玩家對戰，獲得階級經驗。\
				\n\
				\n F>E （需累積100分）贏一場+50 輸一場-10\
				\n E>D （需累積300分）贏一場+40 輸一場-20\
				\n D>C （需累積600分）贏一場+40 輸一場-25\
				\n C>B （需累積1000分）贏一場+40 輸一場-30\
				\n B>A （需累積1200分）贏一場+30輸一場-40\
				\n A>S （需累積1500分）贏一場+25輸一場-50\
				\n\
				\n ※C階以下有保護機制，不會階級下降\
				\n \
				\n \
				\n 參賽獎勵：\
				\n \
				\n 獎勵(+後為衝刺獎勵)\
				\n F>E：100G+200G\
				\n E>D：150G、1星輝石+250G\
				\n D>C：200G、2星輝石+1星輝石\
				\n C>B：3星輝石+300G、1星輝石\
				\n B>A：4星輝石+2星輝石\
				\n A>S：5星輝石+2星輝石，首次到達S階額外可獲得御三家不重複抽取一次機會(每位玩家僅能獲得一次)\
				\n \
				\n \
				\n 贏一場戰鬥獲得G的數量\
				\n \
				\n F→10G\
				\n E→20G\
				\n D→25G\
				\n C→50G\
				\n B→75G\
				\n A→100G\
				\n S→150G\
				\n \
				\n \
				\n \
				\n \
				\n 注意事項：\
				\n 1.C階及以上若是失敗至分數未達門檻則會掉階。\
				\n 2.A階升級S階需參加審查賽。\
				\n 3.與衝刺活動連動，連動時間結束前皆可獲得額外獎勵。\
				\n 4.部分活動會有階級限制，請多多提升階級。\
				\n 5.每月1日重置階級，達到S階者可額外獲得1000G與5星輝石作為冠軍賞。\
				\n 6.已達到B階級或以上的玩家，重置後會回到C階。C階及以下，會重置回F階。';

	}else if(InformationN == 5){
		rply.text = '【降臨】常駐角色卡池 \
			    \n\
			    \n\
			    \n ★：特殊稀有角色，無法通過抽獎取得\
			    \n ☆：一般角色45%\
			    \n ☆☆：一般角色30%\
			    \n ☆☆☆：較稀有角色15%\
			    \n ☆☆☆☆：限定角色、一般卡池頂9%\
			    \n ☆☆☆☆☆：超限定角色1%\
			    \n\
			    \n 提供降臨方式:\
			    \n 單抽 5顆星輝石\
			    \n 十連 50顆星輝石\
			    \n\
			    \n 輸入 降臨 2 內容 即可確認降臨會登場的全部角色\
			    \n 想要降臨的話 請輸入 降臨 2 降臨方式(單抽,十連)\
			    \n';
	}else if(InformationN == 6){
		rply.text = '【共鳴】常駐魔導書卡池 \
			    \n\
			    \n\
			    \n ★：特殊稀有魔導書，無法通過抽獎取得\
			    \n ☆：一般魔導書45%\
			    \n ☆☆：一般魔導書30%\
			    \n ☆☆☆：較稀有魔導書15%\
			    \n ☆☆☆☆：限定魔導書、一般卡池頂9%\
			    \n ☆☆☆☆☆：超限定魔導書1%\
			    \n\
			    \n 提供降臨方式:\
			    \n 單抽 5顆星輝石\
			    \n 十連 50顆星輝石\
			    \n\
			    \n 輸入 共鳴 2 內容 即可確認共鳴會登場的全部魔導書\
			    \n 想要共鳴的話 請輸入 共鳴 2 共鳴方式(單抽,十連)\
			    \n';
	}else if(InformationN == null){

		 rply.text = '【公告目錄】目前遊戲中的公告一覽表 \
				   \n\
				   \n  0 【降臨】限時角色卡池「貝爾洛斯」正式開始！\
				   \n  1 【共鳴】限時魔導書卡池「貝爾洛斯」正式開始！\
				   \n  2 【活動】「貓咪爭奪戰：復甦之刻」慶祝活動\
				   \n  3 【重要】創角流程\
				   \n  4 【活動】第一季貓爭競技賽開戰！\
				   \n  5 【降臨】常駐角色卡池\
				   \n  6 【共鳴】常駐魔導書卡池\
				   \n\
				   \n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';
	}else{

		 rply.text = '找不到公告編號['+ InformationN + ']的公告喔\
				\n\
				\n【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【降臨】限時角色卡池「貝爾洛斯」正式開始！\
				\n  1 【共鳴】限時魔導書卡池「貝爾洛斯」正式開始！\
				\n  2 【活動】「貓咪爭奪戰：復甦之刻」慶祝活動\
				\n  3 【重要】創角流程\
				\n  4 【活動】第一季貓爭競技賽開戰！\
				\n  5 【降臨】常駐角色卡池\
				\n  6 【共鳴】常駐魔導書卡池\
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
