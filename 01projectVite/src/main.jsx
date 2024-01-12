import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){

  return (
    <h2>return inside the main.jsx</h2>
  )
}

// const reactElement = {
//   type : 'a',
//   props: {
//       href : "https://google.com",
//       target : "_blank"
//   },
//   children : "click me to visit google"
// }

const anotherElement = (<>
  <a href='https://studio.com' target='_blank'> visit me</a>
  <h3>checking another</h3>
  </>
)

// const reactElement = React.createElement('a',{href:'https://google.com',target  : '_blank'},'click me 🙄', AnyVariable)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    anotherElement
)
