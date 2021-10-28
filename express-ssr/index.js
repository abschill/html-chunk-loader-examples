const express = require( 'express' );
const app = express();
const loader = require( 'html-chunk-loader' );
const Handler = loader({
     partialInput: {
        "*": {
            "page_title":"Title for your Blog"
        },
        head:{
            "desc": "Cool Description",
            "styles":[
                    "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            ]
        },
        nav: {
            links:[
                { url: '/', label: 'Home' },
                { url: '/test', label: 'Test' }
            ]
        }
    },
    //enable watch mode to register file changes without rebooting server - new in 0.1.8
    watch: true
});


app.get( '/', ( req, res ) => {
    const page = Handler.template( 'home', {
        content: 'Home Page',
        items: [
            'foo', 'bar'
        ],
        items2: [
            { url: '/about', label: 'About'},
            { url: '/contact', label: 'Contact' }
        ]
    } );
    res.send( page );
} );

app.listen( 3000 );