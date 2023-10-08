import React from "react"
import ReactDOM from "react-dom"
import './style.css'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
// const page=(
//     <div>
//     <img src="logo192.png" width="40px" alt="" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
// document.getElementById("root").append(JSON.stringify(page))
// ReactDOM.render(page,document.getElementById("root"))

/*
Find out what happens if we try to append jsx to our div#root using .append() instead of ReactDOM
1. create a sample page in JSX (>= 4 elements) and save then in a variable
2. select the div with the ID or "root" and use `.append()` to append your jsx
3. see if you can guess what will show up in the browser before running
4. see if you can explain what actually shows up in the browser
*/

/*
fix the code!
Don't forget, you're not using CDNs anymore, so there's no global "ReactDOM" variable to use anymore.
*/

/*
Starting from scratch, build and render the html for our section project. Check the google slide for what you're tying to build.
We'll be adding styling to it later.
Hints:
*The react logo is a file in the project trees, so you can access it by using `src="./react-logo.png" in your image element.
*You can also set the `width` attribute of the image element just like in HTML. In the slide, I have it set to 40px
*/

// function TempName(){
//     return(
//         <div>
//     <img src="logo192.png" width="40px" alt="" />
//         {/* <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul> */}
//     </div>
//     )
// }
// ReactDOM.render(<TempName/>,document.getElementById("root"))

/*
Part 1: Create a page of your own using a custom page component.
It should return an ordered list with the reasons why you're excited to be learning react :)
Render your list to the page
*/



function App(){
    return(
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
        
    )
    }
// ReactDOM.render(<Header/>,document.getElementById("header"))
// ReactDOM.render(<MyPage/>,document.getElementById("segment"))
// ReactDOM.render(<Footer/>,document.getElementById("footer"))
ReactDOM.render(<App/>,document.getElementById("segment"))

/*
Move the `header` element from page into its own component called "Header"
*/

/*
-Move the `footer` into its own component called "Footer" and render that component inside the page component.
-Move the `h1` and `ol` together into another component called "MainContent" and render inside Page as well.
*/

/*
-Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Contact"
-Using flexbox, line up the nav items horizontally, and put them inline with the react logo.
*/

/*
-Create a `components` folder
-Create the following components in separate files inside the components folder. In each one, just render an `h1` with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    -Navbar
    -Main
-Create an App component outside the components folder (sibling to the index.js file)
    -Have App render the Navbar and Main components
-Import and render the App component inside of index.js using ReactDOM
    -At this point you should have your "Navbar goes here" etc. showing up in the mini-browser.
-Go to Google fonts and get the "Inter" font with weights 400, 600, and 700. Put the links to those fonts ABOVE the style.css link in index.html (Use the `<link/>` elements instead of the @import or npm options for getting the fonts. You may need to do some extra research to figure out out how this works if you haven't done it before)
*/