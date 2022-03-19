import { Loader } from 'html-chunk-loader/dist/loader.js';
import expr, { Request, Response } from 'express';

const app = expr();


const l = Loader( {
    pathRoot: 'views',
    templates: 'pages',
    partials: 'partials',
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
    }
} );




app.get( '/', ( req: Request, res: Response ) => res.send( l.template( 'home', {
    content: 'HTML Chunk Loader',
    links: [
        { url: 'https://github.com/abschill/html-chunk-loader', label: 'Source Code' },
        { url: 'https://github.com/abschill/html-chunk-loader-examples', label: 'Examples' }
    ]
} ) ) );

app.listen( 3001 );