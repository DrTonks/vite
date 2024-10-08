import { defineConfig } from 'vitepress'
import mathjax3 from "markdown-it-mathjax3";
import { set_sidebar } from "./utils/auto_sidebar.mjs";	
const customElements = [
	
	"math",
	"maction",
	"maligngroup",
	"malignmark",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mi",
	"mlongdiv",
	"mmultiscripts",
	"mn",
	"mo",
	"mover",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"ms",
	"mscarries",
	"mscarry",
	"mscarries",
	"msgroup",
	"mstack",
	"mlongdiv",
	"msline",
	"mstack",
	"mspace",
	"msqrt",
	"msrow",
	"mstack",
	"mstack",
	"mstyle",
	"msub",
	"msup",
	"msubsup",
	"mtable",
	"mtd",
	"mtext",
	"mtr",
	"munder",
	"munderover",
	"semantics",
	"math",
	"mi",
	"mn",
	"mo",
	"ms",
	"mspace",
	"mtext",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"msqrt",
	"mstyle",
	"mmultiscripts",
	"mover",
	"mprescripts",
	"msub",
	"msubsup",
	"msup",
	"munder",
	"munderover",
	"none",
	"maligngroup",
	"malignmark",
	"mtable",
	"mtd",
	"mtr",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"msline",
	"msrow",
	"mstack",
	"maction",
	"semantics",
	"annotation",
	"annotation-xml",
	"mjx-container",
	"mjx-assistive-mml",
];


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/Vite/",
  head: [["link", { rel: "icon", href: "https://tonks-blog-1329849192.cos.ap-chengdu.myqcloud.com/IMG_1512(20240928-154358).JPG" }]],
  title: "Dr.Tonks",
  description: "A site for learning",
  themeConfig: {
	outlineTitle: "当前文章目录",
	outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
	
      { text: '主页', link: '/' },
      { text: '问题解决', 
		items:[{text:'关于LaTeX的渲染',link:'/post/问题解决/LaTeX'},
			   {text:'Vitepress网站部署问题',link:'/post/问题解决/网站部署问题'},
		]
	   },
	   { text: '每日一题', 
		items:[
			   {text:'动态变化搜索栏',link:'/post/前端每日一题/动态变化搜索栏'},
			   {text:'登陆注册页面',link:'/post/前端每日一题/坐标获取（登录界面）'},
		]
	   },
	  { text: '学习笔记', 
		items:[
			{text:'ECMAScript规范学习01',link:'/post/学习笔记/ECMAScript规范学习01'},
			{text:'ECMAScript规范学习02',link:'/post/学习笔记/ECMAScript规范学习02'},
			{text:'ECMAScript规范学习03',link:'/post/学习笔记/ECMAScript规范学习03'},
			{text:'机器学习笔记02',link:'/post/学习笔记/机器学习笔记02'},
			{text:'模块化开发笔记',link:'/post/学习笔记/模块化开发'},
	  ] }
    ],

    sidebar: {
    //   {
    //     text: '问题解决',
    //     items: [
    //       { text: '关于LaTeX渲染', link: '/_post/latex' },
          
    //     ],
	// },
	// {
	// 	text: '学习笔记',
	// 	items: [
	// 		{text: '机器学习笔记02', link:'/_post/机器学习笔记'},
	// 	], 
    //   },
		// "/post/学习笔记" : set_sidebar("post/学习笔记"),
		// "/post/问题解决" : set_sidebar("post/问题解决"),
		"/post" : set_sidebar("post"),
	},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DrTonks' }
    ],
	search:{
		provider:"local",
		options:{
			translations:{
				button:{
					buttonText:"搜索文档",
					buttonAriaLabel:"搜索文档",
				},
				modal:{
					noResultsText:"无法找到相关结果",
					resetButtonTitle:"清除查询条件",
					footer:{
						selectText:"选择",
						navigateText:"切换",
					}
				}
			}
		}
	},
    footer:{
      copyright:"Copyright@2024 Dr.Tonks "
    },
      
    
  },
  markdown: {
		config: (md) => {
			md.use(mathjax3);
		},
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},

})
