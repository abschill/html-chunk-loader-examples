import { Loader } from 'html-chunk-loader/dist/loader.js';
import expr, { Request, Response } from 'express';

const app = expr();


const l = Loader( {
    pathRoot: 'views',
    templates: 'pages',
    partials: 'partials',
    partialInput: {
        "page_title":"Wildcard Fallback Title",
        "desc":"Wilcard Fallback Desc",
        "styles":[
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        ],
        "nav_items":[
            { url: '/', label: 'Home' },
            { url: '/test', label: 'Test' }
        ]
    }
} );




app.get( '/', ( req: Request, res: Response ) => res.send( l.template( 'home', {
    content: 'Hello World',
    tags: [
        "foo",
        "bar"
    ],
    links: [
        {
          url: '/test',
          label: 'test'
        },
        {
            url: '/test2',
            label: 'test2'
        }
       
      ]
} ) ) );

app.listen( 3001 );