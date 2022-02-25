"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_js_1 = require("html-chunk-loader/dist/loader.js");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const l = (0, loader_js_1.Loader)({
    pathRoot: 'views',
    templates: 'pages',
    partials: 'partials',
    partialInput: {
        "page_title": "Wildcard Fallback Title",
        "desc": "Wilcard Fallback Desc",
        "styles": [
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        ],
        "nav_items": [
            { url: '/', label: 'Home' },
            { url: '/test', label: 'Test' }
        ]
    }
});
app.get('/', (req, res) => res.send(l.template('home', {
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
})));
app.listen(3001);
