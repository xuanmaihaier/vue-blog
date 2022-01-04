module.exports = {
  "title": "stride.blog",
  "description": "你假装努力的样子真的很狼狈",
  // "base" : '/vue-blog/',
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['meta',{'name':"keywords",'content':"stide的博客"}],
    ['meta',{'name':"author",'content':"stide"}],
    // ['meta',{'name':"baidu-site-verification",'content':"code-FCTONeyA0K"}],
    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?36cd8efdd1b09c468280b70d00ad8ada";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })()`
    ]
    
  ],
  'theme': 'reco',
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "icon": "reco-message",
        "link": "/docs/theme-reco/commit.md"
        // "items": [
        //   {
        //     "text": "vuepress-reco",

        //   }
        // ]
      },
      {
        "text": "联系方式",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xuanmaihaier",
            "icon": "reco-github"
          }, {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_19945487",
            "icon": "reco-csdn"
          },
          {
            "text": "抖音",
            "link": "https://v.douyin.com/e8UKVoV/",
            "icon": "reco-douyin"
          },
          {
            "text": "YoungDoCui",
            "link": 'https://weixin.qq.com/',
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "sidebar": {
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "stride",
    "authorAvatar": "/avatar.jpeg",
    "startYear": "2020",
    // 备案
    'record': '苏ICP备2021007111号-1',
    'recordLink': 'https://beian.miit.gov.cn/',
    'cyberSecurityRecord': '苏公网安备 32011402010859号',
    'cyberSecurityLink': 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010859',
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["sakura", {
      num: 20,  // 默认数量
      show: true, //  是否显示
      zIndex: 0,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }
    }],
    [
      "@vuepress-reco/comments",
      {
        solution: 'valine',
        options: {
          appId: 'wJBYwlHhL0WemskTB3g82D24-gzGzoHsz',
          appKey: '7M9gB0WRmYttxp82yI5UlJqD',
        }
      }
    ],
    [
      "meting",
      {
        meting: {
          server: "tencent", // netease:网易云，tencent:qq音乐，xiami:虾米音乐
          type: "playlist",
          auto: 'https://y.qq.com/n/yqq/playlist/7929054944.html'
        },
        aplayer: {
          autoplay: true,
          mini: true,
          theme: '#282c34',
          preload: 'metadata'
        },
        mobile: {
          cover: false,
          lrc: true
        }
      }
    ],
  ]

}