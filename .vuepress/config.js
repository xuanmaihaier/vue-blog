module.exports = {
  title: 'YoungDo',
  // "base" : '/vue-blog/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    },
  },
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'stide的博客' }],
    ['meta', { name: 'author', content: 'stide' }],
    // ['meta',{'name':"baidu-site-verification",'content':"code-FCTONeyA0K"}],
    [
      'script',
      {},
      `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?93318af278b7a0c1fc410f2313102265";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })()`,
    ],
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '留言板',
        icon: 'reco-suggestion',
        link: '/docs/theme-reco/commit.md',
        // "items": [
        //   {
        //     "text": "vuepress-reco",

        //   }
        // ]
      },
      {
        text: '组件库',
        link: 'https://element.stride.fun/',
        icon: 'reco-github',
      },
      {
        text: '联系方式',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/xuanmaihaier',
            icon: 'reco-github',
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/qq_19945487',
            icon: 'reco-csdn',
          },
          {
            text: '抖音',
            link: 'https://v.douyin.com/e8UKVoV/',
            icon: 'reco-douyin',
          },
          {
            text: 'YoungDoCui',
            link: 'https://weixin.qq.com/',
            icon: 'reco-wechat',
          },
        ],
      },
    ],
    sidebar: {
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
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
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'YoungDo',
    authorAvatar: '/avatar.jpeg',
    startYear: '2020',
    // 备案
    record: '苏ICP备2021007111号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    cyberSecurityRecord: '苏公网安备 32011402010859号',
    cyberSecurityLink:
      'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010859',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      'sakura',
      {
        num: 4, // 默认数量
        show: false, //  是否显示
        zIndex: 0, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...', // 绝对路径
        },
      },
    ],
    [
      'cursor-effects',
      // {
      //   size: 2, // size of the particle, default: 2
      //   shape: ['star' | 'circle'], // shape of the particle, default: 'star'
      //   zIndex: 999999999, // z-index property of the canvas, default: 999999999
      // },
    ],
    [
      '@vuepress-reco/comments',
      {
        solution: 'valine',
        options: {
          appId: 'wJBYwlHhL0WemskTB3g82D24-gzGzoHsz',
          appKey: '7M9gB0WRmYttxp82yI5UlJqD',
        },
      },
    ],
    [
      'ribbon-animation',
      {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      },
    ],
    [
      'meting',
      {
        // meting: {
        //   server: 'tencent', // netease:网易云，tencent:qq音乐，xiami:虾米音乐
        //   type: 'playlist',
        //   auto: 'https://y.qq.com/n/yqq/playlist/7929054944.html',
        // },
        meting: {
          server: 'netease', // netease:网易云，tencent:qq音乐，xiami:虾米音乐
          type: 'playlist',
          mid: '6662286334',
        },
        aplayer: {
          autoplay: true,
          mini: true,
          theme: '#282c34',
          preload: 'metadata',
        },
        mobile: {
          cover: false,
          lrc: true,
        },
      },
    ],
    [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/qrcode-alipay.jpg',
        wechat: '/qrcode-wechat.jpg',
        qq: '/qrcode-qq.jpg',
        paypal: 'https://www.paypal.com/paypalme/YoungDoCui',
        duration: null
      }
    ]
  ],
}
