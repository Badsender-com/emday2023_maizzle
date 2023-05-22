/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
    build: {
        templates: {
            destination: {
                path: 'build_production_emday',
            },
        },
    },
    inlineCSS: true,
    removeUnusedCSS: true,
    removeUnusedCSS: {
        removeHTMLComments: false,
    },
    shorthandCSS: true,
    prettify: true,
    prettify: {
        indent_with_tabs: true,
    },
    extraAttributes: {
        img: {
            border: '0'
        },
        table: {
            border: '0',
            role: 'presentation',
            cellpadding: '0',
            cellspacing: '0'
        },
		a: {
			target: '_blank',
		},
    },
	"brand": { 
		"id": "emday",
		"name": "EMDay",
		
		"color": {
			"primary": {
				"value": "#F19300",
				"type": "",
			},
			"secondary": {
				"value": "#2f6d7b",
				"type": "",
			},
			"black": {
				"value": "#141414",
				"type": "",
			},
			"grey": {
				"value": "#444444",
				"type": "",
			},
		},

		"header": {
			"logo_url": "https://live.lepatron.email/test/gvg/emday_2023/emday/logo_emday.png",
			"logo_link": "https://www.emday.fr/",
		},
		"footer": {
			"logo_url": "https://live.lepatron.email/test/gvg/emday_2023/emday/logo_emday_footer.png",
			"logo_link": "https://www.emday.fr/",
		},
	
		"title": {
			"color": {
				"value": "#2f6d7b",
				"type": "",
			},
		},
	
		"text": {
			"color": {
				"value": "#666666",
				"type": "",
			},
		},
	
		"edito": {
			"copy": "Chers lecteurs,<br><br>Nous sommes ravis de vous annoncer la prochaine &#233;dition de l&#39;EMDay, l&#39;&#233;v&#233;nement phare de l&#39;industrie du marketing num&#233;rique. Mais cette fois-ci, nous avons une surprise de taille : l&#39;EMDay 2023 se d&#233;roulera sur une &#238;le tropicale paradisiaque&nbsp;!<br><br>Pr&#233;parez-vous &#224; vivre une exp&#233;rience unique, m&#234;lant connaissances, r&#233;seautage et d&#233;tente dans un cadre enchanteur. Imaginez des sessions inspirantes sur la plage, des ateliers au bord de l&#39;eau et des discussions anim&#233;es sous les palmiers. Cette &#233;dition sp&#233;ciale sur une &#238;le tropicale offrira aux participants une immersion totale dans l&#39;univers du marketing num&#233;rique, tout en profitant des beaut&#233;s naturelles qui les entourent.<br><br>Restez &#224; l&#39;aff&#251;t des d&#233;tails concernant la destination et les dates exactes de l&#39;EMDay 2023. Pr&#233;parez-vous &#224; vous &#233;vader vers un paradis marketing et &#224; vivre une exp&#233;rience inoubliable.<br><br>Cordialement,<br><br>L&#39;&#233;quipe de l&#39;EMDay",
		},
		"articles": {
			"article_1": {
				"titre": "Une nouvelle &#232;re commence",
				"copy": "l'EMDay vient d&#39;acqu&#233;rir Amazon et annonce son d&#233;mant&#232;lement. Cette d&#233;cision audacieuse marque un tournant majeur dans l&#39;industrie du commerce &#233;lectronique. Restez &#224; l&#39;&#233;coute pour plus de d&#233;tails sur cette nouvelle &#232;re passionnante.",
				"cta": "BIEN JOU&#201; !",
				"image": "images/article_1.jpeg",
				"tag": "INSIDE",
				"href": "https://www.emday.fr",
			},
			"article_2": {
				"titre": "Remy Parmentier vers la pr&#233;sidence",
				"copy": "Nous avons le plaisir de vous annoncer que Régis Bacher, membre fondateur de l'EMDay, a officiellement d&#233;clar&#233; sa candidature &#224; la pr&#233;sidence fran&#231;aise. Sa vision novatrice et son engagement envers le progr&#232;s promettent une campagne &#233;lectorale passionnante.",
				"cta": "JE VOTE R&#201;GIS&nbsp;!",
				"image": "images/article_4.jpeg",
				"tag": "POLITIQUE",
				"href": "https://www.emday.fr",
			},
			"article_3": {
				"titre": "La g&#233;n&#232;se de l'EMDay",
				"copy": "La Warner Bros a officiellement annonc&#233; la production d&#39;un film d&#233;di&#233; &#224; l&#39;histoire fascinante de la cr&#233;ation de l'EMDay. Ce projet cin&#233;matographique promet de plonger le public dans les origines de notre entreprise et de mettre en lumi&#232;re les moments cl&#233;s qui ont fa&#231;onn&#233; notre succ&#232;s. Restez &#224; l&#39;aff&#251;t pour plus d&#39;informations sur cette incroyable aventure cin&#233;matographique.",
				"cta": "REGARDEZ LA BANDE ANNONCE",
				"image": "images/article_3.jpeg",
				"tag": "MOVIE",
				"href": "https://www.emday.fr",
			},
		},
	
	},
}
