# Episode-7-Finding-the-Path-
## Theory

Qn1. What are different ways to add images into our App?

- 1.Through CDN links.
- Image <img src={CDN_LINK} alt="image"/>

- 2. By using local images & importing it.
- import logo from './logo.png'; 

- image:<img src={logo} alt="Logo" />;


Qn2. WHat Would happen if we console.log(useState())?

- if we console the useState , we receive first value as undefined and second as a function.
- (2) [undefined, ƒ]
- 0: undefined 
- 1: ƒ ()length: 2[[Prototype]]: Array(0)

Qn3. How will useEffect behave without dependency array?

- WIthout dependency array, useEffect will re-render everytime on component render or anything changes.
- useEffect(()=>{})

Qn4. What is Spa?

- SPA stands for Single Page Application.
- A single-page application is an app that doesn't need to reload the page during its use and works within a browser. 
- Advantages of Single-page Apps
- 1.Optimization.
- 2.Client-side rendering.
- 3.User experience.
- 4.Easy debugging.
- 5.Performance.
- 6.Less complex implementation.
- 7.Better caching.

Qn5. WHat is difference between Client-Side and Server-Side-Routing?

- With a client-side rendering solution, you redirect the request to a single HTML file and the server will deliver it without any content (or with a loading screen) until you fetch all the JavaScript and let the browser compile everything before rendering the content.
-  With old server-side rendering solutions, you built a web page,the server compiled everything, included the data, and delivered a fully populated HTML page to the client. It was fast and effective.But… every time you navigated to another route, the server had to do the work all over again.
-  When we talk about client-side rendering, it’s about rendering content in the browser using JavaScript. So instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.
- With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast. In this approach, communication with server happens only for getting the run-time data. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.

- https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/

