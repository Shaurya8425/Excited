1. why do we need to `import React from "react` in our files?
-To use Jsx
2. If I were to console.log(page) in index.js, what would show up?
-Will show object & to stringify you'll have to use "JSON.stringify"
3. What's wrong with this code:
```
const page=(
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
You must create variable using a parent element.
4. What does it mean for something to be 'declarative" instead of "imperative"?
d-What should be done?
i-how should it be done?
5. What does it mean for something to be "composable"?
-deals with inter-relationships of components.


1. What is a react component?
-It is html code distributed in different different function of react.

2. What's wrong with this code?
```
function myComponent(){
    return(
        <small>I'm tiny text</small>
    )
}
```
-The first letter of function name isn't by convention, It must be capital.

3. What's wrong with this code?
```
function Header(){
    return (
        <header>
        <nav>
            <img src="logo.png" width="40px" />
        </nav>
        </header>
    )
}
ReactDOM.render(Header(), document.getElementById("root"))
```
-The function is not called properly in rendering the element, It must be in closing angular bracket.
