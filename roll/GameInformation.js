var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲公告
function main(InformationN) {
	///確定公告狀態
	if(InformationN == 0){
		rply.text = '【逢魔時刻的高校生】系列第一彈主題卡池 SSR出貨率翻倍! \
			    \n\
			    \n 「第一彈3星角色群颯爽登場！」\
			    \n 活動時間：6/25 00：00～7/3 23：59\
			    \n 透過緣之符，獲得角色吧!\
			    \n\
			    \n Pick Up\
			    \n 稀有3星\
			    \n   現在機率8%!!\
			    \n\
			    \n 提供招募方式:\
			    \n 單抽 緣之符*1\
			    \n 十一連 緣之符*10\
			    \n\
			    \n 輸入 師團  即可確認抽卡會登場的全部角色\
			    \n 想要招募的話 請輸入 角色相遇\
			    \n';
	}else if(InformationN == 1){
		rply.text = '【試煉】試煉塔dhfe \
			    \n\
			    \n 504 ggjttey\
			    \n';
	}else if(InformationN == 2){

		 rply.text = '【活動】「子夜之時莫比烏斯」封測慶祝活動 \
				\n\
				\n 第一彈：等級衝刺\
				\n 文字\
				\n 文字\
				\n\
				\n 第二彈：【逢魔時刻】第一彈主題卡池 SSR出貨率翻倍!\
				\n 第一彈卡池開放，主角隊的角色們登場！\
				\n \
				\n\
				\n 第三彈：闇的開拓者們 \
				\n 在活動期間時，所有關卡消耗體力減半！趁此機會加強自己！\
				\n\
  				\n';
	}else if(InformationN == 3){
		 rply.text = '【重要】 創角流程 \
				\n 登錄辦法：\
				\n\
				\n 1.給GM自己想要使用的暱稱\
				\n 2.進行新手登入\
				\n   輸入 新手登入 第一步 開始教學\
				\n 3.完成序章劇情後可以開始分配自己的初始能力素值並自製成角色資訊卡';

	}else if(InformationN == 4){
		rply.text = '【師團】角色圖鑑 \
			    \n\
			    \n\
			    \n 暫無更新(最後更新日:6/12) \
			    \n';
	}else if(InformationN == 5){
		rply.text = '【商店】商店功能 \
			    \n\
			    \n\
			    \n 暫無開放\
			    \n';
	}else if(InformationN == null){

		 rply.text = '【公告目錄】目前遊戲中的公告一覽表 \
				   \n\
				   \n  0 【逢魔時刻】第一彈主題卡池\
				   \n  1 【試煉】試煉塔開放第1層挑戰\
				   \n  2 【活動】「莫比烏斯封測」慶祝活動\
				   \n  3 【重要】創角流程\
				   \n  4 【師團】新駐圖鑑角色\
				   \n  5 【商店】商店功能 \
				   \n\
				   \n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';
	}else{

		 rply.text = '找不到公告編號['+ InformationN + ']的公告喔\
				\n\
				\n【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【逢魔時刻】第一彈主題卡池\
				   \n  1 【試煉】試煉塔開放第1層挑戰\
				   \n  2 【活動】「莫比烏斯封測」慶祝活動\
				   \n  3 【重要】創角流程\
				   \n  4 【師團】新駐圖鑑角色\
				   \n  5 【商店】商店功能 \
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
