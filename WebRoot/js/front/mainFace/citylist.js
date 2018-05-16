
var ACODE = ACODE || {};
ACODE = {

	/**
     * 根据input输入地市首字母返回对应地市
     * input
     * returns {*} 未查询到返回 ""
     */
    getAreaCodeLetter : function(input){
		var value = $.trim(input.toLowerCase());
		var _areacode =[];
		var f = 0;
        if(this.isEmpty(value)) return "";
        for(var i in _INPUTTOAREACODE){
            if(_INPUTTOAREACODE[i].firstLetter.indexOf(value) > -1){
				_areacode[f] = new _acode(_INPUTTOAREACODE[i].code,_INPUTTOAREACODE[i].theName,_INPUTTOAREACODE[i].areaCode);
				f += 1;
                //return _INPUTTOAREACODE[i].theName;
            }
        }
        return _areacode;
    },
	/**
     * 根据input输入地市全拼返回对应地市
     * input
     * returns {*} 未查询到返回 ""
     */
    getAreaCodeSpelling : function(input){
		var value = $.trim(input.toLowerCase());
		var _areacode =[];
		var f = 0;
        if(this.isEmpty(value)) return "";
        for(var i in _INPUTTOAREACODE){
            if(_INPUTTOAREACODE[i].spelling.indexOf(value) > -1){
				_areacode[f] = new _acode(_INPUTTOAREACODE[i].code,_INPUTTOAREACODE[i].theName,_INPUTTOAREACODE[i].areaCode);
				f += 1;
                //return _INPUTTOAREACODE[i].theName;
            }
        }
        return _areacode;
    },
	/**
     * 根据input输入中文返回对应地市
     * input
     * returns {*} 未查询到返回 ""
     */
    getAreaCodeTheName : function(input){
		var value = $.trim(input);
		var _areacode =[];
		var f = 0;
        if(this.isEmpty(value)) return "";
        for(var i in _INPUTTOAREACODE){
            if(_INPUTTOAREACODE[i].theName.indexOf(value) > -1){
				_areacode[f] = new _acode(_INPUTTOAREACODE[i].code,_INPUTTOAREACODE[i].theName,_INPUTTOAREACODE[i].areaCode);
				f += 1;
                //return _INPUTTOAREACODE[i].theName;
            }
        }
        return _areacode;
    },
	/**
     * 字符串非空判断
     *  str
     *  {boolean}
     */
    isEmpty : function(str){
        return null==str||undefined==str||""==str;
    }
};



/**
 * 省份搜索配置
 *  code
 *  theName
 *  spelling
 *  first letter
 *  areaCode
 */
