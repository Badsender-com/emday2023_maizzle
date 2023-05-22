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
                path: 'build_production',
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
}
