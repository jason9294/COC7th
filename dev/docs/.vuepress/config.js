module.exports = {
    title: 'COC7版規則 廚房筆記',
    description: 'COC7th 規則筆記',
    base: '/COC7th/',

    plugins: ['@vuepress/back-to-top'],

    markdown: {
        lineNumbers: true
    },
    
    themeConfig: {
        smoothScroll: true,
        nextLinks: false,
        prevLinks: false,
        sidebar: {
            '/guide/': [
                '',
              {
                title: '每日功能',
                //path: '/guide/daily/',      // 可选的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/guide/daily/1A2B',
                    '/guide/daily/covid-19',
                ]
              },
              {
                title: '自訂義回覆',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/guide/custom_reply/dictionary',
                    '/guide/custom_reply/keyword'
                ]
              },
              {
                title: 'TRPG',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/guide/trpg/dice',
                ]
              }
            ],

            // fallback
            '/': [
              '/intro',
              '/建立調查員',
            ]
          },

        nav: [
            { text: 'Home', link: '/' }
        ]
    }
}