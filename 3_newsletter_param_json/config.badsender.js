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
                path: 'build_production_badsender',
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
		"id": "badsender",
		"name": "Badsender",
		
		"color": {
			"primary": {
				"value": "#FFD845",
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
			"logo_url": "https://live.lepatron.email/test/gvg/emday_2023/badsender/template_newsletter-badsender_black_01.png",
			"logo_link": "https://www.badsender.com",
		},
		"footer": {
			"logo_url": "https://live.lepatron.email/test/gvg/emday_2023/badsender/template_newsletter-badsender_black_01.png",
			"logo_link": "https://www.badsender.com",
		},
	
		"title": {
			"color": {
				"value": "#141414",
				"type": "",
			},
		},
	
		"text": {
			"color": {
				"value": "#141414",
				"type": "",
			},
		},
	
		"edito": {
			"copy": "Chers abonn&#233;s,<br><br>Nous sommes ravis de partager une nouvelle exaltante&nbsp;: Badsender, la soci&#233;t&#233; pionni&#232;re du marketing num&#233;rique, vient d&#39;acqu&#233;rir une &#238;le tropicale pittoresque pour y &#233;tablir ses bureaux. Cette d&#233;cision audacieuse marque une &#233;tape majeure dans l&#39;&#233;volution de notre entreprise.<br><br>Situ&#233;e dans des eaux cristallines, cette &#238;le offre un cadre enchanteur et inspirant pour notre &#233;quipe. Imaginez des palmiers se balan&#231;ant doucement au vent, des plages de sable blanc et une vue imprenable sur l&#39;oc&#233;an. Un environnement unique, propice &#224; la cr&#233;ativit&#233; et &#224; l&#39;innovation.<br><br>Cette nouvelle initiative s&#39;aligne parfaitement avec notre philosophie ax&#233;e sur le bien-&#234;tre et sur l&#39;&#233;quilibre entre vie professionnelle et personnelle. Les bureaux de Badsender sur cette &#238;le offriront un cadre idyllique pour cultiver la productivit&#233; et la collaboration, tout en profitant de la beaut&#233; naturelle qui nous entoure.<br><br>Nous sommes impatients de vous tenir au courant des d&#233;veloppements futurs et des projets passionnants qui &#233;mergeront de notre nouvelle base paradisiaque.<br><br>L&#39;&#233;quipe de Badsender",
		},
		"articles": {
			"article_1": {
				"titre": "Une nouvelle &#232;re commence",
				"copy": "Badsender vient d&#39;acqu&#233;rir Amazon et annonce son d&#233;mant&#232;lement. Cette d&#233;cision audacieuse marque un tournant majeur dans l&#39;industrie du commerce &#233;lectronique. Restez &#224; l&#39;&#233;coute pour plus de d&#233;tails sur cette nouvelle &#232;re passionnante.",
				"cta": "BIEN JOU&#201; !",
				"image": "images/article_1.jpeg",
				"tag": "INSIDE",
				"href": "https://www.badsender.com",
			},
			"article_2": {
				"titre": "Badsender vers la pr&#233;sidence",
				"copy": "Nous avons le plaisir de vous annoncer que Jonathan Loriaux, CEO de Badsender, a officiellement d&#233;clar&#233; sa candidature &#224; la pr&#233;sidence fran&#231;aise. Sa vision novatrice et son engagement envers le progr&#232;s promettent une campagne &#233;lectorale passionnante.",
				"cta": "JE VOTE BADSENDER&nbsp;!",
				"image": "images/article_2.jpeg",
				"tag": "POLITIQUE",
				"href": "https://www.badsender.com",
			},
			"article_3": {
				"titre": "La g&#233;n&#232;se de Badsender",
				"copy": "La Warner Bros a officiellement annonc&#233; la production d&#39;un film d&#233;di&#233; &#224; l&#39;histoire fascinante de la cr&#233;ation de Badsender. Ce projet cin&#233;matographique promet de plonger le public dans les origines de notre entreprise et de mettre en lumi&#232;re les moments cl&#233;s qui ont fa&#231;onn&#233; notre succ&#232;s. Restez &#224; l&#39;aff&#251;t pour plus d&#39;informations sur cette incroyable aventure cin&#233;matographique.",
				"cta": "REGARDEZ LA BANDE ANNONCE",
				"image": "images/article_3.jpeg",
				"tag": "MOVIE",
				"href": "https://www.badsender.com",
			},
		},
	
	},
}
