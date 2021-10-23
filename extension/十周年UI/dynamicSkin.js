'use strict';
decadeParts.import(function(lib, game, ui, get, ai, _status){
	/*
	十周年UI动皮使用说明：
	- 首先打开动态皮肤的开关，在非国战模式或者非隐匿技武将下，直接替换武将皮肤显示；
	- 目前不支持动态皮肤的切换功能，限单武将模式使用；
	- 动态皮肤参数表在线文档链接：https://docs.qq.com/sheet/DS2Vaa0ZGWkdMdnZa；可以在群在线文档提供你设置好的参数
	- 所有相关的文件请放到	十周年UI/assets/dynamic目录下；
	- 关于格式请参考下面示例：
		武将名:{
			皮肤名:{
				name: "xxx",	//	必★填	骨骼名称，一般是yyy.skel，注意xxx不带后缀名.skel；
				action: "xxx",	//	可删掉	播放动作，xxx 一般是 DaiJi，目前手杀的骨骼文件需要填；
				x: [10, 0.5],	//	可删掉	[10, 0.5]相当于 left: calc(10px + 50%)，不填默认为[0, 0.5]；
				y: [10, 0.5],	//	可删掉	[10, 0.5]相当于 bottom: calc(10px + 50%)，不填默认为[0, 0.5]；
				scale: 0.5,		//	可删掉	缩放大小，不填默认为1；
				angle: 0,		//	可删掉	旋转角度，不填默认为0；
				speed: 1,		//	可删掉	播放速度，不填默认为1；
				background: "xxx.jpg",	//	可删掉	背景图片，注意后面要写后缀名，如.jpg .png等 
			}
		},
	- 为了方便得到动皮的显示位置信息，请在游戏选将后，用控制台或调试助手小齿轮执行以下代码(没用到的属性请删掉以免报错):
		game.me.stopDynamic();
		game.me.playDynamic({
			name: 'xxxxxxxxx',		// 勿删
			action: undefined,
			speed: 1,
			loop: true,				// 勿删
		},{
			x: [0, 0.5],
			y: [0, 0.5],
			scale: 0.5,
			angle: 0,
		});
	*/
	
	decadeUI.dynamicSkin = {
		zhangqiying:{
			岁稔年丰:{
				name: 'skin_zhangqiying_SuiRenNianFeng',
				x: [5, 0.5],
				y: [15, 0.4],
				scale: 0.42,
				background: 'skin_zhangqiying_SuiRenNianFeng_bg.png',
			},
		},
		baosanniang:{
			漫花剑俏:{
				name: 'skin_baosanniang_ManHuaJianQiao',
				x: [96, 0.5],
				y: [10, 0.4],
				scale: 0.38,
				background: 'skin_baosanniang_ManHuaJianQiao_bg.png',
			},
		},
		sp_caiwenji:{
			才颜双绝:{
				name: 'skin_caiwenji_CaiYanShuangJue',
				x: [-30, 0.5],
				y: [0, 0.1],
				scale: 0.5,
				background: 'skin_caiwenji_CaiYanShuangJue_bg.png',
			},
		},
		daqiao:{
			清萧清丽:{
				name: 'skin_daqiao_QingXiaoQingLi',
				x: [16, 0.5],
				y: [15, 0.1],
				scale: 0.55,
				background: 'skin_daqiao_QingXiaoQingLi_bg.png',
			},
		},
		daxiaoqiao:{
			战场绝版:{
				name: 'skin_daqiaoxiaoqiao_ZhanChang',
				x: [0, 0.5],
				y: [10, 0.3],
				scale: 0.5,
				background: 'skin_daqiaoxiaoqiao_ZhanChang.png',
			},
		},
		diaochan:{
			玉婵仙子:{
				name: 'skin_diaochan_YuChanXianZi',
				x: [5, 0.5],
				y: [0, 0],
				scale: 0.6,
				background: 'skin_diaochan_YuChanXianZi_bg.png',
			},
		},
		guozhao:{
			雍容尊雅:{
				name: 'skin_guozhao_YongRongZunYa',
				x: [-80, 0.5],
				y: [8, 0.3],
				scale: 0.6,
				background: 'skin_guozhao_YongRongZunYa_bg.png',
			},
		},
		huangyueying:{
			木牛流马:{
				name: 'skin_huangyueying_MuNiuLiuMa',
				action: 'DaiJi',
				x: [-20, 0.5],
				y: [0, 0.3],
				scale: 0.53,
				background: 'skin_huangyueying_MuNiuLiuMa_bg.png',
			},
		},
		hetaihou:{
			蛇蝎为心:{
				name: 'skin_hetaihou_SheXieWeiXin',
				action: 'DaiJi',
				x: [-50, 0.5],
				y: [10, 0.1],
				scale: 0.46,
				angle: 27,
				background: 'skin_hetaihou_SheXieWeiXin_bg.png',
			},
		},
		huaman:{
			花俏蛮娇:{
				name: 'skin_huaman_HuaQiaoManJiao',
				x: [65, 0.5],
				y: [10, 0.3],
				scale: 0.4,
				background: 'skin_huaman_HuaQiaoManJiao_bg.png',
			}
		},
		luyusheng:{
			玉桂月满:{
				name: 'skin_luyusheng_YuGuiYueMan',
				x: [-25, 0.5],
				y: [16, 0.3],
				scale: 0.5,
				background: 'skin_luyusheng_YuGuiYueMan_bg.png',
			}
		},
		re_machao:{
			西凉雄狮:{
				name: 'skin_machao_XiLiangXiongShi',
				action: 'DaiJi',
				x: [0, 0.5],
				y: [0, 0.3],
				scale: 0.52,
				background: 'skin_machao_XiLiangXiongShi_bg.png',
			},
		},
		mayunlu:{
			战场绝版:{
				name: 'skin_mayunlu_ZhanChang',
				x: [88, 0.5],
				y: [0, 0.1],
				scale: 0.65,
				background: 'skin_mayunlu_ZhanChang_bg.png',
			},
		},
		panshu:{
			繁囿引芳:{
				name: 'skin_panshu_FanYouYinFang',
				x: [100, 0.5],
				y: [10, 0.3],
				scale: 0.52,
				background: 'skin_panshu_FanYouYinFang_bg.png',
			},
		},
		sunluban:{
			沅茝香兰:{
				name: 'skin_sunluban_YuanChaiXiangLan',
				x: [10, 0.5],
				y: [12, 0.1],
				scale: 0.55,
				background: 'skin_sunluban_YuanChaiXiangLan_bg.png',
			},
			宵靥谜君:{
				name: 'skin_sunluban_XiaoYeMiJun',
				x: [0, 0.5],
				y: [-10, 0.5],
				scale: 0.5,
				background: 'skin_sunluban_XiaoYeMiJun_bg.png',
			},
		},
		sunluyu:{
			娇俏伶俐:{
				name: 'skin_sunluyu_JiaoQiaoLingLi',
				x: [-10, 0.5],
				y: [20, 0.3],
				scale: 0.4,
				background: 'skin_sunluyu_JiaoQiaoLingLi_bg.png',
			},
		},
		sunshangxiang:{
			魅影剑舞:{
				name: 'skin_sunshangxiang_MeiYingJianWu',
				x: [-5, 0.5],
				y: [10, 0.2],
				scale: 0.42,
				background: 'skin_sunshangxiang_MeiYingJianWu_bg.png',
			},
		},
		sp_sunshangxiang:{
			花曳心牵:{
				name: 'skin_shuxiangxiang_HuaYeXinQian',
				x: [20, 0.5],
				y: [18, 0.1],
				scale: 0.53,
				background: 'skin_shuxiangxiang_HuaYeXinQian_bg.png',
			}
		},
		wangyuanji:{
			鼠年冬至:{
				name: 'skin_wangyuanji_ShuNianDongZhi',
				action: 'DaiJi',
				x: [-24, 0.5],
				y: [8, 0.5],
				scale: 0.6,
				background: 'skin_wangyuanji_ShuNianDongZhi_bg.png',
			},
		},
		wangyi:{
			绝色异彩:{
				name: 'skin_wangyi_JueSeYiCai',
				x: [16, 0.5],
				y: [10, 0.3],
				scale: 0.42,
				background: 'skin_wangyi_JueSeYiCai_bg.png',
			},
		},
		wuxian:{
			锦运福绵:{
				name: 'skin_wuxian_JinYunFuMian',
				x: [-58, 0.5],
				y: [0, 0.2],
				scale: 0.6,
				background: 'skin_wuxian_JinYunFuMian_bg.png',
			},
		},
		xiahoushi:{
			战场绝版:{
				name: 'skin_xiahoushi_ZhanChang',
				x: [-8, 0.5],
				y: [-5, 0.4],
				scale: 0.45,
				angle: -20,
				background: 'skin_xiahoushi_ZhanChang_bg.png',
			},
		},
		re_xiaoqiao:{
			花好月圆:{
				name: 'skin_xiaoqiao_HuaHaoYueYuan',
				x: [-40, 0.5],
				y: [5, 0.1],
				scale: 0.5,
				background: 'skin_xiaoqiao_HuaHaoYueYuan_bg.png',
			},
		},
		xinxianying:{
			英装素果:{
				name: 'skin_xinxianying_YingZhuangSuGuo',
				x: [38, 0.5],
				y: 0,
				scale: 0.7,
				background: 'skin_xinxianying_YingZhuangSuGuo_bg.png',
			},
		},
		xushi:{
			为夫弑敌:{
				name: 'skin_xushi_WeiFuShiDi',
				x: [28, 0.5],
				y: [0, 0.3],
				scale: 0.42,
				background: 'skin_xushi_WeiFuShiDi_bg.png',
			}
		},
		yangwan:{
			星光淑婉:{
				name: 'skin_yangwan_XingGuangShuWan',
				x: [5, 0.5],
				y: [0, 0.3],
				scale: 0.42,
				background: 'skin_yangwan_XingGuangShuWan_bg.png',
			},
		},
		zhangchangpu:{
			钟桂香蒲:{
				name: 'skin_zhangchangpu_ZhongGuiXiangPu',
				x: [-5, 0.5],
				y: [5, 0.3],
				scale: 0.43,
				background: 'skin_zhangchangpu_ZhongGuiXiangPu_bg.png',
			},
		},
		zhangxingcai:{
			凯旋星花:{
				name: 'skin_zhangxingcai_KaiXuanXingHua',
				x: [-15, 0.5],
				y: [15, 0.2],
				scale: 0.6,
				background: 'skin_zhangxingcai_KaiXuanXingHua_bg.png',
			},
		},
		zhenji:{
			才颜双绝:{
				name: 'skin_zhenji_CaiYanShuangJue',
				x: [20, 0.5],
				y: [0, 0.3],
				scale: 0.45,
				background: 'skin_zhenji_CaiYanShuangJue_bg.png',
			},
		},
		zhoufei:{
			鹊星夕情:{
				name: 'skin_sundengzhoufei_QueXingXiQing',
				x: [0, 0.5],
				y: [15, 0.2],
				scale: 0.7,
				background: 'skin_sundengzhoufei_QueXingXiQing_bg.png',
			},
		},
		zhugeguo:{
			兰荷艾莲:{
				name: 'skin_zhugeguo_LanHeAiLian',
				x: [-30, 0.5],
				y: [8, 0.3],
				scale: 0.5,
				background: 'skin_zhugeguo_LanHeAiLian_bg.png',
			},
		},
	};
	
	var extend = {
		re_baosanniang: decadeUI.dynamicSkin.baosanniang,
		re_daqiao: decadeUI.dynamicSkin.daqiao,
		re_diaochan: decadeUI.dynamicSkin.diaochan,
		re_huangyueying: decadeUI.dynamicSkin.huangyueying,
		re_panshu: decadeUI.dynamicSkin.panshu,
		re_sunluban: decadeUI.dynamicSkin.sunluban,
		re_sunluyu: decadeUI.dynamicSkin.sunluyu,
		re_sunshangxiang: decadeUI.dynamicSkin.sunshangxiang,
		re_wangyi: decadeUI.dynamicSkin.wangyi,
		ol_xiaoqiao: decadeUI.dynamicSkin.re_xiaoqiao,
		re_xinxianying: decadeUI.dynamicSkin.xinxianying,
		ol_zhangchangpu: decadeUI.dynamicSkin.zhangchangpu,
		re_zhenji: decadeUI.dynamicSkin.zhenji,
	};
	
	
	decadeUI.get.extend(decadeUI.dynamicSkin, extend);
	// 如果你不想改原版的参数，又想保留自己配置好的参数，建议采用此种方式在下面重新写个覆盖
	/*
		var yourExtend = {
			zhangqiying:xxxxx,
		};
		
		decadeUI.get.extend(decadeUI.dynamicSkin, yourExtend);
	*/
});

