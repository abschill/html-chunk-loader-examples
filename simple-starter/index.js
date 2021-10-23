const loader = require( 'html-chunk-loader' );
const mockDatabase = require( './mock/data.json' );
const partialData = () =>{
    return {
        //this value can be overridden by the second argument in the template function
        "*": {
            "page_title":"My Blog",
            "desc": "Cool Description",
        },
        head:{
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
    }
}
const templateData = ( ) => {
    return { 
        //Same with this one
        "*": {
            content: 'My Blog',
            page_description: 'Fallback Website Description',
            items: [
                'foo',
                'bar'
            ]
        },
        "about":{
            page_title: 'About Page',
            content: 'About Page',
            "list":[
                "foo", 'bar'
            ]
        }
    } 
    
}
function getPostTitle( id ) {
    const matchedPost = mockDatabase.filter( d => d.id === id )[0];
    return matchedPost.title;
}
const myLoader = loader( {
    pathRoot: "views",
    partialInput: partialData(),
    templateInput: templateData(),
    debug: false
} );
const title0 = getPostTitle( 0 );
const title1 = getPostTitle( 1 );

// myLoader.loadTemplate( 'about' );
const template0 = myLoader.template( 'home', {
    items2:[
        { 'title': 'foo', desc: 'foo' },
        { 'title': 'bar', desc: 'bar' }
] } );
const template1 = myLoader.template( 'about' );
//can override title in this argument
const template2 = myLoader.template( 'post', { partialInput: { page_title: title0 }, blog_post: title0 } );
const template3 = myLoader.template( 'post', { partialInput: { page_title: title1 }, blog_post: title1 } ); 
console.log( template0 );
console.log( '~~~~~~~~~~~~');
console.log( template1 );
console.log( '~~~~~~~~~~~~');
console.log( template2 );
console.log( '~~~~~~~~~~~~');
console.log( template3 );