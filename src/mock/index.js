/**
 * Created by huai on 2019-12-30
 * 文档查阅 http://mockjs.com/examples.html
 */
import Mock from 'mockjs'
//获取首页信息
Mock.mock(/\/getVoteList/, 'get', () => {
  return Mock.mock({
    "voteList|10": [{
      'guid': /[a-z][A-Z][0-9]\d{5,10}/,//活动id
      'activityTitle': '@ctitle(5,7)',//活动标题
      'activityDetail': '@ctitle(45, 55)',//活动简介
      'activityPic': Mock.Random.image('810X514', '#50B347', '#FFF', 'Mock.js'),//活动封面
      'activityTime': '@datetime("yyyy-MM-dd HH:mm:ss")',//活动时间
      'activityAddress': '@ctitle(12, 15)',//活动地点
      'participantCount|1-100': 100,//参赛人数
      "voteCount|1-100": 120,//已投票数
      "hotCount|1-100": 1238,//活动热度
      "activityType": {
        'boolean|1-2': true,
      }//判断节目类型 按照奖项为true 按照节目为false

    }],
    "status": {
      'boolean|1-2': true,
    }
  })
});
//获取投票活动奖项信息
Mock.mock(/\/getRwdList/, 'get', () => {
  return Mock.mock({
    'rwdList|10': [{
      'rId': /[a-z][A-Z][0-9]\d{5,10}/,//每个奖项的id
      'rwdTitle': '@ctitle(5)',//奖项标题
    }]

  })
});
//获取节目信息
Mock.mock(/\/getPgmListData/, 'get', () => {
  return Mock.mock({
    'PgmList|10': [{
      'rId': /[a-z][A-Z][0-9]\d{5,10}/,//每个奖项的id
      'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'Mock.js'),//节目头像
      'title': '@ctitle(3)',//节目名称
      'number': 0,//节目编号
      'dancer': '@ctitle(2)'//表演者
    }],
    'boolean':{
       'setType':{
         'boolean|1-2':true,
       },//判断 节目类型:false, 奖项类型:true,
       'btnType':{
         'boolean|1-2':true, //判断 投票true ， 评分:false,
       }
    }
  })
});
//获取总排行数据
Mock.mock(/\/getAllRank/, 'get', () => {
  return Mock.mock({
    //奖项名字
    'awardName': {
      'bestPopularityAward': '最佳人气奖',
      'bestMaleSinger': '最佳男歌手',
      'mostBeautiful': '最美台风奖',
    },
    //最佳人气奖
    'bestPopularityAward': [
      {
        'rankTop': {
          'firstRank': {
            'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100,
          },
          'secondRank': {
            'title': '002-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          },
          'thirdRank': {
            'title': '003-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          }
        },
        'rankBottom|10': [{
          'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
          'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
          'name': '@ctitle(2,4)',//姓名
          'number|1-100': 100//票数
        }]
      },
    ],
    //最佳男歌手
    'bestMaleSinger': [
      {
        'rankTop': {
          'firstRank': {
            'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100,
          },
          'secondRank': {
            'title': '002-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          },
          'thirdRank': {
            'title': '003-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          }
        },
        'rankBottom|10': [{
          'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
          'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
          'name': '@ctitle(2,4)',//姓名
          'number|1-100': 100//票数
        }]
      },
    ],
    //最美台风奖
    'mostBeautiful': [
      {
        'rankTop': {
          'firstRank': {
            'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100,
          },
          'secondRank': {
            'title': '002-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          },
          'thirdRank': {
            'title': '003-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          }
        },
        'rankBottom|10': [{
          'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
          'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
          'name': '@ctitle(2,4)',//姓名
          'number|1-100': 100//票数
        }]
      },
    ],

  })
});
//获取节目管理信息
Mock.mock(/\/getPgmList/, 'get', () => {
  return Mock.mock({
    'pgmList|15': [{
      'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
      'title': '@ctitle(2,4)',//标题
      'number|1-100': 100,//编号
      'dancer': '表演:' + '@ctitle(2,4)',//表演者
    }]
  })
});
//获取活动投票头部信息
Mock.mock(/\/getActTop/, 'get', () => {
  return Mock.mock({
    "voteList": {
      'guid': /[a-z][A-Z][0-9]\d{5,10}/,//活动id
      'activityTitle': '@ctitle(5,7)',//活动标题
      'activityDetail': '@ctitle(45, 55)',//活动简介
      'activityPic': Mock.Random.image('810X514', '#50B347', '#FFF', 'Mock.js'),//活动封面
      'activityTime': '@datetime("yyyy-MM-dd HH:mm:ss")',//活动时间
      'activityAddress': '@ctitle(12, 15)',//活动地点
      'participantCount|1-100': 100,//参赛人数
      "voteCount|1-100": 120,//已投票数
      "hotCount|1-100": 1238,//活动热度
      "activityType": {
        'boolean|1-2': true,
      }//判断节目类型 按照奖项为true 按照节目为false
    },
    "status": {
      'boolean|1-2': true,
    }
  })
});
//获取活动详情信息
Mock.mock(/\/getActDetail/, 'get', () => {
  return Mock.mock({
    'title': {
      'activityTitle': '@ctitle(5, 15)',//活动标题
    },
    'pic': {
      'activityPic': Mock.Random.image('810X514'),//活动封面
    },
    "detailList|5": [{
      'DIntroduction': {
        'icon': "iconfont iconscorex",
        'title': '活动简介',
        'cont': '@ctitle(20,30)',
      },
      'DTime': {
        'icon': "iconfont iconclockx",
        'title': '活动时间',
        'time': '@datetime("yyyy-MM-dd HH:mm:ss")',//活动时间
      },
      'DAddress': {
        'icon': "iconfont iconlocationx",
        'title': '活动地点',
        'address': '@ctitle(10,15)',//活动地点
      },
      'DRules': {
        'icon': "iconfont iconlimitx",
        'title': '活动规则',
        'rule': '@ctitle(20,30)',//活动规则
      },
      'DReward': {
        'icon': "iconfont iconprizex",
        'title': '活动奖项',
        'rewards|3': [{
          'title': '@ctitle(5)',
          'cont': "@ctitle(7,15)",
        }]
      }

    }]
  })
});

//获取不同奖项的不同信息
Mock.mock(/\/getDfRwdList/, 'get', () => {
  return Mock.mock({
    'rwdList|10': [{
      'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
      'title': '@ctitle(2,4)',//标题
      'number|1-100': 100,//编号
      'count|1-100':12,
      'dancer': '@ctitle(2,4)',//表演者
    }]
  })
});
//单个排行榜信息
Mock.mock(/\/getRank/, 'get', () => {
  return Mock.mock({

    //最佳人气奖
    'rwd':[
      {
        'rankTop': {
          'firstRank': {
            'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100,
          },
          'secondRank': {
            'title': '002-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          },
          'thirdRank': {
            'title': '003-' + '@ctitle(2,4)',//获奖编号和标题
            'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
            "number|1-100": 100
          }
        },
        'rankBottom|10': [{
          'avatar': Mock.Random.image('810X514', '#50B347', '#FFF', 'avatar'),//获奖头像
          'title': '001-' + '@ctitle(2,4)',//获奖编号和标题
          'name': '@ctitle(2,4)',//姓名
          'number|1-100': 100//票数
        }]
      },
    ],
  })
});
//问卷列表
Mock.mock(/\/getQusList/, 'get', () => {
  return Mock.mock({
    'list|3': [{
      'name': '@ctitle(2,4)',//标题
      'qusYear': '@datetime("yyyy-MM-dd")',//问卷年份
      'qusTime':'@time("A HH:mm")',//问卷时间
    }]
  })
});


