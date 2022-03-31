import { createLoader, Loader } from 'html-chunk-loader/dist/loader.js';
import expr, { Request, Response, Application } from 'express';

// create your custom type for the application
interface HCLApplication extends Application {
    mainLoader ?: Loader;
};

// custom type for the response scope
interface HCLAppRequest extends Request {
    app : HCLApplication;
};

const app = expr() as HCLApplication;

const myLoader = createLoader( {
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
    },
    debug: true
} );



app.get( '/', ( req: HCLAppRequest, res: Response ) => res.send( req.app.mainLoader?.template( 'home', {
    content: 'HTML Chunk Loader',
    links: [
        { url: 'https://github.com/abschill/html-chunk-loader', label: 'Source Code' },
        { url: 'https://github.com/abschill/html-chunk-loader-examples', label: 'Examples' }
    ]
} ) ) );

//set loader on app
app.listen( 3001, () => app.mainLoader = myLoader );