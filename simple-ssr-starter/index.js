const express = require( 'express' );
const app = express();
const createLoader = require( 'html-chunk-loader' );
const Handler = createLoader({
     partialInput: {
        title: 'HTML Chunk Loader',
        styles: [
            'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
        ],
        links: [
            { url: 'https://github.com/abschill/html-chunk-loader', label: 'Source Code' },
            { url: 'https://github.com/abschill/html-chunk-loader-examples', label: 'Examples' }
        ]
    },
    //enable watch mode to register file changes without rebooting server - new in 0.1.8
    watch: true
});


app.get( '/', ( req, res ) => {
    const page = Handler.template( 'home', {
        content: 'Home Page',
    } );
    res.send( page );
} );

app.listen( 3000 );