var _INPUTTOAREACODE=[
    new _inputtoareacode("010","北京","beijing","bj","010"),
    
    new _inputtoareacode("311","邯郸","handan","hd","0310"),
	new _inputtoareacode("311","承德","chengde","cd","0314"),
	new _inputtoareacode("311","邢台","xingtai","xt","0319"),
	new _inputtoareacode("311","唐山","tangshan","ts","0315"),
    new _inputtoareacode("311","张家口","zhangjiakou","zjk","0313"),
	new _inputtoareacode("311","秦皇岛","qinhuangdao","qhd","0335"),
	new _inputtoareacode("311","石家庄","shijiazhuang","sjz","0311"),
	new _inputtoareacode("311","衡水","hengshui","hs","0318"),
    new _inputtoareacode("311","保定","baoding","bd","0312"),
	new _inputtoareacode("311","沧州","cangzhou","cz","0317"),
	new _inputtoareacode("cwn","廊坊","langfang","lf","0316"),
	
	new _inputtoareacode("021","上海","shanghai","sh","021"),
	
    new _inputtoareacode("871","文山壮族苗族自治州","wenshanzhuangzuzizhizhou","wszzzzz","0876"),
	new _inputtoareacode("871","普洱","puer","pe","0879"),
	new _inputtoareacode("871","红河哈尼族彝族自治州","honghehanizuyizuzizhizhou","hhhnzyzzzz","0873"),
	new _inputtoareacode("871","迪庆藏族自治州","diqingzangzuzizhizhou","dqzzzzz","0887"),
    new _inputtoareacode("871","怒江傈僳族自治州","nujiangsusuzuzizhizhou","njsszzzz","0886"),
	new _inputtoareacode("871","玉溪","yuxi","yx","0877"),
	new _inputtoareacode("871","楚雄彝族自治州","chuxiongyizuzizhizhou","cxyzzzz","0878"),
	new _inputtoareacode("871","昆明","kunming","km","0871"),
    new _inputtoareacode("871","保山","baoshan","bs","0875"),
	new _inputtoareacode("871","丽江","lijiang","lj","0888"),
	new _inputtoareacode("871","昭通","zhaotong","zt","0870"),
	new _inputtoareacode("871","德宏傣族景颇族自治州","dehongdaizujingpozuzizhizhou","dhdzjpzzzz","0692"),
    new _inputtoareacode("871","曲靖","qujing","qj","0874"),
	new _inputtoareacode("871","大理白族自治州","dalibaizuzizhizhou","dlbzzzz","0872"),
	new _inputtoareacode("871","西双版纳傣族自治州","xishuangbannadaizuzizhizhou","xsbndzzzz","0691"),
	new _inputtoareacode("871","临沧","lincang","lc","0883"),
	
    new _inputtoareacode("591","福州","fuzhou","fz","0591"),
	new _inputtoareacode("591","龙岩","longyan","ly","0597"),
	new _inputtoareacode("591","三明","sanming","sm","0598"),
	new _inputtoareacode("591","莆田","putian","pt","0594"),
    new _inputtoareacode("591","南平","nanping","np","0599"),
	new _inputtoareacode("591","厦门","xiamen","xm","0592"),
	new _inputtoareacode("591","漳州","zhangzhou","zz","0596"),
	new _inputtoareacode("591","宁德","ningding","nd","0593"),
    new _inputtoareacode("591","泉州","quanzhou","qz","0595"),
    
	new _inputtoareacode("791","景德镇","jingdezhen","jdz","0798"),
	new _inputtoareacode("791","新余","xinyu","xy","0790"),
	new _inputtoareacode("791","萍乡","pingxiang","px","0799"),
    new _inputtoareacode("791","抚州","fuzhou","fz","0794"),
	new _inputtoareacode("791","南昌","nanchang","nc","0791"),
	new _inputtoareacode("791","赣州","ganzhou","gz","0797"),
	new _inputtoareacode("791","九江","jiujiang","jj","0792"),
    new _inputtoareacode("791","吉安","jian","ja","0796"),
	new _inputtoareacode("791","鹰潭","yingtan","yt","0701"),
	new _inputtoareacode("791","宜春","yichun","yc","0795"),
	new _inputtoareacode("791","上饶","shangrao","sr","0793"),
	
    new _inputtoareacode("971","黄南藏族自治州","huangnanzangzuzizhizhou","hnzzzzz","0973"),
	new _inputtoareacode("971","玉树藏族自治州","yushuzangzuzizhizhou","yszzzzz","0976"),
	new _inputtoareacode("971","海东地区","haidongdiqu","hddq","0972"),
	new _inputtoareacode("971","西宁","xining","xn","0971"),
    new _inputtoareacode("971","果洛藏族自治州","guoluozangzuzizhizhou","glzzzzz","0975"),
	new _inputtoareacode("971","海南藏族自治州","hainanzangzuzizhizhou","hnzzzzz","0974"),
	new _inputtoareacode("971","海西蒙古族藏族自治州","haiximengguzuzangzuzizhizhou","hxmgzzzzzz","0977"),
	new _inputtoareacode("971","海北藏族自治州","haibeizangzuzizhizhou","hbzzzzz","0970"),
	
    new _inputtoareacode("451","佳木斯","jiamusi","jms","0454"),
    new _inputtoareacode("451","鹤岗","hegang","hg","0468"),
	new _inputtoareacode("451","绥化","suihua","sh","0455"),
	new _inputtoareacode("451","伊春","yichun","yc","0458"),
	new _inputtoareacode("451","七台河","qitaihe","qth","0464"),
    new _inputtoareacode("451","哈尔滨","haerbin","heb","0451"),
	new _inputtoareacode("451","鸡西","jixi","jx","0467"),
	new _inputtoareacode("451","齐齐哈尔","qiqihaer","qqhe","0452"),
	new _inputtoareacode("451","双鸭山","shuangyashan","sys","0469"),
	new _inputtoareacode("451","牡丹江","mudanjiang","mdj","0453"),
	new _inputtoareacode("451","大庆","daqing","dq","0459"),
	new _inputtoareacode("451","黑河","heihe","hh","0456"),
	new _inputtoareacode("451","大兴安岭地区","daxinganlingdiqu","dxaldq","0457"),
	
	new _inputtoareacode("025","宿迁","suqian","sq","0527"),
	new _inputtoareacode("025","苏州","suzhou","sz","0512"),
	new _inputtoareacode("025","淮安","huaian","ha","0517"),
    new _inputtoareacode("025","常州","changzhou","cz","0519"),
	new _inputtoareacode("025","连云港","lianyungang","lyg","0518"),
	new _inputtoareacode("025","盐城","yancheng","yc","0515"),
	new _inputtoareacode("025","南通","nantong","nt","0513"),
    new _inputtoareacode("025","扬州","yangzhou","yz","0514"),
	new _inputtoareacode("025","南京","nanjing","nj","025"),
	new _inputtoareacode("025","无锡","wuxi","wx","0510"),
	new _inputtoareacode("025","泰州","taizhou","tz","0523"),
    new _inputtoareacode("025","徐州","xuzhou","xz","0516"),
	new _inputtoareacode("025","镇江","zhenjiang","zj","0511"),
	
	new _inputtoareacode("027","潜江","qianjiang","qj","0728"),
	new _inputtoareacode("027","襄樊","xiangfan","xf","0710"),
    new _inputtoareacode("027","黄石","huangshi","jms","0714"),
    new _inputtoareacode("027","荆门","jingmen","jm","0724"),
	new _inputtoareacode("027","黄冈","huanggang","hg","0713"),
	new _inputtoareacode("027","咸宁","xianning","xn","0715"),
	new _inputtoareacode("027","鄂州","ezhou","ez","0711"),
    new _inputtoareacode("027","荆州","jinghzou","jz","0716"),
	new _inputtoareacode("027","神农架林区","shennongjialinqu","snjlq","0719"),
	new _inputtoareacode("027","仙桃","xiantao","xt","0728"),
	new _inputtoareacode("027","武汉","wuhan","wh","027"),
	new _inputtoareacode("027","随州","suizhou","sz","0722"),
	new _inputtoareacode("027","宜昌","yichang","yc","0717"),
	new _inputtoareacode("027","孝感","xiaogan","xg","0712"),
	new _inputtoareacode("027","江汉地区","jianghandiqu","jhdq","0728"),
	new _inputtoareacode("027","十堰","shiyan","sy","0719"),
	new _inputtoareacode("027","恩施土家族苗族自治州","enshitujiazumiaozuzizhizhou","estjzmzzzz","0718"),
	
	new _inputtoareacode("571","湖州","huzhou","hz","0572"),
	new _inputtoareacode("571","杭州","hangzhou","hz","0571"),
	new _inputtoareacode("571","宁波","ningbo","nb","0574"),
	new _inputtoareacode("571","嘉兴","jiaxing","jx","0573"),
	new _inputtoareacode("571","金华","jinhua","jh","0579"),
	new _inputtoareacode("571","温州","wenzhou","wz","0577"),
	new _inputtoareacode("571","绍兴","shaoxing","sx","0575"),
	new _inputtoareacode("571","衢州","quzhou","qz","0570"),
	new _inputtoareacode("571","台州","taizhou","tz","0576"),
	new _inputtoareacode("571","舟山","zhoushan","zs","0580"),
	new _inputtoareacode("571","丽水","lishui","ls","0578"),
	
	new _inputtoareacode("029","宝鸡","baoji","bj","0917"),
	new _inputtoareacode("029","榆林","yulin","yl","0912"),
	new _inputtoareacode("029","延安","yanan","ya","0911"),
	new _inputtoareacode("029","商洛","shangluo","sl","0914"),
	new _inputtoareacode("029","渭南","weinan","wn","0913"),
	new _inputtoareacode("029","铜川","tongchuan","tc","0919"),
	new _inputtoareacode("029","咸阳","xianyang","xy","029"),
	new _inputtoareacode("029","汉中","hanzhong","hz","0916"),
	new _inputtoareacode("029","西安","xian","xa","029"),
	new _inputtoareacode("029","安康","ankang","ak","0915"),
	
	new _inputtoareacode("851","贵阳","guiyang","gy","0851"),
	new _inputtoareacode("851","铜仁地区","tongrendiqu","trdq","0856"),
	new _inputtoareacode("851","安顺","anshun","as","0853"),
	new _inputtoareacode("851","遵义","zunyi","zy","0852"),
	new _inputtoareacode("851","黔南布依族苗族自治州","qiannanbuyizumiaozuzizhizhou","qnbyzmzzzz","0854"),
	new _inputtoareacode("851","黔东南苗族侗族自治州","qiandongnanmiaozudongzuzizhizhou","qdnmzdzzzz","0855"),
	new _inputtoareacode("851","毕节地区","bijiediqu","bjdq","0857"),
	new _inputtoareacode("851","六盘水","liupanshui","lps","0858"),
	new _inputtoareacode("851","黔西南布依族苗族自治州","qianxinanbuyizumiaozuzizhizhou","qxnbyzmzzzz","0859"),
	
	new _inputtoareacode("024","辽阳","liaoyang","ly","0419"),
	new _inputtoareacode("024","抚顺","fushun","fs","024"),
	new _inputtoareacode("024","朝阳","chaoyang","cy","0421"),
	new _inputtoareacode("024","沈阳","shenyang","sy","024"),
	new _inputtoareacode("024","丹东","dandong","dd","0415"),
	new _inputtoareacode("024","盘锦","panjin","pj","0427"),
	new _inputtoareacode("024","大连","dalian","dl","0411"),
	new _inputtoareacode("024","本溪","benxi","bx","0414"),
	new _inputtoareacode("024","鞍山","anshan","as","0412"),
	new _inputtoareacode("024","葫芦岛","huludao","hld","0429"),
	new _inputtoareacode("024","锦州","jinzhou","jz","0416"),
	new _inputtoareacode("024","阜新","fuxin","fx","0418"),
	new _inputtoareacode("024","铁岭","tieling","tl","024"),
	new _inputtoareacode("024","营口","yingkou","yk","0417"),
	
	new _inputtoareacode("431","吉林","jilin","jl","0432"),
	new _inputtoareacode("431","辽源","liaoyuan","ly","0437"),
	new _inputtoareacode("431","白城","baicheng","bc","0436"),
	new _inputtoareacode("431","松原","songyuan","sy","0438"),
	new _inputtoareacode("431","长春","changchun","cc","0431"),
	new _inputtoareacode("431","四平","siping","sp","0434"),
	new _inputtoareacode("431","通化","tonghua","th","0435"),
	new _inputtoareacode("431","白山","baishan","bs","0439"),
	new _inputtoareacode("431","延边朝鲜族自治州","yanbianchaoxianzuzizhizhou","ybcxzzzz","0433"),
	
	new _inputtoareacode("022","天津","tianjin","tj","022"),
	
	new _inputtoareacode("931","白银","baiyin","by","0943"),
	new _inputtoareacode("931","定西","dingxi","dx","0932"),
	new _inputtoareacode("931","酒泉","jiuquan","jq","0937"),
	new _inputtoareacode("931","庆阳","qingyang","qy","0934"),
	new _inputtoareacode("931","金昌","jinchang","jc","0935"),
	new _inputtoareacode("931","武威","wuwei","ww","0935"),
	new _inputtoareacode("931","天水","tianshui","ts","0938"),
	new _inputtoareacode("931","兰州","lanzhou","lz","0931"),
	new _inputtoareacode("931","张掖","zhangye","zy","0936"),
	new _inputtoareacode("931","嘉峪关","jiayuguan","jyg","0937"),
	new _inputtoareacode("931","甘南藏族自治州","gannanzangzuzizhizhou","gnzzzzz","0941"),
	new _inputtoareacode("931","临夏回族自治州","linxiahuizuzizhizhou","lxhzzzz","0930"),
	new _inputtoareacode("931","平凉市","pingliang","pl","0933"),
	new _inputtoareacode("931","陇南市","longnan","ln","0939"),
	
	new _inputtoareacode("951","石嘴山","shizuishan","szs","0952"),
	new _inputtoareacode("951","固原","guyuan","gy","0954"),
	new _inputtoareacode("951","银川","yinchuan","yc","0951"),
	new _inputtoareacode("951","中卫","zhongwei","zw","0955"),
	new _inputtoareacode("951","吴忠","wuzhong","sy","0953"),
	
	new _inputtoareacode("028","宜宾","yibin","yb","0831"),
	new _inputtoareacode("028","遂宁","suining","sn","0825"),
	new _inputtoareacode("028","成都","chengdu","cd","028"),
	new _inputtoareacode("028","泸州","luzhou","lz","0830"),
	new _inputtoareacode("028","甘孜藏族自治州","ganzizangzuzizhizhou","gzzzzzz","0836"),
	new _inputtoareacode("028","广安","guangan","ga","0826"),
	new _inputtoareacode("028","雅安","yanan","ya","0835"),
	new _inputtoareacode("028","乐山","leshan","ls","0833"),
	new _inputtoareacode("028","达州","dazhou","dz","0818"),
	new _inputtoareacode("028","德阳","deyang","dy","0838"),
	new _inputtoareacode("028","巴中","bazhong","bz","0827"),
	new _inputtoareacode("028","凉山彝族自治州","liangshanyizuzizhizhou","lsyzzzz","0834"),
	new _inputtoareacode("028","自贡","zigong","zg","0813"),
	new _inputtoareacode("028","资阳","ziyang","zy","028"),
	new _inputtoareacode("028","绵阳","mianyang","my","0816"),
	new _inputtoareacode("028","广元","guangyuan","gy","0839"),
	new _inputtoareacode("028","南充","nanchong","nc","0817"),
	new _inputtoareacode("028","内江","neijiang","nj","0832"),
	new _inputtoareacode("028","眉山","meishan","ms","028"),
	new _inputtoareacode("028","阿坝藏族羌族自治州","abazangzuqiangzuzizhizhou","abzzqzzzz","0837"),
	new _inputtoareacode("028","攀枝花","panzhihua","pzh","0812"),
	
	new _inputtoareacode("371","济源","jiyuan","jy","0391"),
	new _inputtoareacode("371","焦作","jiaozuo","jz","0391"),
	new _inputtoareacode("371","周口","zhoukou","zk","0394"),
	new _inputtoareacode("371","安阳","anyang","ay","0372"),
	new _inputtoareacode("371","鹤壁","hebi","hb","0392"),
	new _inputtoareacode("371","平顶山","pingdingshan","pds","0375"),
	new _inputtoareacode("371","郑州","zhengzhou","zz","0371"),
	new _inputtoareacode("371","商丘","shangqiu","sq","0370"),
	new _inputtoareacode("371","开封","kaifeng","kf","0378"),
	new _inputtoareacode("371","三门峡","sanmenxia","smx","0398"),
	new _inputtoareacode("371","许昌","xuchang","xc","0374"),
	new _inputtoareacode("371","信阳","xinyang","xy","0376"),
	new _inputtoareacode("371","漯河","luohe","lh","0395"),
	new _inputtoareacode("371","濮阳","puyang","py","0393"),
	new _inputtoareacode("371","洛阳","luoyang","ly","0379"),
	new _inputtoareacode("371","驻马店","zhumadian","zmd","0396"),
	new _inputtoareacode("371","南阳","nanyang","ny","0377"),
	new _inputtoareacode("371","新乡","xinxiang","xx","0373"),
	
	
	new _inputtoareacode("731","衡阳","hengyang","hy","0734"),
	new _inputtoareacode("731","郴州","chenzhou","cz","0735"),
	new _inputtoareacode("731","娄底","loudi","ld","0738"),
	new _inputtoareacode("731","永州","yongzhou","yz","0746"),
	new _inputtoareacode("731","长沙","changsha","cs","0731"),
	new _inputtoareacode("731","邵阳","shaoyang","sy","0739"),
	new _inputtoareacode("731","常德","changde","cd","0736"),
	new _inputtoareacode("731","株洲","zhuzhou","zz","0731"),
	new _inputtoareacode("731","怀化","huaihua","hh","0745"),
	new _inputtoareacode("731","张家界","zhangjiajie","zjj","0744"),
	new _inputtoareacode("731","益阳","yiyang","yy","0737"),
	new _inputtoareacode("731","湘潭","xiangtan","xt","0731"),
	new _inputtoareacode("731","吉首","jishou","js","0743"),
	new _inputtoareacode("731","岳阳","yueyang","yy","0730"),
	
//	new _inputtoareacode("471","乌海","wuhai","wh","0473"),
//	new _inputtoareacode("471","呼和浩特","huhehaote","hhht","0471"),
//	new _inputtoareacode("471","鄂尔多斯","eerduosi","eeds","0477"),
//	new _inputtoareacode("471","兴安盟","xinganmeng","xam","0482"),
//	new _inputtoareacode("471","呼伦贝尔","hulunbeier","hlbe","0470"),
//	new _inputtoareacode("471","锡林郭勒盟","xilinguolemeng","xlglm","0479"),
//	new _inputtoareacode("471","巴彦淖尔","bayannaoer","byne","0478"),
//	new _inputtoareacode("471","阿拉善盟","alashanmeng","alsm","0483"),
//	new _inputtoareacode("471","通辽","tongliao","tl","0475"),
//	new _inputtoareacode("471","赤峰","chifeng","cf","0476"),
//	new _inputtoareacode("471","包头","baotou","bt","0472"),
//	new _inputtoareacode("471","乌兰察布","wulanchabu","wlcb","0474"),
	
	new _inputtoareacode("351","临汾","linfen","lf","0357"),
	new _inputtoareacode("351","吕梁","lvliang","ll","0358"),
	new _inputtoareacode("351","阳泉","yangquan","yq","0353"),
	new _inputtoareacode("351","晋中","jinzhong","jz","0354"),
	new _inputtoareacode("351","忻州","xinzhou","xz","0350"),
	new _inputtoareacode("351","朔州","shuozhou","sz","0349"),
	new _inputtoareacode("351","大同","datong","dt","0352"),
	new _inputtoareacode("351","长治","changzhi","cz","0355"),
	new _inputtoareacode("351","运城","yuncheng","yc","0359"),
	new _inputtoareacode("351","晋城","jincheng","jc","0356"),
	new _inputtoareacode("351","太原","taiyuan","ty","0351"),
	
	new _inputtoareacode("551","宿州","suzhou","sz","0557"),
	new _inputtoareacode("551","黄山","huangshan","hs","0559"),
	new _inputtoareacode("551","淮南","huainan","hn","0554"),
	new _inputtoareacode("551","六安","liuan","la","0564"),
	new _inputtoareacode("551","巢湖","chaohu","ch","0553"),
	new _inputtoareacode("551","亳州","haozhou","hz","0558"),
	new _inputtoareacode("551","马鞍山","maanshan","mas","0555"),
	new _inputtoareacode("551","合肥","hefei","hf","0551"),
	new _inputtoareacode("551","芜湖","wuhu","wh","0553"),
	new _inputtoareacode("551","淮北","huaibei","hb","0561"),
	new _inputtoareacode("551","铜陵","tongling","tl","0562"),
	new _inputtoareacode("551","滁州","chuzhou","cz","0550"),
	new _inputtoareacode("551","阜阳","fuyang","fy","0558"),
	new _inputtoareacode("551","蚌埠","bangbu","bb","0552"),
	new _inputtoareacode("551","宣城","xuancheng","xc","0563"),
	new _inputtoareacode("551","安庆","anqing","aq","0556"),
	new _inputtoareacode("551","池州","chizhou","cz","0566"),
	
	new _inputtoareacode("531","聊城","liaocheng","lc","0635"),
	new _inputtoareacode("531","东营","dongying","dy","0546"),
	new _inputtoareacode("531","淄博","zibo","zb","0533"),
	new _inputtoareacode("531","泰安","taian","ta","0538"),
	new _inputtoareacode("531","威海","weihai","wh","0631"),
	new _inputtoareacode("531","滨州","binzhou","bz","0543"),
	new _inputtoareacode("531","临沂","linyi","linyi","0539"),
	new _inputtoareacode("531","烟台","yantai","yt","0535"),
	new _inputtoareacode("531","菏泽","heze","hz","0530"),
	new _inputtoareacode("531","莱芜","laiwu","lw","0634"),
	new _inputtoareacode("531","青岛","qingdao","qd","0532"),
	new _inputtoareacode("531","济宁","jining","jn","0537"),
	new _inputtoareacode("531","德州","dezhou","dez","0534"),
	new _inputtoareacode("531","潍坊","weifang","wf","0536"),
	new _inputtoareacode("531","济南","jinan","jn","0531"),
	new _inputtoareacode("531","枣庄","zaozhuang","zz","0632"),
	new _inputtoareacode("531","日照","rizhao","rz","0633"),
	
	new _inputtoareacode("023","重庆","chongqing","cq","023"),
	
	new _inputtoareacode("991","阿克苏地区","akesudiqu","aksdq","0997"),
	new _inputtoareacode("991","图木舒克","tumushuke","tmsk","0998"),
	new _inputtoareacode("991","博尔塔拉蒙古自治州","boertalamengguzizhizhou","betlmgzzz","0909"),
	new _inputtoareacode("991","克孜勒苏柯尔克孜自治州","kezilesukeerkezizizhizhou","kzlskekzzzz","0997"),
	new _inputtoareacode("991","昌吉回族自治州","changjihuizuzizhizhou","cjhzzzz","0994"),
	new _inputtoareacode("991","巴音郭楞蒙古族自治州","bayinguolengmegnguzuzizhizhou","byglmgzzzz","0996"),
	new _inputtoareacode("991","五家渠","wujiaqu","wjq","0994"),
	new _inputtoareacode("991","阿勒泰地区","aletaidiqu","altdq","0906"),
	new _inputtoareacode("991","乌鲁木齐","wulumuqi","wlmq","0991"),
	new _inputtoareacode("991","奎屯地区","kuitundiqu","ktdq","0992"),
	new _inputtoareacode("991","喀什地区","kashendiqu","ksdq","0998"),
	new _inputtoareacode("991","伊犁哈萨克自治州","yilihasakezizhizhou","ylhskzzz","0999"),
	new _inputtoareacode("991","阿拉尔","alaer","ale","0997"),
	new _inputtoareacode("991","石河子","shihezi","shz","0993"),
	new _inputtoareacode("991","吐鲁番地区","tulufandiqu","tlfdq","0995"),
	new _inputtoareacode("991","和田地区","hetiandiqu","htdq","0903"),
	new _inputtoareacode("991","塔城地区","tachengdiqu","tcdq","0901"),
	new _inputtoareacode("991","哈密地区","hamidiqu","hmdq","0902"),
	new _inputtoareacode("991","克拉玛依","kelamayi","klmy","0990"),
	
	new _inputtoareacode("898","白沙黎族自治县","baishalizuzizhixian","bslzzzz","0898"),
	new _inputtoareacode("898","陵水黎族自治县","lingshuilizuzizhixian","lslzzzz","0898"),
	new _inputtoareacode("898","乐东黎族自治县","ledonglizuzizhixian","ldlzzzx","0898"),
	new _inputtoareacode("898","东方市","dongfangshi","dfs","0898"),
	new _inputtoareacode("898","保亭黎族自治县","baotinglizuzizhixian","btlzzzz","0898"),
	new _inputtoareacode("898","文昌","wenchang","wc","0898"),
	new _inputtoareacode("898","万宁","wanning","wn","0898"),
	new _inputtoareacode("898","琼中黎族自治县","qiongzhonglizuzizhixian","qzlzzzz","0898"),
	new _inputtoareacode("898","澄迈县","chengmaixian","cmx","0898"),
	new _inputtoareacode("898","琼海","qionghai","qh","0898"),
	new _inputtoareacode("898","昌江黎族自治县","changjianglizuzizhixian","cjlzzzz","0898"),
	new _inputtoareacode("898","五指山","wuzhishan","wzs","0898"),
	new _inputtoareacode("898","三亚","sanya","sy","0898"),
	new _inputtoareacode("898","儋州","danzhou","dz","0898"),
	new _inputtoareacode("898","屯昌县","tunchangxian","dcx","0898"),
	new _inputtoareacode("898","海口","haikou","hk","0898"),
	new _inputtoareacode("898","定安县","dinganxian","da","0898"),
	new _inputtoareacode("898","临高县","lingaoxian","lgx","0898"),
	
	new _inputtoareacode("020","梅州","meizhou","mz","0753"),
	new _inputtoareacode("020","深圳","shenzhen","sz","0755"),
	new _inputtoareacode("020","中山","zhongshan","zs","0760"),
	new _inputtoareacode("020","湛江","zhanjiang","zj","0759"),
	new _inputtoareacode("020","珠海","zhuhai","zh","0756"),
	new _inputtoareacode("020","茂名","maoming","mm","0668"),
	new _inputtoareacode("020","东莞","dongguan","dg","0769"),
	new _inputtoareacode("020","江门","jiangmen","jm","0750"),
	new _inputtoareacode("020","韶关","shaoguan","sg","0751"),
	new _inputtoareacode("020","广州","guangzhou","gz","020"),
	new _inputtoareacode("020","佛山","foshan","fs","0757"),
	new _inputtoareacode("020","揭阳","jieyang","jy","0663"),
	new _inputtoareacode("020","汕尾","shanwei","sw","0660"),
	new _inputtoareacode("020","河源","heyuan","hy","0762"),
	new _inputtoareacode("020","云浮","yunfu","yf","0766"),
	new _inputtoareacode("020","阳江","yangjiang","yj","0662"),
	new _inputtoareacode("020","汕头","shantou","st","0754"),
	new _inputtoareacode("020","惠州","huizhou","hz","0752"),
	new _inputtoareacode("020","肇庆","zhaoqing","zq","0758"),
	new _inputtoareacode("020","清远","qingyuan","qy","0763"),
	new _inputtoareacode("020","潮州","chaozhou","cz","0768"),
	
	new _inputtoareacode("771","河池","hechi","hc","0778"),
	new _inputtoareacode("771","贺州","hezhou","hz","0774"),
	new _inputtoareacode("771","南宁","nanning","nn","0771"),
	new _inputtoareacode("771","贵港","guigang","gg","0775"),
	new _inputtoareacode("771","桂林","guilin","gl","0773"),
	new _inputtoareacode("771","玉林","yulin","yl","0775"),
	new _inputtoareacode("771","北海","beihai","bh","0779"),
	new _inputtoareacode("771","百色","baise","bs","0776"),
	new _inputtoareacode("771","防城港","fangchenggang","fcg","0770"),
	new _inputtoareacode("771","梧州","wuzhou","wz","0774"),
	new _inputtoareacode("771","崇左","chongzuo","cz","0771"),
	new _inputtoareacode("771","来宾","laibin","lb","0772"),
	new _inputtoareacode("771","柳州","liuzhou","lz","0772"),
	new _inputtoareacode("771","钦州","qinzhou","qz","0777"),
	
	new _inputtoareacode("891","山南地区","shannandiqu","sndq","0893"),
	new _inputtoareacode("891","拉萨","lasa","ls","0891"),
	new _inputtoareacode("891","那曲地区","naqudiqu","nqdq","0896"),
	new _inputtoareacode("891","日喀则地区","rikazediqu","rkzdq","0892"),
	new _inputtoareacode("891","林芝地区","linzhidiqu","lzdq","0894"),
	new _inputtoareacode("891","昌都地区","changdudiqu","cddq","0895"),
	new _inputtoareacode("891","阿里地区","alidiqu","aldq","0897")
	
];

/**
 * 省份搜索对象  
 *  code
 *  theName
 *  spelling
 *  first letter
 *  areaCode
 */
function _inputtoareacode(code,theName,spelling,firstLetter,areaCode){
    this.code = code;
    this.theName = theName;
    this.spelling = spelling;
    this.firstLetter = firstLetter;
    this.areaCode = areaCode;
};
function _acode(code,theName,areaCode){
    this.theName = theName;
    this.areaCode = areaCode;
    this.code = code;
}
