 /*
 * How to create the below structure
 *<div id="parent">
 *      <div id="child">
 *          <h1> I'm a H1 Tag </h1>
 *.         <h2>  I'm a H2 Tag </h2> 
 *      <div>
 *      <div id="child2">
 *          <h1> I'm a H1 Tag </h1>
 *.         <h2>  I'm a H2 Tag </h2> 
 *      <div>
 * </div>
 */

 const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1", {id:"heading1"},"I am a H1 Tag!"),
     React.createElement("h2",{id: "heading2"}, "I'm a H2 Tag")]),
     React.createElement("div",{id:"child2"},
    [React.createElement("h1", {id:"heading1"},"I am a H1 Tag!"),
     React.createElement("h2",{id: "heading2"}, "I'm a H2 Tag")])]
);

 
console.log(parent); 
 
 // This is how you create an element in react - createElement function w/ 3 arguments- ("element type to be created"
//, object - empty for now, "What to put inside the element")
     const heading = React.createElement("h1", {id: "heading"},  "Hello World From React"); 

     console.log(heading); //This gives you a JS object

//In React you have to create a root to render in your browser and that is created through ReactDOM. It takes in 
//the element to render on the browser.
    const root = ReactDOM.createRoot(document.getElementById("root"));
   // const body = ReactDOM.createRoot(document.body);


//.render() renders the DOM in the browser with the heading element inside it
    root.render(parent);
    //body.render(parent);
//The render method is responsible for converting the h1 JS object to a h1 tag and putting it
 // in the HTML