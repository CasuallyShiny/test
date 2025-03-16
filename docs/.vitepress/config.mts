import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shiny",
  description: "A VitePress Site",
  base: '/main/',
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQ', link: '/others/faq' },
      { text: 'Info', link: '/others/info' }
    ],

    sidebar: [
      {
        

        text: 'Guide',
        items: [
          { text: 'Pranks', link: '/pranks' },
          { text: 'Hacker tools', link: '/hack' },
          { text: 'Security', link: '/Security' },
          { text: 'Piracy', link: '/piracy' },
          { text: 'Miscellaneous', link: '/miscellaneous' },
          { text: 'FAQ', link: '/others/faq' },
          { text: 'info', link: '/others/info' }
        ]

        
        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress'},
      { icon: 'twitter', link: 'https://github.com/vuejs/vitepress'}

    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
  
})

