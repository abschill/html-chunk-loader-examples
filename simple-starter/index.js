const loader = require( 'html-chunk-loader' );
const mockDatabase = require( './mock/data.json' );
const partialData = () =>{
    return {
        //this value can be overridden by the second argument in the template function
        "*": {
            "page_title":"Hello World"
        },
        head:{
            "desc": "Cool Description",
            "styles":[
                    "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            ]
        },
        nav: {
            page_title: "Navbar Title",
            links:[
                { url: '/', label: 'Home' },
                { url: '/test', label: 'Test' }
            ]
        }
    }
}
const templateData = ( id ) => {
    if( id ) {
        const matchedPost = mockDatabase.filter( d => d.id === id )[0];
        return matchedPost;
    }
    else {
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
            "home":{
                items2: [
                    { 'title': 'foo', desc: 'foo' },
                    { 'title': 'bar', desc: 'bar' }
                ]
            },
            "about":{
                content: 'About Page',
                "list":[
                    "foo", 'bar'
                ]
            }
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
const post0 = { blog_post: getPostTitle( 0 ) };
const post1 = { blog_post: getPostTitle( 1 ) };
// myLoader.loadTemplate( 'about' );
const template0 = myLoader.template( 'home' );
const template1 = myLoader.template( 'post', post0 );
const template2 = myLoader.template( 'post', post1 ); 
console.log( template0 );
console.log( '~~~~~~~~~~~~');
console.log( template1 );
console.log( '~~~~~~~~~~~~');
console.log( template2 );