({
    baseUrl: "../",
    name: "node_modules/almond/almond.js",
    out: "../dist/converse.nojquery.min.js",
    include: ['converse'],
    exclude: ['jquery', 'jquery-private'],
    insertRequire: ['converse'],
    mainConfigFile: '../config.js',
    wrap: {
        endFile: "wrapper-no-jquery.js"
    }
})
